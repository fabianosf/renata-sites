import { CheckCircle2, Video, Stethoscope, Sparkles, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

const Differentiators = () => {
  const differentiators = [
    {
      icon: Video,
      title: "Atendimento Presencial e Online",
      description: "Flexibilidade total para consultas no consultório ou no conforto da sua casa",
    },
    {
      icon: Sparkles,
      title: "Abordagem Ortomolecular",
      description: "Nutrição baseada em evidências científicas com foco em otimização celular",
    },
    {
      icon: Stethoscope,
      title: "Integração Nutrição + Estética",
      description: "Cuidado completo: saúde interna e externa em um único lugar",
    },
    {
      icon: Users,
      title: `${siteConfig.professional.patients} Pacientes Atendidos`,
      description: "Experiência comprovada com resultados reais e transformações duradouras",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Por Que Escolher a {siteConfig.professional.name} na Tijuca?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diferenciais que fazem a diferença na sua jornada de transformação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className="bg-background p-6 rounded-2xl shadow-subtle hover:shadow-elevated transition-smooth hover:scale-[1.02] animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;

