import { QRCodeSVG } from "qrcode.react";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

const GoogleReviewQR = () => {
  const reviewUrl = siteConfig.googleReviewUrl;

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated border border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">

              {/* Texto */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-display mb-3">
                  Veja o que nossos pacientes dizem no Google ⭐
                </h2>
                <p className="text-foreground font-medium leading-relaxed mb-3">
                  A confiança dos nossos pacientes é o nosso maior reconhecimento.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Leia as avaliações de quem já viveu essa experiência e, se você ficou satisfeita com o seu atendimento, compartilhe também a sua opinião.
                </p>

                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-glow hover:shadow-elevated hover:scale-[1.015] transition-all duration-300 w-fit"
                >
                  <ExternalLink className="h-4 w-4" />
                  Clique aqui e veja nossas avaliações
                </a>
              </div>

              {/* QR Code */}
              <div className="bg-muted/30 p-8 lg:p-12 flex flex-col items-center justify-center gap-4 border-t md:border-t-0 md:border-l border-border">
                <div className="bg-white p-4 rounded-xl shadow-subtle">
                  <QRCodeSVG
                    value={reviewUrl}
                    size={180}
                    bgColor="#ffffff"
                    fgColor="#2c2c2c"
                    level="M"
                    includeMargin={false}
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  📱 Escaneie o QR Code para ver as avaliações<br />e deixar a sua.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewQR;
