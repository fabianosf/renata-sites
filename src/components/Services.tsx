import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Video,
  FileText,
  Calendar,
  GraduationCap,
  Trophy,
  Heart,
  Users,
  Sparkles,
  ClipboardCheck,
  CheckCircle2,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { ComponentType } from "react";
import { siteConfig } from "@/config/site";

// Mapeamento de ícones (string -> componente React)
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Stethoscope,
  Video,
  FileText,
  Calendar,
  GraduationCap,
  Trophy,
  Heart,
  Users,
  Sparkles,
  ClipboardCheck,
};

const Services = () => {
  // Usar dados de servicesData.ts
  const services = servicesData.map((service) => ({
    ...service,
    iconComponent: iconMap[service.icon] || FileText, // Fallback para FileText se ícone não encontrado
  }));

  return (
    <section id="servicos" className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-in">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Serviços Personalizados de Nutrição e Estética
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubra a solução ideal para suas necessidades de saúde, nutrição e estética na Tijuca, Rio de Janeiro
          </p>
        </div>

        {/* Como Funciona a Consulta */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Como Funciona a Consulta
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha a modalidade de atendimento ideal para você
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Consulta Avulsa */}
            <Card className="border-2 border-border hover:border-primary/50 transition-smooth animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Consulta Avulsa</h3>
                    <p className="text-sm text-muted-foreground">Atendimento único</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ideal para quem precisa de uma avaliação pontual ou quer conhecer o trabalho antes de iniciar um acompanhamento mais longo.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/90">
                      Consulta única de 60 minutos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/90">
                      Avaliação completa e anamnese detalhada
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/90">
                      Montagem do cardápio na hora da consulta com paciente, respeitando preferências alimentares e rotina
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/90">
                      Material de apoio digital
                    </span>
                  </li>
                </ul>

                <div className="pt-6 border-t border-border">
                  <p className="text-2xl font-bold text-primary mb-2">R$ 260</p>
                  <p className="text-sm text-muted-foreground">Pagamento único</p>
                </div>
              </CardContent>
            </Card>

            {/* Programas de Acompanhamento */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-smooth animate-fade-in bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Programas de Acompanhamento</h3>
                    <p className="text-sm text-muted-foreground">Protocolo contínuo</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  O acompanhamento mensal permite observar sua resposta, ajustar estratégias e cuidar de você ao longo do processo — com mais leveza e constância.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-background rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Consulta + Retorno</h4>
                      <Badge variant="secondary">Popular</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      1 consulta inicial + 1 retorno para ajustes
                    </p>
                    <p className="text-lg font-bold text-primary">R$ 420</p>
                  </div>

                  <div className="p-4 bg-background rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Plano Trimestral</h4>
                      <Badge>Economia</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      1 consulta por mês, durante 3 meses
                    </p>
                    <p className="text-lg font-bold text-primary">
                      R$ 190 x3 <span className="text-sm text-muted-foreground font-normal">(ou R$ 570 à vista)</span>
                    </p>
                  </div>

                  <div className="p-4 bg-background rounded-xl border border-primary/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Plano Semestral</h4>
                      <Badge className="bg-primary text-primary-foreground">Melhor Valor</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      1 consulta por mês, durante 6 meses
                    </p>
                    <p className="text-lg font-bold text-primary">
                      R$ 175 x6 <span className="text-sm text-muted-foreground font-normal">(crédito ou pix)</span>
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Acompanhamento contínuo e ajustes frequentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Foco em resultados duradouros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Suporte entre consultas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Protocolo de Acompanhamento */}
          <Card className="bg-gradient-to-br from-muted/50 to-background border-2 border-primary/20 animate-fade-in">
            <CardContent className="p-6 lg:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Protocolo de Acompanhamento
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Nos programas de acompanhamento, você recebe atenção contínua e personalizada para alcançar seus objetivos de forma sustentável
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Consulta Inicial</h4>
                  <p className="text-sm text-muted-foreground">
                    Avaliação completa, anamnese detalhada e definição de objetivos
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Plano Personalizado</h4>
                  <p className="text-sm text-muted-foreground">
                    Montagem do cardápio na hora da consulta com paciente, respeitando preferências alimentares e rotina
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Acompanhamento Mensal</h4>
                  <p className="text-sm text-muted-foreground">
                    Consultas regulares para ajustes e acompanhamento da evolução
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Resultados Duradouros</h4>
                  <p className="text-sm text-muted-foreground">
                    Transformação sustentável com suporte contínuo e ajustes estratégicos
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button
                  size="lg"
                  className="text-lg px-8"
                  onClick={() => {
                    const message = encodeURIComponent(siteConfig.whatsappMessages.appointment);
                    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
                  }}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Escolher Meu Plano
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-card p-6 rounded-2xl shadow-subtle hover:shadow-elevated transition-smooth hover:scale-[1.02] animate-fade-in ${
                service.featured ? "border-2 border-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-smooth">
                  <service.iconComponent className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                {service.badge && (
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    {service.badge}
                  </Badge>
                )}
              </div>

              <h2 className="font-bold text-lg mb-3 group-hover:text-primary transition-smooth">
                {service.title}
              </h2>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/servico/${service.id}`}>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                >
                  Saiba Mais
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
