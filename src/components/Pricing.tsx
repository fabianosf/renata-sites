import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const Pricing = () => {
  const plans = [
    {
      id: "avulsa",
      name: "Consulta Avulsa",
      price: "R$ 260",
      description: "Consulta única, sem acompanhamento.",
      features: [
        "Consulta única",
        "Avaliação completa",
        "Plano alimentar personalizado",
        "Material de apoio digital",
      ],
      popular: false,
    },
    {
      id: "retorno",
      name: "Consulta + Retorno",
      price: "R$ 420",
      originalPrice: null,
      description: "1 consulta inicial + 1 retorno para ajustes.",
      features: [
        "1 consulta inicial completa",
        "1 retorno para ajustes",
        "Acompanhamento de evolução",
        "Ajustes do plano alimentar",
        "Material de apoio digital",
      ],
      popular: true,
    },
    {
      id: "trimestral",
      name: "Plano Trimestral",
      price: "R$ 190",
      originalPrice: "R$ 570",
      priceNote: "x3 (ou R$ 570 à vista no pix)",
      description: "1 consulta por mês, durante 3 meses, com ajustes do plano alimentar conforme sua evolução.",
      features: [
        "3 consultas mensais",
        "Acompanhamento contínuo",
        "Ajustes frequentes do plano",
        "Suporte entre consultas",
        "Material de apoio digital",
        "Economia de R$ 150",
      ],
      popular: false,
      badge: "Mais Popular",
    },
    {
      id: "semestral",
      name: "Plano Semestral",
      price: "R$ 175",
      originalPrice: "R$ 1.050",
      priceNote: "x6 no crédito ou pix",
      description: "1 consulta por mês, durante 6 meses, com acompanhamento contínuo, ajustes frequentes e foco em resultados duradouros.",
      features: [
        "6 consultas mensais",
        "Acompanhamento contínuo",
        "Ajustes frequentes do plano",
        "Suporte entre consultas",
        "Material de apoio digital",
        "Foco em resultados duradouros",
        "Economia de R$ 510",
      ],
      popular: false,
      badge: "Melhor Valor",
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
              Consulta Nutricional – Formas de Acompanhamento
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Planos e Investimento
          </h1>
          <p className="text-lg text-muted-foreground">
            Escolha o plano ideal para sua jornada de transformação. O acompanhamento mensal permite observar sua resposta, ajustar estratégias e cuidar de você ao longo do processo — com mais leveza e constância.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-smooth hover:shadow-elevated animate-fade-in ${
                plan.popular
                  ? "border-2 border-primary shadow-elevated scale-105 lg:scale-110"
                  : "border border-border"
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
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl lg:text-4xl font-bold text-primary">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                    {plan.priceNote && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.priceNote}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
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
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleWhatsAppClick(plan.name)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Escolher Plano
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
                <p className="text-lg text-muted-foreground mb-6">
                  Me chama e vamos escolher juntas(o) o melhor plano para você ✨
                </p>
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

