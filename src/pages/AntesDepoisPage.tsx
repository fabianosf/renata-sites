import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { ImageIcon, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const AntesDepoisPage = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("beforeAfter.whatsappMessage"));
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  // Placeholder do grid de antes/depois - fotos serão enviadas pela clínica
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="min-h-screen">
      <SEO
        title={t("beforeAfter.seo.title")}
        description={t("beforeAfter.seo.description")}
        path="/antes-e-depois"
      />
      <StructuredData type="home" />
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: t("beforeAfter.breadcrumb") }]} />

            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl lg:text-4xl font-medium mb-4">
                {t("beforeAfter.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("beforeAfter.description")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-sm text-muted-foreground mb-8">
                {t("beforeAfter.galleryNote")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {placeholders.map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg border border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-2 text-muted-foreground"
                  >
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-xs">{t("beforeAfter.galleryPlaceholder")}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Button
                  size="lg"
                  className="text-lg px-8 shadow-glow hover:shadow-elevated"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("beforeAfter.cta")}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AntesDepoisPage;
