import { QRCodeSVG } from "qrcode.react";
import { Star, ExternalLink } from "lucide-react";
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
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <h2 className="text-2xl lg:text-3xl font-display mb-3">
                  Gostou do atendimento?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sua avaliação no Google nos ajuda a alcançar mais pessoas que precisam de cuidado.
                  Leva menos de 1 minuto e faz toda a diferença para nós! 🤍
                </p>

                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-glow hover:shadow-elevated hover:scale-[1.015] transition-all duration-300 w-fit"
                >
                  <ExternalLink className="h-4 w-4" />
                  Avaliar no Google
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
                  Aponte a câmera do celular<br />para avaliar
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
