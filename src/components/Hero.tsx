import { Trans, useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Users } from "lucide-react";
import heroImage from "@/assets/renata3.jpeg";
import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ScrollReveal";

const Hero = () => {
  const { t } = useTranslation();

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
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                {t("home.hero.badge", { count: siteConfig.professional.patients })}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6">
              {t("home.hero.titleLine1")}{" "}
              <span className="font-display text-primary animate-fade-in">
                {t("home.hero.titleLine2")}
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              <Trans i18nKey="home.hero.description" components={{ strong: <strong className="text-foreground" /> }} />
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 shadow-glow hover:shadow-premium hover:scale-[1.015] transition-all duration-300 whitespace-normal h-auto py-4"
                onClick={() => {
                  const message = encodeURIComponent(t("home.hero.whatsappMessageNutrition"));
                  window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
                }}
              >
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 flex-shrink-0" />
                  {t("home.hero.ctaNutrition")}
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 whitespace-normal h-auto py-4 border border-primary hover:bg-primary/5 hover:scale-[1.015] transition-all duration-300"
                onClick={() => {
                  const message = encodeURIComponent(t("home.hero.whatsappMessageAesthetics"));
                  window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
                }}
              >
                <span className="flex items-center gap-2">
                  {t("home.hero.ctaAesthetics")}
                  <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal delay={120} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-elevated border border-primary/10">
              <img
                src={heroImage}
                alt={t("home.hero.imageAlt")}
                className="w-full h-auto object-cover"
                style={{ filter: "saturate(0.92) sepia(0.06)" }}
                loading="eager"
              />
              {/* Vinheta sutil para integrar a foto ao fundo creme */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, hsl(var(--foreground) / 0.14), transparent 40%)",
                }}
              />
            </div>
            {/* Floating badge — fundo branco levemente amarelado (card), sombra suave */}
            <div className="absolute -bottom-20 sm:-bottom-24 md:-bottom-32 left-2 sm:left-4 bg-card p-4 sm:p-6 rounded-lg shadow-elevated max-w-[calc(100%-1rem)] sm:max-w-none">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-medium text-primary-foreground">✓</span>
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground text-sm sm:text-base">{t("home.hero.badgeResults")}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{t("home.hero.badgeResultsSub")}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
