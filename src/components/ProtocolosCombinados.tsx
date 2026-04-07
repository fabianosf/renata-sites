import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const ProtocolosCombinados = () => {
  const protocolos = [
    {
      id: "reset-metabolico",
      name: "Reset Metabólico & Composição Corporal Estratégica",
      icon: "🔥",
      description:
        "Para quem deseja reduzir gordura corporal, aumentar massa muscular e melhorar definição com acompanhamento clínico integrado e planejamento individualizado.",
      fullDescription:
        "A proposta é reorganizar o metabolismo e otimizar a composição corporal por meio de uma abordagem estratégica que une nutrição, suporte metabólico e recursos direcionados para contorno e performance.",
      includes: [
        "Nutrição clínica e esportiva individualizada",
        "Recursos injetáveis sistêmicos para suporte metabólico e desempenho",
        "Enzimas para gordura localizada e contorno corporal",
        "Estratégias metabólicas voltadas para força, recuperação e qualidade muscular",
      ],
      popular: true,
    },
    {
      id: "reestruturacao-pos-emagrecimento",
      name: "Reestruturação Tecidual Pós-Emagrecimento",
      icon: "✨",
      description:
        "Após a redução significativa de peso, é comum surgirem sinais de flacidez, perda de sustentação e alterações na qualidade da pele e dos contornos faciais e corporais.",
      fullDescription:
        "Essa fase tem como objetivo recuperar firmeza, estrutura e proporção corporal por meio de uma abordagem estratégica e individualizada.",
      includes: [
        "Bioestimuladores de colágeno facial e corporal",
        "Pontos estratégicos com ácido hialurônico para sustentação e proporção",
        "Fios de sustentação quando indicados",
        "Planejamento nutricional e metabólico de suporte tecidual",
      ],
      popular: false,
    },
    {
      id: "reestruturacao-facial",
      name: "Reestruturação Facial e Sustentação Tecidual",
      icon: "💎",
      description:
        "Indicada para pacientes que apresentam perda de volume, flacidez e alterações nos contornos faciais — seja pelo processo natural de envelhecimento ou após emagrecimento significativo.",
      fullDescription:
        "O objetivo é restaurar sustentação, melhorar a qualidade da pele e redefinir proporções faciais de forma natural e estratégica.",
      includes: [
        "Bioestimuladores de colágeno",
        "Fios de sustentação",
        "Preenchimento com ácido hialurônico em pontos estratégicos",
        "Toxina botulínica para equilíbrio muscular e prevenção de linhas",
      ],
      popular: false,
    },
  ];

  const handleWhatsAppClick = (protocolName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o protocolo: ${protocolName}`
    );
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="protocolos-combinados" className="py-12 lg:py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Protocolos Integrados
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4">
            Protocolos <span className="text-primary">Combinados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tratamentos integrados e estratégicos que unem nutrição clínica, suporte metabólico
            e procedimentos estéticos para resultados completos e duradouros
          </p>
        </div>

        {/* Protocolos Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-8 max-w-7xl mx-auto">
          {protocolos.map((protocolo, index) => (
            <Card
              key={protocolo.id}
              className={`relative overflow-hidden transition-all duration-500 hover-lift hover:shadow-premium animate-fade-in group ${
                protocolo.popular
                  ? "border-2 border-primary shadow-elevated"
                  : "border border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {protocolo.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    Mais Procurado
                  </Badge>
                </div>
              )}

              <CardContent className="p-6 lg:p-8">
                <div className="mb-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {protocolo.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {protocolo.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {protocolo.description}
                  </p>
                  <p className="text-sm text-foreground/90 leading-relaxed mb-4">
                    {protocolo.fullDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">O plano pode incluir:</h4>
                  <ul className="space-y-2">
                    {protocolo.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h4 className="font-bold text-primary">Investimento Personalizado</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cada protocolo é montado sob medida para suas necessidades.
                    Entre em contato para conhecer valores e condições especiais.
                  </p>
                </div>

                <Button
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                  variant={protocolo.popular ? "default" : "outline"}
                  onClick={() => handleWhatsAppClick(protocolo.name)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Quero Saber Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6 lg:p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Cada protocolo é personalizado conforme suas necessidades
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Me chama para conversarmos sobre qual protocolo é o mais adequado para você ✨
              </p>
              <Button
                size="lg"
                className="text-lg px-8 shadow-glow hover:shadow-premium hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Olá! Gostaria de saber mais sobre os Protocolos Combinados."
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProtocolosCombinados;
