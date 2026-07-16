import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const ClinicaPage = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("clinica.whatsappMessage"));
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  // Placeholder de galeria do espaço físico - fotos serão enviadas pela clínica
  const galleryPlaceholders = Array.from({ length: 6 });

  return (
    <div className="min-h-screen">
      <SEO
        title={t("clinica.seo.title")}
        description={t("clinica.seo.description")}
        path="/a-clinica"
      />
      <StructuredData type="home" />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: t("clinica.breadcrumb") }]} />

            <div className="max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
                {t("clinica.title")}
              </h1>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t("clinica.p1")}</p>
                <p>{t("clinica.p2")}</p>
                <p>{t("clinica.p3")}</p>
                <p className="font-medium text-foreground">{t("clinica.p4")}</p>
              </div>

              <div className="flex justify-center mt-10">
                <Button
                  size="lg"
                  className="text-lg px-8 shadow-glow hover:shadow-elevated"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("clinica.ctaEvaluation")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Vídeo do espaço */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
                {t("clinica.videoTitle")}
              </h2>
              <Card className="overflow-hidden shadow-elevated border-2 border-primary/20">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-black">
                    <video className="w-full h-full object-contain" controls preload="metadata">
                      <source src="/video1.mp4" type="video/mp4" />
                      Seu navegador não suporta a reprodução de vídeo.
                    </video>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6 bg-background rounded-2xl p-6 border border-primary/15 shadow-subtle space-y-3">
                <p className="text-base text-foreground font-medium leading-relaxed">
                  {t("clinica.videoCaption1")}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("clinica.videoCaption2")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria de fotos do espaço - placeholder */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
                {t("clinica.galleryTitle")}
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                {t("clinica.galleryNote")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryPlaceholders.map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-2xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-2 text-muted-foreground"
                  >
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-xs">{t("clinica.galleryPlaceholder")}</span>
                  </div>
                ))}
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

export default ClinicaPage;
