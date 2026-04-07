import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Star
} from "lucide-react";
import { siteConfig } from "@/config/site";

const NutritionPlusAesthetics = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Quero conhecer o atendimento integrado de Nutrição + Estética. Gostaria de mais informações."
    );
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Diferencial Único
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Nutrição <span className="text-primary">+</span> Estética
            <br />
            <span className="text-primary">Transformação Completa</span>
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            A integração de nutrição estratégica e estética avançada que cuida de você
            de dentro para fora — saúde, equilíbrio e beleza em um só lugar.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Nutrição Card */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-smooth hover:scale-[1.02] animate-fade-in shadow-elevated">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  Saúde de Dentro
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Nutrição Estratégica
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nutrição ortomolecular, clínica e esportiva para equilibrar seu metabolismo,
                otimizar energia e construir resultados sustentáveis.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Emagrecimento saudável e duradouro</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ganho de massa muscular e definição</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Melhora de disposição e energia</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Equilíbrio hormonal e metabólico</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Prevenção e controle de doenças</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Estética Card */}
          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-smooth hover:scale-[1.02] animate-fade-in shadow-elevated">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-accent-foreground" />
                </div>
                <Badge className="bg-accent text-accent-foreground">
                  Beleza de Fora
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Estética Integrativa
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Harmonização facial e corporal com técnicas avançadas para resultados naturais,
                seguros e alinhados com sua saúde.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Intradermoterapia (gordura localizada)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Harmonização glútea e corporal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Bioestimuladores de colágeno</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Toxina botulínica e skin booster</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Tratamento capilar avançado</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Integration Highlight */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-2 border-primary/30 shadow-elevated">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold">
                    O Resultado da Integração
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Quando nutrição e estética trabalham juntas, os resultados são
                  <strong className="text-foreground"> mais rápidos, mais profundos e mais duradouros</strong>.
                  Você cuida da saúde interna enquanto potencializa a beleza externa — com segurança, ciência e humanização.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <p className="font-bold text-primary text-lg mb-1">Resultados Reais</p>
                    <p className="text-sm text-muted-foreground">Transformações visíveis e sustentáveis</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <p className="font-bold text-primary text-lg mb-1">Acompanhamento</p>
                    <p className="text-sm text-muted-foreground">Suporte contínuo e personalizado</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl border border-border">
                    <p className="font-bold text-primary text-lg mb-1">Humanização</p>
                    <p className="text-sm text-muted-foreground">Cuidado individualizado e empático</p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="text-lg px-8 shadow-glow hover:shadow-elevated"
                  onClick={handleWhatsAppClick}
                >
                  Conhecer Atendimento Integrado
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NutritionPlusAesthetics;
