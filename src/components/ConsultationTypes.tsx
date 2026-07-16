import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Video, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const ConsultationTypes = () => {
  const { t } = useTranslation();

  const presentialItems = t("home.consultationTypes.presential.items", { returnObjects: true }) as string[];
  const onlineItems = t("home.consultationTypes.online.items", { returnObjects: true }) as string[];

  const handleWhatsAppClick = (message: string) => {
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="modalidades" className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("home.consultationTypes.badge")}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t("home.consultationTypes.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {t("home.consultationTypes.description")}
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/20 px-4 py-2 rounded-full border border-amber-200 dark:border-amber-800">
            <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
              {t("home.consultationTypes.limitedAgenda")}
            </span>
          </div>
        </div>

        {/* Consultation Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Consulta Presencial */}
          <Card className="border-2 border-primary/30 hover:border-primary transition-smooth hover:scale-105 animate-fade-in shadow-elevated">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <Badge className="bg-primary text-primary-foreground text-sm px-4 py-1">
                  {t("home.consultationTypes.presential.badge")}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {t("home.consultationTypes.presential.title")}
              </h3>
              <p className="text-sm text-primary font-medium mb-4">
                {t("home.consultationTypes.presential.subtitle")}
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("home.consultationTypes.presential.description")}
              </p>

              <ul className="space-y-3 mb-8">
                {presentialItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                size="lg"
                onClick={() => handleWhatsAppClick(t("home.consultationTypes.presential.whatsappMessage"))}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("home.consultationTypes.presential.cta")}
              </Button>
            </CardContent>
          </Card>

          {/* Consulta Online */}
          <Card className="border-2 border-primary hover:border-primary transition-smooth hover:scale-105 animate-fade-in shadow-elevated bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Video className="h-8 w-8 text-primary-foreground" />
                </div>
                <Badge className="bg-amber-500 text-white text-sm px-4 py-1">
                  {t("home.consultationTypes.online.badge")}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {t("home.consultationTypes.online.title")}
              </h3>
              <p className="text-sm text-amber-600 font-medium mb-4">
                {t("home.consultationTypes.online.subtitle")}
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("home.consultationTypes.online.description")}
              </p>

              <ul className="space-y-3 mb-8">
                {onlineItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                size="lg"
                onClick={() => handleWhatsAppClick(t("home.consultationTypes.online.whatsappMessage"))}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("home.consultationTypes.online.cta")}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Info adicional */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-2xl border border-primary/20">
            <p className="text-base font-medium text-foreground mb-2">
              {t("home.consultationTypes.footerTitle")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("home.consultationTypes.footerText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationTypes;
