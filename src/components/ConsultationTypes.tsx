import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Video, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const ConsultationTypes = () => {
  const handleWhatsAppClick = (type: string) => {
    const messages: Record<string, string> = {
      "Consulta Nutricional Presencial": "Olá! Quero agendar uma Consulta Presencial de Nutrição. Gostaria de conhecer valores e disponibilidade.",
      "Consulta Nutricional Online": "Olá! Quero agendar uma Consulta Online de Nutrição. Gostaria de conhecer valores e disponibilidade."
    };

    const message = encodeURIComponent(
      messages[type] || `Olá! Gostaria de saber mais sobre a ${type} e agendar uma consulta.`
    );
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="modalidades" className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Mais de 2000 vidas transformadas
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Como Você Prefere Começar Sua Transformação?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Escolha o formato que melhor se encaixa na sua rotina.
            Ambas as modalidades oferecem a mesma qualidade, dedicação e resultados comprovados.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/20 px-4 py-2 rounded-full border border-amber-200 dark:border-amber-800">
            <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
              ⚡ Agenda limitada — Reserve seu horário com antecedência
            </span>
          </div>
        </div>

        {/* Consultation Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Consulta Presencial */}
          <Card className="border-2 border-primary/30 hover:border-primary transition-smooth hover:scale-105 animate-fade-in shadow-elevated">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <Badge className="bg-primary text-primary-foreground text-sm px-4 py-1">
                  Ideal para Começar
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                Consulta Presencial
              </h3>
              <p className="text-sm text-primary font-medium mb-4">
                Conexão completa e presença humanizada
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                O encontro presencial permite uma avaliação mais profunda, com olhar atento aos detalhes
                e construção de uma relação de confiança desde o primeiro momento.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/90">
                    Avaliação corporal com bioimpedância
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/90">
                    Análise personalizada presencial
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/90">
                    Conexão humana e acolhimento
                  </span>
                </li>
              </ul>

              <Button
                className="w-full"
                size="lg"
                onClick={() => handleWhatsAppClick("Consulta Nutricional Presencial")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Consulta Presencial
              </Button>
            </CardContent>
          </Card>

          {/* Consulta Online */}
          <Card className="border-2 border-primary hover:border-primary transition-smooth hover:scale-105 animate-fade-in shadow-elevated bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Video className="h-8 w-8 text-primary-foreground" />
                </div>
                <Badge className="bg-amber-500 text-white text-sm px-4 py-1">
                  Mais Procurado
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                Consulta Online
              </h3>
              <p className="text-sm text-amber-600 font-medium mb-4">
                Mesma qualidade, de onde você estiver
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Atendimento por videochamada com a mesma dedicação e cuidado da consulta presencial.
                Ideal para quem tem agenda intensa ou mora longe.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/90">
                    Horários flexíveis e acessíveis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/90">
                    Economize tempo de deslocamento
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/90">
                    Atendimento de qualquer lugar
                  </span>
                </li>
              </ul>

              <Button
                className="w-full"
                size="lg"
                onClick={() => handleWhatsAppClick("Consulta Nutricional Online")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Consulta Online
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Info adicional */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-2xl border border-primary/20">
            <p className="text-base font-medium text-foreground mb-2">
              ✨ Qualidade e dedicação iguais em ambas as modalidades
            </p>
            <p className="text-sm text-muted-foreground">
              Seja presencial ou online, você recebe o mesmo cuidado personalizado,
              avaliação completa e acompanhamento próximo para alcançar seus objetivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationTypes;
