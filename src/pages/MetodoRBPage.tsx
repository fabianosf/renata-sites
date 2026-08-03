import { useTranslation } from "react-i18next";
import { Link } from "@/components/LocalizedLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import VideoGallery from "@/components/VideoGallery";
import MediaImage from "@/components/MediaImage";
import { mediaImages, metodoVideos } from "@/config/media";

interface MetodoRB {
  name: string;
  tagline: string;
  description: string;
  listLabel: string;
  items: string[];
  submethods?: {
    name: string;
    description: string;
  }[];
}

const MetodoRBPage = () => {
  const { t } = useTranslation();
  const metodos = t("metodoRB.metodos", { returnObjects: true }) as MetodoRB[];

  const handleWhatsAppClick = (metodo?: string) => {
    const message = encodeURIComponent(
      metodo
        ? t("metodoRB.whatsappMessageMetodo", { name: metodo })
        : t("metodoRB.whatsappMessageGeneric")
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={t("metodoRB.seo.title")}
        description={t("metodoRB.seo.description")}
        path="/metodo-rb"
      />
      <StructuredData type="home" />
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: t("metodoRB.breadcrumb") }]} />

            <div className="max-w-3xl mx-auto text-center animate-fade-in mb-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t("metodoRB.badge")}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-medium mb-4">{t("metodoRB.title")}</h1>
              <p className="text-lg text-muted-foreground">{t("metodoRB.subtitle")}</p>
            </div>

            <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-4 mt-8">
              <p>{t("metodoRB.intro1")}</p>
              <p>{t("metodoRB.intro2")}</p>
              <p>{t("metodoRB.intro3")}</p>
            </div>

            <div className="max-w-4xl mx-auto mt-10">
              <MediaImage
                src={mediaImages.consultaAvaliacao}
                alt="Avaliação personalizada com a Dra. Renata Bastos"
                aspectClass="aspect-[4/3] lg:aspect-[16/9]"
              />
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl lg:text-3xl mb-8 text-center">Avaliação e planejamento em vídeo</h2>
              <VideoGallery videos={metodoVideos} columns={1} />
            </div>
          </div>
        </section>

        {/* Cards dos métodos */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {metodos.map((metodo) => (
                <Card
                  key={metodo.name}
                  className="border border-border hover:border-primary/40 transition-smooth hover:scale-[1.01] shadow-subtle hover:shadow-elevated"
                >
                  <CardContent className="p-6 lg:p-8">
                    <h2 className="text-xl lg:text-2xl font-medium mb-1">
                      ✨ {metodo.name}
                    </h2>
                    <p className="text-primary font-medium italic mb-4">"{metodo.tagline}"</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {metodo.description}
                    </p>

                    {metodo.items.length > 0 && (
                      <div className="mb-2">
                        <p className="font-semibold text-sm mb-2">{metodo.listLabel}:</p>
                        <div className="flex flex-wrap gap-2">
                          {metodo.items.map((item) => (
                            <span
                              key={item}
                              className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {metodo.submethods && (
                      <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        {metodo.submethods.map((sub) => (
                          <div
                            key={sub.name}
                            className="p-4 bg-primary/5 rounded-xl border border-primary/20"
                          >
                            <p className="font-bold text-primary mb-2">{sub.name}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {sub.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <Button
                      variant="outline"
                      className="w-full mt-6"
                      onClick={() => handleWhatsAppClick(metodo.name)}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {t("metodoRB.cardCta")}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fechamento */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/30 shadow-elevated">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-2xl lg:text-3xl font-medium mb-6">
                  {t("metodoRB.closingTitle")}
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-4 text-left max-w-2xl mx-auto">
                  <p>{t("metodoRB.closingP1")}</p>
                  <p>{t("metodoRB.closingP2")}</p>
                  <p className="font-medium text-foreground text-center">{t("metodoRB.closingP3")}</p>
                </div>
                <Button
                  size="lg"
                  className="mt-8 text-lg px-8 shadow-glow hover:shadow-elevated"
                  onClick={() => handleWhatsAppClick()}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("common.cta.scheduleEvaluation")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA cruzado */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="max-w-4xl mx-auto border border-accent/30 bg-accent/5">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  {t("metodoRB.crossCta")}
                </p>
                <Link
                  to="/nutricao-estrategica"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  {t("metodoRB.crossCtaLink")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
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

export default MetodoRBPage;
