import { useState } from "react";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setIsSubmitting(true);

    // 1. Validação
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      validation.errors.forEach((error) => toast.error(error));
      setIsSubmitting(false);
      return;
    }

    // 2. Sanitização
    const sanitized = sanitizeFormData(formData);

    // 3. Preparação dos dados para FormSubmit
    // Email principal: fabiano.freitas@gmail.com (tem acesso)
    // Email cópia: renatabastosnutri@gmail.com
    const formAction = "https://formsubmit.co/ajax/fabiano.freitas@gmail.com";
    
    // Mapear assunto para texto legível
    const subjectMap = {
      consulta: "Agendar Consulta",
      orcamento: "Solicitar Orçamento",
      duvidas: "Tirar Dúvidas",
      outros: "Outros"
    };
    
    const subjectText = subjectMap[sanitized.subject] || sanitized.subject;

    // Preparar dados do formulário com formato profissional
    const formDataForSubmit = new FormData();
    
    // Criar corpo do email formatado de forma profissional
    const emailBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    📧 NOVO CONTATO - CLÍNICA RENATA BASTOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 NOME COMPLETO:
   ${sanitized.name}

📧 EMAIL DE CONTATO:
   ${sanitized.email}

📱 TELEFONE/WHATSAPP:
   ${sanitized.phone}

📋 ASSUNTO:
   ${subjectText}

💬 MENSAGEM:
   ${sanitized.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    
    // Usar apenas o campo "message" com o corpo formatado
    formDataForSubmit.append("message", emailBody.trim());
    
    // Configurações do FormSubmit
    formDataForSubmit.append("_subject", `📧 Novo Contato: ${subjectText} | Clínica Renata Bastos`);
    formDataForSubmit.append("_cc", "renatabastosnutri@gmail.com");
    formDataForSubmit.append("_template", "box");
    formDataForSubmit.append("_captcha", "false");
    formDataForSubmit.append("_autoresponse", `Olá ${sanitized.name},\n\nRecebemos sua mensagem e entraremos em contato em breve!\n\nAtenciosamente,\nEquipe Clínica Renata Bastos`);
    formDataForSubmit.append("_honey", "");

    try {
      // Envio via FormSubmit
      const response = await fetch(formAction, {
        method: "POST",
        body: formDataForSubmit,
      });

      // FormSubmit pode retornar JSON ou texto
      let result;
      const contentType = response.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        // Tentar parsear como JSON, se falhar usar texto
        try {
          result = JSON.parse(text);
        } catch {
          result = { success: response.ok, message: text || "Email enviado com sucesso" };
        }
      }

      // Log da resposta completa (sempre visível para debug)
      console.log("📧 FormSubmit - Resposta da API:", result);

      // Verificação detalhada
      // FormSubmit retorna 200 OK quando sucesso, mesmo sem JSON
      // IMPORTANTE: Na primeira vez, FormSubmit pode retornar mensagem pedindo verificação do email
      const responseText = typeof result === 'string' ? result : JSON.stringify(result);
      const needsVerification = responseText.includes("verify") || 
                                responseText.includes("confirmation") || 
                                responseText.includes("confirm your email");
      
      if (response.ok && !needsVerification) {
        console.log("✅ FormSubmit - Email enviado com sucesso!");
        console.log("📬 Dados enviados:", {
          nome: sanitized.name,
          email: sanitized.email,
          telefone: sanitized.phone,
          assunto: subjectText
        });
        
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        // Limpa o formulário
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setErrors([]);
      } else if (needsVerification) {
        // Primeira vez usando o email - precisa verificar
        console.warn("⚠️ FormSubmit - Email precisa ser verificado!");
        console.warn("📧 Verifique a caixa de entrada de fabiano.freitas@gmail.com");
        console.warn("📧 Procure por um email do FormSubmit e clique no link de confirmação");
        
        toast.warning("Verifique seu email! Você receberá um link de confirmação do FormSubmit. Após confirmar, os emails começarão a chegar normalmente.");
        
        // Não limpa o formulário para o usuário poder tentar novamente depois
      } else {
        // Log de erro detalhado
        console.error("❌ FormSubmit - Erro no envio:", result);
        console.error("Status HTTP:", response.status);
        console.error("Detalhes do erro:", result?.message || result || "Erro desconhecido");
        
        // Mensagens de erro mais específicas
        let errorMessage = "Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.";
        const errorMsg = result?.message || result || "";
        const errorStr = typeof errorMsg === "string" ? errorMsg : JSON.stringify(errorMsg);
        
        if (errorStr.includes("rate limit") || errorStr.includes("too many")) {
          errorMessage = "Muitas tentativas. Aguarde alguns minutos e tente novamente.";
        } else if (errorStr.includes("spam") || errorStr.includes("blocked")) {
          errorMessage = "Mensagem detectada como spam. Verifique o conteúdo.";
        } else if (errorStr.includes("invalid")) {
          errorMessage = "Dados inválidos. Verifique os campos preenchidos.";
        }
        
        throw new Error(errorMessage);
      }

    } catch (error) {
      console.error("❌ Erro ao enviar formulário:", error);
      console.error("Detalhes:", {
        message: error instanceof Error ? error.message : "Erro desconhecido",
        stack: error instanceof Error ? error.stack : undefined
      });
      
      // Mensagem de erro mais amigável
      const errorMessage = error instanceof Error && error.message !== "Falha no envio"
        ? error.message
        : "Erro ao enviar mensagem. Tente novamente ou use o WhatsApp.";
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: siteConfig.contact.phone,
      link: siteConfig.contact.phoneLink,
    },
    {
      icon: Mail,
      title: "E-mail",
      info: siteConfig.contact.email,
      link: siteConfig.contact.emailLink,
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: `${siteConfig.contact.address} | ${siteConfig.contact.addressSecondary}`,
      link: siteConfig.contact.addressLink,
    },
    {
      icon: Clock,
      title: "Horário",
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
            Entre em Contato - Clínica Renata Bastos
          </h1>
          <p className="text-lg text-muted-foreground">
            Pronto para transformar sua saúde? Agende sua consulta na Tijuca, Rio de Janeiro ou tire suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.length > 0 && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-destructive mb-2">Erros no formulário:</p>
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
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  placeholder="Seu nome completo"
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
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
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
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
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
                <Label htmlFor="subject">Assunto *</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecione o assunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulta">Agendar Consulta</SelectItem>
                    <SelectItem value="orcamento">Solicitar Orçamento</SelectItem>
                    <SelectItem value="duvidas">Tirar Dúvidas</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  placeholder="Como posso ajudar você hoje?"
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
                  {formData.message.length}/2000 caracteres
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
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
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
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

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-elevated h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1234567890!2d-43.2345678!3d-22.9123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e5bfcef45a7%3A0x1234567890abcdef!2sShopping%20Tijuca%2C%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Renata Bastos - Shopping Tijuca"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;