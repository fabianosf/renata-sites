import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";
import { validateContactForm, sanitizeFormData } from "@/utils/validation";

const FORM_ACTION = "https://formsubmit.co/ajax/renatabastosnutri@gmail.com";
const FORM_ACTION_FALLBACK = "https://formsubmit.co/renatabastosnutri@gmail.com";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função helper para criar inputs hidden
  const createHiddenInput = (name: string, value: string): HTMLInputElement => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
  };

  // Função para submeter formulário HTML tradicional como fallback
  const submitFallbackForm = (formData: FormData, subjectText: string) => {
    const fallbackForm = document.createElement("form");
    fallbackForm.method = "POST";
    fallbackForm.action = FORM_ACTION_FALLBACK;
    fallbackForm.target = "_blank";

    // Adicionar todos os campos do FormData
    formData.forEach((value, key) => {
      if (value instanceof File) {
        return;
      }
      fallbackForm.appendChild(createHiddenInput(key, value.toString()));
    });

    // Campos do FormSubmit

    fallbackForm.appendChild(createHiddenInput("_template", "table"));
    fallbackForm.appendChild(createHiddenInput("_captcha", "false"));
    fallbackForm.appendChild(createHiddenInput("_subject", `Novo Contato: ${subjectText} | Clínica Renata Bastos`));

    document.body.appendChild(fallbackForm);
    fallbackForm.submit();
    setTimeout(() => {
      if (document.body.contains(fallbackForm)) {
        document.body.removeChild(fallbackForm);
      }
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setIsSubmitting(true);

    // 1. Validação
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      validation.errors.forEach((error: string) => toast.error(error));
      setIsSubmitting(false);
      return;
    }

    // 2. Sanitização
    const sanitized = sanitizeFormData(formData);

    // 3. Assunto legível (sempre em português - vai para o e-mail da clínica)
    const subjectMap: Record<string, string> = {
      consulta: "Agendar Consulta",
      orcamento: "Solicitar Orçamento",
      duvidas: "Tirar Dúvidas",
      outros: "Outros",
    };
    const subjectText = subjectMap[sanitized.subject] || sanitized.subject;

    // 4. Dados para FormSubmit
    const body = new FormData();
    body.append("name", sanitized.name);
    body.append("email", sanitized.email);
    body.append("phone", sanitized.phone);
    body.append("subject", subjectText);
    body.append("message", sanitized.message);

    // Campos especiais do FormSubmit[web:18]
    body.append(
      "_subject",
      `Novo Contato: ${subjectText} | Clínica Renata Bastos`
    );
    body.append("_template", "table");    // e-mail em formato de tabela[web:18]
    body.append("_captcha", "false");     // desativa captcha nesse formulário[web:18]

    try {
      console.log("📤 Enviando para:", FORM_ACTION);

      // Criar AbortController para timeout (aumentado para 40 segundos)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 40000); // 40 segundos

      let response: Response;
      try {
        response = await fetch(FORM_ACTION, {
          method: "POST",
          body,
          signal: controller.signal,
          mode: "cors",
        });
        clearTimeout(timeoutId);
      } catch (fetchError: any) {
        clearTimeout(timeoutId);

        // Verificar se foi abortado por timeout
        if (fetchError.name === "AbortError") {
          // Em caso de timeout, usar formulário HTML tradicional como fallback
          console.warn("⚠️ Timeout no AJAX, usando formulário HTML tradicional como fallback");
          submitFallbackForm(body, subjectText);
          toast.success(t("contact.messages.fallbackSuccess"));
          // Limpar formulário
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setErrors([]);
          setIsSubmitting(false);
          return;
        }

        // Verificar se foi erro de CORS
        if (fetchError.message?.includes("CORS") || fetchError.message?.includes("Failed to fetch")) {
          throw new Error(t("contact.messages.corsError"));
        }

        throw fetchError;
      }

      console.log("📥 Status:", response.status, response.statusText);

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        console.error("❌ Erro HTTP FormSubmit:", text);

        // Mensagens específicas para erros comuns
        if (response.status === 524 || response.status === 504) {
          throw new Error(t("contact.messages.timeoutError"));
        }
        if (response.status === 503 || response.status === 502) {
          throw new Error(t("contact.messages.unavailableError"));
        }
        if (response.status >= 500) {
          throw new Error(t("contact.messages.serverError"));
        }

        throw new Error(t("contact.messages.genericError"));
      }

      let responseText = "";
      try {
        responseText = await response.text();
        console.log("📧 Resposta FormSubmit:", responseText.substring(0, 200));
      } catch (err) {
        console.warn("⚠️ Não foi possível ler a resposta:", err);
      }

      const lower = responseText.toLowerCase();
      if (
        lower.includes("verify") ||
        lower.includes("confirmation") ||
        lower.includes("check your email") ||
        lower.includes("please verify")
      ) {
        toast.warning(t("contact.messages.verifyWarning"));
        // Limpar formulário mesmo quando precisa verificar
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors([]);
      } else if (
        lower.includes("success") ||
        lower.includes("obrigado") ||
        lower.includes("thank you") ||
        response.status === 200 ||
        response.status === 302
      ) {
        toast.success(t("contact.messages.success"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors([]);
      } else {
        // Se não identificou claramente, mas não deu erro, considerar sucesso
        toast.success(t("contact.messages.success"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors([]);
      }
    } catch (error) {
      console.error("❌ Erro ao enviar formulário:", error);
      let message = t("contact.messages.genericError");

      if (error instanceof Error && error.message) {
        message = error.message;
      }

      toast.error(message);
      setErrors([message]);
    } finally {
      console.log("🔄 Resetando estado do formulário");
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.info.phoneTitle"),
      info: siteConfig.contact.phone,
      link: siteConfig.contact.phoneLink,
    },
    {
      icon: Mail,
      title: t("contact.info.emailTitle"),
      info: siteConfig.contact.email,
      link: siteConfig.contact.emailLink,
    },
    {
      icon: MapPin,
      title: t("contact.info.addressTitle"),
      info: `${siteConfig.contact.address}${siteConfig.contact.addressNote ? ` - ${siteConfig.contact.addressNote}` : ''} | ${siteConfig.contact.addressSecondary}`,
      link: siteConfig.contact.addressLink,
    },
    {
      icon: Clock,
      title: t("contact.info.hoursTitle"),
      info: siteConfig.contact.hours,
      link: null,
    },
  ];

  return (
    <section id="contato" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.length > 0 && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-destructive mb-2">
                        {t("contact.form.errorsTitle")}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-destructive">
                        {errors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="name">{t("contact.form.nameLabel")}</Label>
                <Input
                  id="name"
                  placeholder={t("contact.form.namePlaceholder")}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setErrors([]);
                  }}
                  required
                  className="mt-2"
                  maxLength={100}
                />
              </div>

              <div>
                <Label htmlFor="email">{t("contact.form.emailLabel")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setErrors([]);
                  }}
                  required
                  className="mt-2"
                  maxLength={254}
                />
              </div>

              <div>
                <Label htmlFor="phone">{t("contact.form.phoneLabel")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t("contact.form.phonePlaceholder")}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    setErrors([]);
                  }}
                  required
                  className="mt-2"
                  maxLength={15}
                />
              </div>

              <div>
                <Label htmlFor="subject">{t("contact.form.subjectLabel")}</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder={t("contact.form.subjectPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulta">{t("contact.form.subjectSchedule")}</SelectItem>
                    <SelectItem value="orcamento">
                      {t("contact.form.subjectQuote")}
                    </SelectItem>
                    <SelectItem value="duvidas">{t("contact.form.subjectQuestions")}</SelectItem>
                    <SelectItem value="outros">{t("contact.form.subjectOther")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">{t("contact.form.messageLabel")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("contact.form.messagePlaceholder")}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    setErrors([]);
                  }}
                  required
                  rows={5}
                  className="mt-2"
                  maxLength={2000}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {t("contact.form.charactersCount", { count: formData.message.length })}
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
              </Button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-6 animate-slide-up">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-background p-6 rounded-2xl shadow-subtle hover:shadow-elevated transition-smooth"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                        target={
                          item.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.info}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-elevated h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1234567890!2d-43.2345678!3d-22.9123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e5bfcef45a7%3A0x1234567890abcdef!2sEd%20Corporate%20-%20Eng%20Ednaldo%20Cravo%20Peixoto%2C%20105%2C%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("contact.mapTitle")}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
