import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  badge?: string;
  impact: string;
}

const Pricing = () => {
  const { t } = useTranslation();

  const plans = t("home.pricing.plans", { returnObjects: true }) as Plan[];
  const paymentMethods = t("home.pricing.paymentMethods", { returnObjects: true }) as string[];

  const handleWhatsAppClick = (planName: string) => {
    const message = encodeURIComponent(t("home.pricing.whatsappMessagePlan", { planName }));
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="precos" className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("home.pricing.badge")}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display font-medium mb-4">
            {t("home.pricing.titlePrefix")} <span className="text-primary">{t("home.pricing.titleHighlight")}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("home.pricing.description")}
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-500 hover-lift hover:shadow-premium animate-fade-in group ${
                plan.badge === "Popular"
                  ? "border border-primary shadow-elevated scale-105 lg:scale-110"
                  : "border border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardContent className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    {plan.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {plan.description}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {plan.impact}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full group-hover:scale-[1.015] transition-transform duration-300"
                  variant={plan.badge === "Popular" ? "default" : "outline"}
                  onClick={() => handleWhatsAppClick(plan.name)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {t("home.pricing.planCta")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods & CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6 lg:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-medium mb-4">
                  {t("home.pricing.paymentTitle")}
                </h3>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {paymentMethods.map((method) => (
                    <Badge
                      key={method}
                      variant="secondary"
                      className="px-4 py-2 text-sm"
                    >
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      {method}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-4 mb-6">
                  <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-accent-foreground">
                      {t("home.pricing.limitedSlots")}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {t("home.pricing.footerText")}
                  </p>
                </div>
                <Button
                  size="lg"
                  className="text-lg px-8 shadow-glow hover:shadow-elevated"
                  onClick={() => {
                    const message = encodeURIComponent(
                      siteConfig.whatsappMessages.appointment
                    );
                    window.open(
                      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
                      "_blank"
                    );
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("common.cta.talkWhatsapp")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
