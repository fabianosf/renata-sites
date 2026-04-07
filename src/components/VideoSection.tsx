import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const VideoSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vi seu vídeo de apresentação e quero agendar uma consulta!"
    );
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  const benefits = [
    "Conheça minha abordagem integrativa",
    "Entenda como funciona o processo",
    "Veja depoimentos de pacientes reais",
    "Descubra se o método é para você"
  ];

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
            <Card className="overflow-hidden shadow-elevated border-2 border-primary/20">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    preload="metadata"
                  >
                    <source src="/video2.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </div>
              </CardContent>
            </Card>

            {/* Legenda do vídeo */}
            <div className="bg-background rounded-2xl p-6 border border-primary/15 shadow-subtle space-y-3">
              <p className="text-base text-foreground font-medium leading-relaxed">
                Seja Bem-vinda à Clínica Renata Bastos! 🤍
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aqui você encontra cuidado personalizado para transformar sua saúde — de dentro para fora.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nutrição Ortomolecular e Estética Avançada integradas em um só lugar,<br />
                pensadas para a sua realidade e para o seu resultado.
              </p>
              <div className="pt-1 border-t border-border/50">
                <p className="text-sm font-semibold text-primary">
                  Dê o primeiro passo — agende sua consulta e comece sua transformação. ✨
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Play className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Assista ao Vídeo
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Por Que Escolher a{" "}
              <span className="text-primary">Clínica Renata Bastos?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Em poucos minutos, você vai entender como a integração de
              <strong className="text-foreground"> Nutrição Ortomolecular + Estética Avançada</strong> pode
              transformar não apenas seu corpo, mas sua relação com saúde e bem-estar.
            </p>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Não é sobre dietas milagrosas ou procedimentos estéticos isolados.
              É sobre um cuidado completo, estratégico e humanizado — pensado para você.
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
                Quero Agendar Minha Consulta
              </Button>

              <p className="text-sm text-muted-foreground">
                ⚡ <strong>Agenda limitada</strong> — Atendimento personalizado com vagas mensais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
