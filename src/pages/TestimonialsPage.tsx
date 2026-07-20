import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import renataPoster from "@/assets/renata2.jpeg";

const TestimonialsPage = () => {
  const { t } = useTranslation();
  const testimonials = t("stories.testimonials", { returnObjects: true }) as string[];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("stories.whatsappMessage"));
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={t("stories.seo.title")}
        description={t("stories.seo.description")}
        path="/historias-de-transformacao"
      />
      <StructuredData type="home" />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: t("stories.breadcrumb") }]} />

            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h1 className="text-3xl lg:text-4xl font-medium mb-4">
                {t("stories.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("stories.intro")}
              </p>
            </div>

            {/* Vídeo de transformação real */}
            <div className="max-w-3xl mx-auto mb-16">
              <Card className="overflow-hidden shadow-elevated border border-primary/20">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-video bg-black">
                    <video
                      className="w-full h-full object-contain"
                      controls
                      playsInline
                      preload="metadata"
                      poster={renataPoster}
                    >
                      <source src="/video1.mp4" type="video/mp4" />
                      Seu navegador não suporta a reprodução de vídeo.
                    </video>
                  </div>
                </CardContent>
              </Card>
              <p className="text-center text-sm text-muted-foreground mt-3">
                {t("stories.videoCaption")}
              </p>
            </div>

            {/* Depoimentos */}
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-xl font-semibold text-primary">
                {t("stories.testimonialsTitle")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
              {testimonials.map((text, index) => (
                <Card key={index} className="hover:shadow-elevated transition-smooth">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-primary/30 mb-2" />
                    <p className="text-foreground/90 leading-relaxed italic">
                      "{text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Fechamento */}
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/30 shadow-elevated">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-2xl lg:text-3xl font-medium mb-4">
                  {t("stories.closingTitle")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-2 max-w-2xl mx-auto">
                  {t("stories.closingP1")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  {t("stories.closingP2")}
                </p>
                <Button
                  size="lg"
                  className="text-lg px-8 shadow-glow hover:shadow-elevated"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("stories.cta")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TestimonialsPage;
