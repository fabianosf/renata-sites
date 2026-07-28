import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { featuredVideo } from "@/config/media";

const VideoSection = () => {
  const { t } = useTranslation();
  const [videoStarted, setVideoStarted] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("home.video.whatsappMessage"));
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  const benefits = t("home.video.benefits", { returnObjects: true }) as string[];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Vídeo + Legenda */}
          <div className="animate-fade-in flex flex-col gap-6">
            <Card className="overflow-hidden shadow-elevated border border-primary/20">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  {!videoStarted ? (
                    /* Thumbnail com play manual — evita carregar 13MB sem intenção */
                    <button
                      className="relative w-full h-full group focus:outline-none"
                      onClick={() => setVideoStarted(true)}
                      aria-label="Reproduzir vídeo de apresentação"
                    >
                      <img
                        src={featuredVideo.poster}
                        alt={featuredVideo.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="inline-block bg-black/60 text-white text-xs px-2 py-1 rounded">
                          {featuredVideo.title}
                        </span>
                      </div>
                    </button>
                  ) : (
                    <video
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      playsInline
                      preload="auto"
                      poster={featuredVideo.poster}
                      aria-label={featuredVideo.title}
                    >
                      <source src={featuredVideo.src} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Legenda do vídeo */}
            <div className="bg-background rounded-lg p-6 border border-primary/15 shadow-subtle space-y-3">
              <p className="text-base text-foreground font-medium leading-relaxed">
                {t("home.video.caption1")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("home.video.caption2")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("home.video.caption3")}
              </p>
              <div className="pt-1 border-t border-border/50">
                <p className="text-sm font-semibold text-primary">
                  {t("home.video.caption4")}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Play className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("home.video.badge")}
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-medium mb-6">
              <Trans i18nKey="home.video.title" components={{ 1: <span className="text-primary" /> }} />
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <Trans i18nKey="home.video.p1" components={{ strong: <strong className="text-foreground" /> }} />
            </p>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              {t("home.video.p2")}
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-8 shadow-glow hover:shadow-elevated"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("home.video.cta")}
              </Button>

              <p className="text-sm text-muted-foreground">
                <Trans i18nKey="home.video.limitedAgenda" components={{ strong: <strong /> }} />
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
