import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Users } from "lucide-react";
import heroImage from "@/assets/hero-nutrition.jpg";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Mais de {siteConfig.professional.patients} pacientes transformados
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Nutricionista Ortomolecular & Biomédica Esteta na{" "}
              <span className="text-primary">Tijuca, Rio de Janeiro</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              Localizada no coração da Tijuca, a {siteConfig.brand.name} tem o protocolo que você precisa 
              para transformar seus sonhos em realidade. Consultas presenciais (Tijuca e Barra) e online 
              com foco em <strong>emagrecimento saudável</strong>, <strong>nutrição clínica</strong> e 
              <strong> estética avançada</strong>. Abordagem humanizada e individual para sua transformação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 shadow-glow hover:shadow-elevated"
                onClick={() => {
                  const message = encodeURIComponent(siteConfig.whatsappMessages.appointment);
                  window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta Agora
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/servicos">
                  Ver Planos e Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-delay">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Nutrição Ortomolecular e Estética Avançada na Tijuca, Rio de Janeiro - Consultas com Renata Bastos"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-20 sm:-bottom-24 md:-bottom-32 left-2 sm:left-4 bg-background p-4 sm:p-6 rounded-2xl shadow-elevated animate-pulse-glow max-w-[calc(100%-1rem)] sm:max-w-none">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-bold text-primary-foreground">✓</span>
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-foreground text-sm sm:text-base">Resultados Comprovados</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Baseado em evidências</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
