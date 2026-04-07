import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const Pricing = () => {
  const plans = [
    {
      id: "avulsa",
      name: "Consulta Inicial",
      subtitle: "Seu Primeiro Passo",
      description: "Ideal para conhecer o trabalho e iniciar sua jornada de transformação com avaliação completa.",
      features: [
        "Consulta de 60 minutos",
        "Avaliação corporal completa",
        "Anamnese detalhada personalizada",
        "Plano alimentar individualizado",
        "Material de apoio digital",
      ],
      popular: false,
      impact: "Comece sua transformação",
    },
    {
      id: "retorno",
      name: "Consulta + Retorno",
      subtitle: "Para Quem Quer Resultado",
      description: "Acompanhamento estratégico com ajustes para garantir que você está no caminho certo.",
      features: [
        "Consulta inicial + 1 retorno",
        "Avaliação de evolução",
        "Ajustes inteligentes do plano",
        "Acompanhamento próximo",
        "Suporte entre consultas",
      ],
      popular: true,
      badge: "Popular",
      impact: "Garanta seus resultados",
    },
    {
      id: "trimestral",
      name: "Programa Trimestral",
      subtitle: "Transformação Sustentável",
      description: "Acompanhamento mensal para observar sua resposta, ajustar estratégias e cuidar de você com leveza e constância.",
      features: [
        "3 meses de acompanhamento",
        "Consultas mensais estratégicas",
        "Ajustes contínuos personalizados",
        "Suporte direto com a Renata",
        "Resultados progressivos",
        "Mudanças que duram",
      ],
      popular: false,
      badge: "Mais Escolhido",
      impact: "Transformação real e duradoura",
    },
    {
      id: "semestral",
      name: "Programa Semestral",
      subtitle: "Resultado Definitivo",
      description: "O caminho completo para transformação profunda: 6 meses de acompanhamento estratégico para resultados que ficam.",
      features: [
        "6 meses de transformação",
        "Acompanhamento mensal estratégico",
        "Ajustes frequentes e precisos",
        "Suporte contínuo personalizado",
        "Construção de hábitos sólidos",
        "Resultados profundos e duradouros",
        "Melhor investimento a longo prazo",
      ],
      popular: false,
      badge: "Melhor Investimento",
      impact: "Sua melhor versão para sempre",
    },
  ];

  const paymentMethods = [
    { name: "Pix", available: true },
    { name: "Cartão de crédito parcelado", available: true },
  ];

  const handleWhatsAppClick = (planName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o ${planName} e agendar uma consulta.`
    );
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="precos" className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Programas de Transformação
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4">
            Escolha Sua Jornada de <span className="text-primary">Transformação</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Cada programa é pensado para acompanhar sua evolução com estratégias personalizadas.
            Do primeiro passo à transformação completa — escolha o caminho que faz sentido para você agora.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-500 hover-lift hover:shadow-premium animate-fade-in group ${
                plan.popular
                  ? "border-2 border-primary shadow-elevated scale-105 lg:scale-110"
                  : "border border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    {plan.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {plan.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {plan.impact}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleWhatsAppClick(plan.name)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Consultar Valores e Agendar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods & CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6 lg:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  Formas de Pagamento
                </h3>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {paymentMethods.map((method) => (
                    <Badge
                      key={method.name}
                      variant="secondary"
                      className="px-4 py-2 text-sm"
                    >
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      {method.name}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-4 mb-6">
                  <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-accent-foreground">
                      💡 Vagas limitadas por mês para atendimento personalizado
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Me chama e vamos escolher juntas(o) o melhor plano para você ✨
                  </p>
                </div>
                <Button
                  size="lg"
                  className="text-lg px-8 shadow-glow hover:shadow-elevated"
                  onClick={() => {
                    const message = encodeURIComponent(
                      siteConfig.whatsappMessages.appointment
                    );
                    window.open(
                      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
                      "_blank"
                    );
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

