import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Users } from "lucide-react";
import heroImage from "@/assets/hero-nutrition.jpg";
import { siteConfig } from "@/config/site";

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden gradient-hero">
      {/* Background decorative elements - Organic shapes */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 organic-blob blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 organic-blob blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 organic-blob blur-2xl" style={{ animationDelay: '4s' }}></div>
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
              Transforme sua saúde e{" "}
              <span className="font-display text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
                conquiste a melhor versão de você
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              <strong>Nutrição estratégica + Estética integrativa</strong> em um só lugar.
              Cuidado completo para quem busca resultados reais, sustentáveis e naturais —
              de dentro para fora.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 shadow-glow hover:shadow-premium hover:scale-105 transition-all duration-300 whitespace-normal h-auto py-4 bg-gradient-to-r from-accent to-accent/90 hover:from-accent hover:to-accent/80"
                onClick={() => {
                  const message = encodeURIComponent("Olá! Quero transformar minha saúde e alimentação com acompanhamento personalizado.");
                  window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
                }}
              >
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 flex-shrink-0" />
                  Agendar Consulta de Nutrição
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 whitespace-normal h-auto py-4 border-2 border-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const message = encodeURIComponent("Olá! Quero conhecer os tratamentos estéticos da Clínica Renata Bastos.");
                  window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
                }}
              >
                <span className="flex items-center gap-2">
                  Conhecer Tratamentos Estéticos
                  <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </span>
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
