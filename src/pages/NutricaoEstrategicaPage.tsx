import { useTranslation } from "react-i18next";
import { Link } from "@/components/LocalizedLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Pricing from "@/components/Pricing";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import MediaImage from "@/components/MediaImage";
import { mediaImages } from "@/config/media";

const NutricaoEstrategicaPage = () => {
  const { t } = useTranslation();
  const beneficios = t("nutrition.benefits", { returnObjects: true }) as string[];
  const acompanhamentos = t("nutrition.tracking", { returnObjects: true }) as string[];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("nutrition.whatsappMessage"));
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={t("nutrition.seo.title")}
        description={t("nutrition.seo.description")}
        path="/nutricao-estrategica"
      />
      <StructuredData type="home" />
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: t("nutrition.breadcrumb") }]} />

            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t("nutrition.badge")}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-medium mb-4">{t("nutrition.title")}</h1>
            </div>

            <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed space-y-4 mt-4">
              <p>{t("nutrition.p1")}</p>
              <p>{t("nutrition.p2")}</p>
              <p>{t("nutrition.p3")}</p>
            </div>

            <div className="max-w-5xl mx-auto mt-10 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <MediaImage
                  src={mediaImages.draRenataConsulta}
                  alt="Dra. Renata Bastos em consulta nutricional — acompanhamento personalizado"
                  aspectClass="aspect-[16/9]"
                />
              </div>
              <MediaImage
                src={mediaImages.estanteProdutos}
                alt="Produtos premium de nutrição ortomolecular utilizados na clínica"
                aspectClass="aspect-square"
              />
              <MediaImage
                src={mediaImages.consultaAvaliacao}
                alt="Avaliação e planejamento nutricional individualizado"
                aspectClass="aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border border-primary/20 shadow-elevated">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-medium mb-6">{t("nutrition.benefitsTitle")}</h2>
                  <ul className="space-y-3">
                    {beneficios.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-accent/20 shadow-elevated">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-medium mb-6">{t("nutrition.trackingTitle")}</h2>
                  <ul className="space-y-3">
                    {acompanhamentos.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-10">
              <Button
                size="lg"
                className="text-lg px-8 shadow-glow hover:shadow-elevated"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("nutrition.ctaConsultation")}
              </Button>
            </div>
          </div>
        </section>

        {/* Protocolos de Acompanhamento Nutricional */}
        <Pricing />

        {/* CTA cruzado */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="max-w-4xl mx-auto border border-primary/30 bg-primary/5">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  {t("nutrition.crossCta")}
                </p>
                <Link
                  to="/metodo-rb"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  {t("nutrition.crossCtaLink")}
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

export default NutricaoEstrategicaPage;
