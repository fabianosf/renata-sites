import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import ScrollReveal from "@/components/ScrollReveal";
import VideoGallery from "@/components/VideoGallery";
import { clinicVideos, clinicaGallery, mediaImages } from "@/config/media";

const ClinicaPage = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("clinica.whatsappMessage"));
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

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
        <section className="pt-32 pb-24 lg:pb-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: t("clinica.breadcrumb") }]} />

            <ScrollReveal as="div" className="max-w-4xl mx-auto">
              <h1 className="text-3xl lg:text-4xl mb-6 text-center">
                {t("clinica.title")}
              </h1>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t("clinica.p1")}</p>
                <p>{t("clinica.p2")}</p>
                <p>{t("clinica.p3")}</p>
                <p className="font-medium text-foreground">{t("clinica.p4")}</p>
              </div>

              <div className="relative mt-10 rounded-lg overflow-hidden shadow-subtle border border-primary/15">
                <img
                  src={mediaImages.recepcaoCafe}
                  alt="Recepção acolhedora da Clínica Renata Bastos"
                  className="w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[4/3] object-cover object-center"
                  style={{ filter: "saturate(0.92) sepia(0.06)" }}
                  loading="lazy"
                  width={1080}
                  height={1440}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(var(--foreground) / 0.16), transparent 45%), radial-gradient(120% 100% at 50% 100%, transparent 55%, hsl(var(--background) / 0.25))",
                  }}
                />
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
            </ScrollReveal>
          </div>
        </section>

        <div className="divider-line max-w-5xl mx-auto" />

        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal as="div" className="max-w-5xl mx-auto">
              <h2 className="text-2xl lg:text-3xl mb-4 text-center">
                {t("clinica.videoTitle")}
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                {t("clinica.videoCaption2")}
              </p>
              <VideoGallery videos={clinicVideos} columns={2} />
              <div className="mt-6 bg-card rounded-lg p-6 border border-primary/15 shadow-subtle space-y-3">
                <p className="text-base text-foreground font-medium leading-relaxed">
                  {t("clinica.videoCaption1")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <div className="divider-line max-w-5xl mx-auto" />

        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal as="div" className="max-w-5xl mx-auto">
              <h2 className="text-2xl lg:text-3xl mb-4 text-center">
                {t("clinica.galleryTitle")}
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                Ambiente pensado em cada detalhe para você se sentir acolhida, segura e confortável.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {clinicaGallery.map((image) => (
                  <div
                    key={image.src}
                    className="aspect-square rounded-lg overflow-hidden border border-primary/15 shadow-subtle hover:shadow-elevated transition-all duration-300 group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ filter: "saturate(0.92) sepia(0.06)" }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ClinicaPage;
