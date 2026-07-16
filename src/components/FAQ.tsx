import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const FAQ = () => {
  const { t } = useTranslation();
  const faqs = t("home.faq.items", { returnObjects: true }) as { question: string; answer: string }[];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("home.faq.whatsappMessage"));
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("home.faq.badge")}
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            {t("home.faq.titlePrefix")} <span className="text-primary">{t("home.faq.titleHighlight")}</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            {t("home.faq.description")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-2xl px-6 border border-border shadow-subtle hover:shadow-elevated hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-background to-primary/5 border-2 border-primary/30 shadow-elevated">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {t("home.faq.ctaTitle")}
              </h3>

              <p className="text-lg text-muted-foreground mb-8">
                {t("home.faq.ctaDescription")}
              </p>

              <Button
                size="lg"
                className="text-lg px-8 shadow-glow hover:shadow-premium hover:scale-105 transition-all duration-300"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("home.faq.ctaButton")}
              </Button>

              {/* Trust Badge */}
              <p className="text-sm text-muted-foreground mt-6">
                {t("home.faq.trustBadge")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
