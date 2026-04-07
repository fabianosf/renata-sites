import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Heart,
  Zap,
  Target,
  Award,
  MessageCircle,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { siteConfig } from "@/config/site";

const Results = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "Emagrecimento Saudável",
      metric: "Média de 8-12kg",
      period: "em 3 meses",
      description: "Perda de peso sustentável sem dietas restritivas, priorizando saúde e bem-estar.",
      benefits: [
        "Redução de medidas",
        "Mais energia e disposição",
        "Hábitos que duram"
      ],
      color: "primary"
    },
    {
      icon: Zap,
      title: "Ganho de Massa Muscular",
      metric: "Média de 3-6kg",
      period: "em 4 meses",
      description: "Hipertrofia inteligente com nutrição esportiva e acompanhamento estratégico.",
      benefits: [
        "Definição muscular",
        "Performance otimizada",
        "Recuperação acelerada"
      ],
      color: "accent"
    },
    {
      icon: Heart,
      title: "Saúde Metabólica",
      metric: "90% melhoram",
      period: "exames clínicos",
      description: "Controle de diabetes, colesterol, pressão e outros marcadores de saúde.",
      benefits: [
        "Glicemia normalizada",
        "Colesterol controlado",
        "Mais qualidade de vida"
      ],
      color: "primary"
    },
    {
      icon: Target,
      title: "Energia e Disposição",
      metric: "95% reportam",
      period: "mais energia",
      description: "Nutrição ortomolecular para otimizar metabolismo e vitalidade diária.",
      benefits: [
        "Sono de qualidade",
        "Foco mental",
        "Disposição constante"
      ],
      color: "accent"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vi os resultados incríveis no site e quero começar minha transformação. Gostaria de agendar uma consulta!"
    );
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Resultados Comprovados
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Números Que{" "}
            <span className="text-primary">Falam Por Si</span>
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Estes não são apenas números — são vidas transformadas, objetivos conquistados e sonhos realizados.
            Resultados reais de pessoas reais.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {results.map((result, index) => (
            <Card
              key={result.title}
              className="border-2 border-border hover:border-primary/40 transition-smooth hover:scale-[1.02] animate-fade-in shadow-subtle hover:shadow-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 lg:p-8">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-${result.color}/10 rounded-2xl flex items-center justify-center`}>
                    <result.icon className={`h-7 w-7 text-${result.color}`} />
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                    Comprovado
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{result.title}</h3>

                {/* Metric */}
                <div className="mb-4 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {result.metric}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {result.period}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {result.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {result.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-2 border-primary/30 shadow-elevated">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Sua Transformação Começa Aqui
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Pronto Para Ser o Próximo Resultado de Sucesso?
              </h3>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Esses números representam pessoas que decidiram investir em si mesmas.
                E você? Quando vai começar sua transformação?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 shadow-glow hover:shadow-elevated"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quero Começar Minha Transformação
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-bold text-primary mb-1">2000+</p>
                  <p className="text-xs text-muted-foreground">Transformados</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary mb-1">98%</p>
                  <p className="text-xs text-muted-foreground">Satisfação</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary mb-1">8+</p>
                  <p className="text-xs text-muted-foreground">Anos Experiência</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Results;
