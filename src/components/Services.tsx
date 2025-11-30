import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Video,
  FileText,
  Calendar,
  GraduationCap,
  Trophy,
  Heart,
  Users,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { ComponentType } from "react";

// Mapeamento de ícones (string -> componente React)
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Stethoscope,
  Video,
  FileText,
  Calendar,
  GraduationCap,
  Trophy,
  Heart,
  Users,
  Sparkles,
  ClipboardCheck,
};

const Services = () => {
  // Usar dados de servicesData.ts
  const services = servicesData.map((service) => ({
    ...service,
    iconComponent: iconMap[service.icon] || FileText, // Fallback para FileText se ícone não encontrado
  }));

  return (
    <section id="servicos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Serviços Personalizados de Nutrição e Estética
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubra a solução ideal para suas necessidades de saúde, nutrição e estética na Tijuca, Rio de Janeiro
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-card p-6 rounded-2xl shadow-subtle hover:shadow-elevated transition-smooth hover:scale-[1.02] animate-fade-in ${
                service.featured ? "border-2 border-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-smooth">
                  <service.iconComponent className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                {service.badge && (
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    {service.badge}
                  </Badge>
                )}
              </div>

              <h2 className="font-bold text-lg mb-3 group-hover:text-primary transition-smooth">
                {service.title}
              </h2>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/servico/${service.id}`}>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                >
                  Saiba Mais
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
