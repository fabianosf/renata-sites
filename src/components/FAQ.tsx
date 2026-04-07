import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const FAQ = () => {
  const faqs = [
    {
      question: "Por que integrar nutrição e estética?",
      answer:
        "A transformação real acontece de dentro para fora. Quando você equilibra sua saúde metabólica através da nutrição e potencializa os resultados com procedimentos estéticos, os ganhos são mais rápidos, mais profundos e muito mais duradouros. É a ciência trabalhando a seu favor de forma completa.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Isso varia conforme seu objetivo e comprometimento. Em geral, mudanças de energia e disposição aparecem nas primeiras 2-3 semanas. Resultados visuais de emagrecimento começam em 4-6 semanas. Para transformações profundas e duradouras, recomendamos programas de 3-6 meses, onde acompanhamos sua evolução de perto e ajustamos estratégias conforme necessário.",
    },
    {
      question: "Preciso seguir uma dieta muito restritiva?",
      answer:
        "Não! Minha abordagem é justamente o oposto de dietas da moda. Trabalho com reeducação alimentar e autonomia — você aprende a fazer escolhas inteligentes sem sofrer ou passar fome. O objetivo é que você tenha uma relação saudável com a comida, não restrição extrema. O feito é melhor que o perfeito.",
    },
    {
      question: "Atende online ou só presencialmente?",
      answer:
        "Atendo nas duas modalidades! Presencial na Tijuca e Barra da Tijuca (Rio de Janeiro), e online para qualquer lugar do Brasil e exterior. Ambas têm a mesma qualidade, dedicação e resultados. A consulta online é por videochamada e você recebe todo material digitalizado.",
    },
    {
      question: "Qual a diferença entre nutrição comum e ortomolecular?",
      answer:
        "A nutrição ortomolecular vai além da alimentação básica — trabalha no nível celular, identificando deficiências de nutrientes e corrigindo através de alimentos e/ou ativos manipulados. O foco é equilibrar seu metabolismo, otimizar energia, melhorar digestão e tratar a causa raiz dos sintomas — não apenas mascarar problemas.",
    },
    {
      question: "Os procedimentos estéticos são seguros?",
      answer:
        "Absolutamente. Como biomédica esteta, tenho formação específica em procedimentos estéticos e uso apenas produtos de alta qualidade, aprovados pela ANVISA. Todos os protocolos são personalizados e realizados com técnica apurada, priorizando sempre sua segurança e resultados naturais.",
    },
    {
      question: "Posso fazer procedimentos estéticos mesmo fazendo dieta?",
      answer:
        "Sim, e essa é justamente a vantagem da integração! Quando você está em um processo de emagrecimento ou ganho muscular orientado nutricionalmente, procedimentos estéticos potencializam os resultados. Por exemplo: redução de gordura localizada + nutrição estratégica = transformação mais rápida e completa.",
    },
    {
      question: "Como funciona o acompanhamento? Tenho suporte entre consultas?",
      answer:
        "Nos programas de acompanhamento (trimestral e semestral), você tem consultas mensais para avaliação e ajustes, além de suporte entre consultas via WhatsApp para dúvidas pontuais. O objetivo é que você se sinta acompanhado durante toda a jornada, não apenas nos encontros presenciais.",
    },
    {
      question: "Aceita convênio ou só particular?",
      answer:
        "O atendimento é particular. Mas aceito diversas formas de pagamento: Pix (com desconto) e cartão de crédito parcelado. Entre em contato para conhecer valores e condições personalizadas para seu caso.",
    },
    {
      question: "Trabalha com qual faixa etária?",
      answer:
        "Atendo adolescentes (a partir de 16 anos com autorização dos pais), adultos e idosos. Cada fase da vida tem necessidades específicas, e o atendimento é sempre personalizado considerando idade, objetivos, rotina e histórico de saúde.",
    },
    {
      question: "Posso agendar uma consulta só para conhecer o trabalho?",
      answer:
        "Claro! A consulta inicial já é uma avaliação completa onde conversamos sobre seus objetivos, histórico, rotina e montamos um plano personalizado. É a oportunidade perfeita para você me conhecer, tirar dúvidas e entender como posso te ajudar. Muitos pacientes começam assim e decidem continuar o acompanhamento depois.",
    },
    {
      question: "E se eu não conseguir seguir tudo perfeitamente?",
      answer:
        "Isso é completamente normal e esperado! Vida real não é Instagram. Meu trabalho não é te cobrar, mas te entender e ajustar o plano conforme sua realidade. Nem todos os dias será possível seguir 100%, e tudo bem. O importante é a constância, não a perfeição. Quanto mais você seguir, melhores os resultados — mas o feito é sempre melhor que o perfeito.",
    },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Tenho algumas dúvidas e gostaria de conversar sobre o atendimento."
    );
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Perguntas Frequentes
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Dúvidas? <span className="text-primary">Estou Aqui Para Ajudar</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Separei as perguntas mais comuns que recebo. Se a sua dúvida não estiver aqui,
            me chama no WhatsApp que responderei com prazer!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-2xl px-6 border border-border shadow-subtle hover:shadow-elevated hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-background to-primary/5 border-2 border-primary/30 shadow-elevated">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Não Encontrou Sua Dúvida?
              </h3>

              <p className="text-lg text-muted-foreground mb-8">
                Cada caso é único e merece atenção personalizada.
                Me chama no WhatsApp para conversarmos sobre seu objetivo específico!
              </p>

              <Button
                size="lg"
                className="text-lg px-8 shadow-glow hover:shadow-premium hover:scale-105 transition-all duration-300"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Tirar Minhas Dúvidas no WhatsApp
              </Button>

              {/* Trust Badge */}
              <p className="text-sm text-muted-foreground mt-6">
                ⚡ Respondo pessoalmente • Sem compromisso
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
