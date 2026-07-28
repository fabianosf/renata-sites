import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import VideoGallery from "@/components/VideoGallery";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mediaImages, facialVideos, corporalVideos } from "@/config/media";

const procedureVideos = [...facialVideos, ...corporalVideos];

const procedurePhotos = [
  { src: mediaImages.procedimentoFacial1, alt: "Procedimento facial — atenção e precisão" },
  { src: mediaImages.procedimentoFacial2, alt: "Harmonização facial — resultado natural" },
  { src: mediaImages.procedimentoMasculino, alt: "Procedimento estético masculino" },
  { src: mediaImages.avaliacaoEspelho, alt: "Avaliação do resultado ao espelho" },
  { src: mediaImages.consultaAvaliacao, alt: "Consulta e planejamento individualizado" },
];

const AntesDepoisPage = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("beforeAfter.whatsappMessage"));
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

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
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: t("beforeAfter.breadcrumb") }]} />

            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Resultados Reais — Registros Autorizados</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-medium mb-4">
                {t("beforeAfter.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("beforeAfter.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Resultado Antes e Depois */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal as="div" className="max-w-4xl mx-auto">
              <p className="text-center text-sm text-muted-foreground mb-8">
                {t("beforeAfter.galleryNote")}
              </p>

              <div className="rounded-xl overflow-hidden border border-primary/15 shadow-elevated bg-card mb-8">
                <div className="relative group overflow-hidden">
                  <img
                    src={mediaImages.antesDepoisFacial}
                    alt="Antes e depois — rejuvenescimento facial natural"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 border-t border-border/50">
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                    Harmonização Facial — Rejuvenescimento Natural
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Planejamento individualizado com bioestimulador de colágeno e harmonização facial — resultado elegante, equilibrado e respeitando a anatomia da paciente.
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-3 italic">
                    Resultado individual apresentado com autorização. A avaliação define o melhor protocolo para cada rosto, sem padronização ou promessa de resultado idêntico.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <Button
                  size="lg"
                  className="text-lg px-8 shadow-glow hover:shadow-elevated"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("beforeAfter.cta")}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <div className="divider-line max-w-5xl mx-auto" />

        {/* Vídeos de procedimentos */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal as="div" className="max-w-5xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-medium text-center mb-3">
                {t("beforeAfter.videosTitle")}
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Veja a Dra. Renata em atendimento real — técnica apurada, cuidado individualizado e precisão em cada procedimento.
              </p>
              <VideoGallery videos={procedureVideos} columns={2} aspect="portrait" />
              <p className="text-center text-xs text-muted-foreground/70 mt-6 italic">
                Registros reais de procedimentos na Clínica Renata Bastos. Todos os atendimentos são realizados com consentimento e protocolos de segurança rigorosos.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="divider-line max-w-5xl mx-auto" />

        {/* Galeria de procedimentos em imagem */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal as="div" className="max-w-5xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-medium text-center mb-3">
                Procedimentos em imagens
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Cada procedimento realizado com técnica, precisão e compromisso com a naturalidade do resultado.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {procedurePhotos.map((img) => (
                  <div
                    key={img.src}
                    className="rounded-lg overflow-hidden border border-primary/15 shadow-subtle hover:shadow-elevated transition-all duration-300 group"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-medium mb-3">Sua transformação pode ser a próxima</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Agende sua avaliação e descubra qual Método RB foi desenvolvido para você. Cada tratamento começa com um diagnóstico individualizado.
              </p>
              <Button
                size="lg"
                className="text-lg px-8 shadow-glow hover:shadow-elevated"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Minha Avaliação
              </Button>
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
