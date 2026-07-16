import { Trans, useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

interface Protocolo {
  id: string;
  name: string;
  icon: string;
  description: string;
  fullDescription: string;
  includes: string[];
  popular: boolean;
}

const ProtocolosCombinados = () => {
  const { t } = useTranslation();
  const protocolos = t("home.protocols.items", { returnObjects: true }) as Protocolo[];

  const handleWhatsAppClick = (protocolName?: string) => {
    const message = encodeURIComponent(
      protocolName
        ? t("home.protocols.whatsappMessageProtocolo", { name: protocolName })
        : t("home.protocols.whatsappMessageGeneric")
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
              {t("home.protocols.badge")}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4">
            <Trans i18nKey="home.protocols.title" components={{ 1: <span className="text-primary" /> }} />
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("home.protocols.description")}
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
                    Popular
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
                  <h4 className="font-semibold mb-3 text-sm">{t("home.protocols.includesLabel")}</h4>
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
                    <h4 className="font-bold text-primary">{t("home.protocols.investmentTitle")}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("home.protocols.investmentText")}
                  </p>
                </div>

                <Button
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                  variant={protocolo.popular ? "default" : "outline"}
                  onClick={() => handleWhatsAppClick(protocolo.name)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {t("home.protocols.cardCta")}
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
                {t("home.protocols.closingTitle")}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {t("home.protocols.closingText")}
              </p>
              <Button
                size="lg"
                className="text-lg px-8 shadow-glow hover:shadow-premium hover:scale-105 transition-all duration-300"
                onClick={() => handleWhatsAppClick()}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("common.cta.talkWhatsapp")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProtocolosCombinados;
