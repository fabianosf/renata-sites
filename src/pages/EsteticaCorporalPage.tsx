import { Link } from "react-router-dom";
import { Link as LocalizedLink } from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/config/site";
import VideoGallery from "@/components/VideoGallery";
import MediaImage from "@/components/MediaImage";
import { corporalVideos, mediaImages } from "@/config/media";

const corporalServiceIds = ["intradermoterapia", "harmonizacao-glutea", "tratamento-capilar"];

const EsteticaCorporalPage = () => {
  const { t } = useTranslation();
  const corporalServices = servicesData.filter((s) => corporalServiceIds.includes(s.id));

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("corporal.whatsappMessage"));
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={t("corporal.seo.title")}
        description={t("corporal.seo.description")}
        path="/estetica-corporal"
      />
      <StructuredData type="home" />
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: t("corporal.breadcrumb") }]} />

            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t("corporal.badge")}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-medium mb-4">{t("corporal.title")}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("corporal.description")}
              </p>
            </div>

            <div className="max-w-4xl mx-auto mt-10">
              <MediaImage
                src={mediaImages.procedimentoMasculino}
                alt="Procedimento estético corporal na Clínica Renata Bastos"
                aspectClass="aspect-[4/3] lg:aspect-[16/9]"
              />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl lg:text-3xl mb-8 text-center">Procedimentos em vídeo</h2>
              <VideoGallery videos={corporalVideos} columns={2} />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
              {corporalServices.map((service) => (
                <Card
                  key={service.id}
                  className="border border-border hover:border-primary/40 transition-smooth hover:scale-[1.01] shadow-subtle hover:shadow-elevated"
                >
                  <CardContent className="p-6">
                    <h2 className="text-xl font-medium mb-3">{service.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      to={`/servico/${service.id}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                    >
                      {t("common.cta.learnMore")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button
                size="lg"
                className="text-lg px-8 shadow-glow hover:shadow-elevated"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("corporal.ctaEvaluation")}
              </Button>
            </div>
          </div>
        </section>

        {/* CTA cruzado */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="max-w-4xl mx-auto border border-accent/30 bg-accent/5">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  {t("corporal.crossCta")}
                </p>
                <LocalizedLink
                  to="/nutricao-estrategica"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  {t("corporal.crossCtaLink")}
                  <ArrowRight className="h-4 w-4" />
                </LocalizedLink>
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

export default EsteticaCorporalPage;
