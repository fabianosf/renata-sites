import { Trans, useTranslation } from "react-i18next";
import { Link } from "@/components/LocalizedLink";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Star
} from "lucide-react";
import { siteConfig } from "@/config/site";

const NutritionPlusAesthetics = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("home.nutritionAesthetics.whatsappMessage"));
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  const nutritionItems = t("home.nutritionAesthetics.nutritionItems", { returnObjects: true }) as string[];
  const aestheticsItems = t("home.nutritionAesthetics.aestheticsItems", { returnObjects: true }) as string[];
  const integrationCards = t("home.nutritionAesthetics.integrationCards", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("home.nutritionAesthetics.badge")}
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-medium mb-6 leading-tight">
            {t("home.nutritionAesthetics.titleLine1")}
            <br />
            <span className="text-primary">{t("home.nutritionAesthetics.titleLine2")}</span>
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            {t("home.nutritionAesthetics.description")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Estética Card */}
          <Card className="border border-accent/20 hover:border-accent/40 transition-smooth hover:scale-[1.01] animate-fade-in shadow-elevated">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-accent-foreground" />
                </div>
                <Badge className="bg-accent text-accent-foreground">
                  {t("home.nutritionAesthetics.aestheticsBadge")}
                </Badge>
              </div>

              <h3 className="text-2xl font-medium mb-4">
                {t("home.nutritionAesthetics.aestheticsTitle")}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("home.nutritionAesthetics.aestheticsDescription")}
              </p>

              <ul className="space-y-3">
                {aestheticsItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/estetica-corporal"
                className="inline-flex items-center gap-2 text-accent-foreground font-semibold text-sm mt-6 hover:underline"
              >
                {t("home.nutritionAesthetics.aestheticsLink")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Nutrição Card */}
          <Card className="border border-primary/20 hover:border-primary/40 transition-smooth hover:scale-[1.01] animate-fade-in shadow-elevated">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  {t("home.nutritionAesthetics.nutritionBadge")}
                </Badge>
              </div>

              <h3 className="text-2xl font-medium mb-4">
                {t("home.nutritionAesthetics.nutritionTitle")}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("home.nutritionAesthetics.nutritionDescription")}
              </p>

              <ul className="space-y-3">
                {nutritionItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/nutricao-estrategica"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:underline"
              >
                {t("home.nutritionAesthetics.nutritionLink")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Integration Highlight */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/30 shadow-elevated">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-medium">
                    {t("home.nutritionAesthetics.integrationTitle")}
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <Trans
                    i18nKey="home.nutritionAesthetics.integrationText"
                    components={{ strong: <strong className="text-foreground" /> }}
                  />
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {integrationCards.map((card) => (
                    <div key={card.title} className="p-4 bg-background/50 rounded-xl border border-border">
                      <p className="font-bold text-primary text-lg mb-1">{card.title}</p>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="text-lg px-8 shadow-glow hover:shadow-elevated"
                  onClick={handleWhatsAppClick}
                >
                  {t("home.nutritionAesthetics.integrationCta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NutritionPlusAesthetics;
