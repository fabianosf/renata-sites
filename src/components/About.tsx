import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles, HeartPulse, MessageCircle, MapPin } from "lucide-react";
import { mediaImages } from "@/config/media";
import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

/** "14+" -> { value: 14, suffix: "+" } */
const splitStat = (raw: string) => {
  const match = raw.match(/^(\d+)(.*)$/);
  return match ? { value: Number(match[1]), suffix: match[2] } : { value: 0, suffix: "" };
};

const About = () => {
  const { t } = useTranslation();

  const procedimentos = t("draRenata.procedures", { returnObjects: true }) as string[];
  const diferenciaisIcons = [Sparkles, HeartPulse, GraduationCap];
  const diferenciais = t("draRenata.diferenciais", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(siteConfig.whatsappMessages.appointment);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  const years = splitStat(siteConfig.professional.experience);
  const patients = splitStat(siteConfig.professional.patients);
  const satisfaction = splitStat(siteConfig.professional.satisfaction);

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Foto */}
          <ScrollReveal className="-mt-8 lg:-mt-12">
            <div className="relative rounded-lg overflow-hidden shadow-subtle group border border-primary/15">
              <div className="relative aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src={mediaImages.draRenataHero}
                  alt="Dra. Renata Bastos - Biomédica esteta e nutricionista"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  style={{ filter: "saturate(0.92) sepia(0.06)" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Stats — contador discreto ao entrar na viewport */}
            <div className="mt-8 bg-card p-6 rounded-lg shadow-subtle border border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-display text-primary">
                    <AnimatedCounter value={years.value} suffix={years.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground">{t("draRenata.yearsLabel")}</p>
                </div>
                <div>
                  <p className="text-3xl font-display text-primary">
                    <AnimatedCounter value={patients.value} suffix={patients.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground">{t("draRenata.patientsLabel")}</p>
                </div>
                <div>
                  <p className="text-3xl font-display text-primary">
                    <AnimatedCounter value={satisfaction.value} suffix={satisfaction.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground">{t("draRenata.satisfactionLabel")}</p>
                </div>
              </div>
            </div>

            {/* Procedimentos realizados */}
            <div className="mt-8">
              <h3 className="font-medium text-lg mb-4">{t("draRenata.proceduresTitle")}</h3>
              <div className="flex flex-wrap gap-2">
                {procedimentos.map((item) => (
                  <Badge key={item} variant="secondary" className="px-4 py-2 text-sm font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Conteúdo */}
          <ScrollReveal delay={120}>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("draRenata.badge")}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display mb-4">
              {siteConfig.professional.name}
            </h1>
            <p className="text-primary font-semibold text-lg mb-6">
              {t("draRenata.credentials")}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("draRenata.p1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("draRenata.p2")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("draRenata.p3")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("draRenata.p4")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("draRenata.p5")}</p>

            {/* Location */}
            <div className="mb-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{t("draRenata.locationTitle")}</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>{t("draRenata.locationPresential")}</strong> {t("draRenata.locationPresentialValue")}<br />
                    <strong>{t("draRenata.locationOnline")}</strong> {t("draRenata.locationOnlineValue")}
                  </p>
                </div>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="grid sm:grid-cols-1 gap-4 mb-8">
              {diferenciais.map((item, index) => {
                const Icon = diferenciaisIcons[index] ?? Sparkles;
                return (
                  <div
                    key={item.title}
                    className="p-4 bg-card rounded-lg shadow-subtle hover:shadow-elevated transition-all duration-300 group border border-border hover:border-primary/40"
                  >
                    <Icon className="h-7 w-7 text-primary mb-3 transition-opacity duration-300 group-hover:opacity-70" strokeWidth={1.5} />
                    <h4 className="font-medium mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <Button
              size="lg"
              className="text-lg px-8 shadow-glow hover:shadow-elevated"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("draRenata.cta")}
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
