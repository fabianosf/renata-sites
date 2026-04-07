import { useParams, Link, useNavigate } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";
import {
  ArrowLeft,
  Clock,
  DollarSign,
  Calendar,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Serviço não encontrado</h1>
            <Button onClick={() => navigate("/")}>Voltar para Home</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = siteConfig.whatsappMessages.service(service.title);
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={service.title}
        description={service.fullDescription}
        keywords={`${service.title}, ${siteConfig.seo.keywords}, Tijuca Rio de Janeiro`}
        url={`https://clinicarenatabastos.com.br/servico/${service.id}`}
        type="service"
      />
      <StructuredData type="service" serviceId={service.id} />
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Serviços", to: "/servicos" },
              { label: service.title },
            ]}
          />

          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="flex items-center gap-3 p-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duração</p>
                    <p className="font-semibold">{service.duration}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="flex items-center gap-3 p-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Frequência</p>
                    <p className="font-semibold">{service.frequency}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="flex items-center gap-3 p-4">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Investimento</p>
                    <p className="font-semibold">{service.price}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Full Description */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Sobre {service.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Detailed Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">O Que Você Vai Receber</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.detailedBenefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-elevated transition-smooth hover:scale-[1.02]"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <h3 className="font-bold text-lg">{benefit.title}</h3>
                      </div>
                      <p className="text-muted-foreground ml-9">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Como Funciona</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-6 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Pronto Para Começar Sua Transformação?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Agende agora sua consulta e dê o primeiro passo em direção a uma
                  vida mais saudável e equilibrada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Agendar pelo WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <Link to="/contato">
                      Formulário de Contato
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Services */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8">Outros Serviços</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {servicesData
                  .filter((s) => s.id !== id)
                  .slice(0, 3)
                  .map((relatedService) => (
                    <Link
                      key={relatedService.id}
                      to={`/servico/${relatedService.id}`}
                    >
                      <Card className="h-full hover:shadow-elevated transition-smooth hover:scale-[1.02]">
                        <CardContent className="p-6">
                          <h3 className="font-bold text-lg mb-3 hover:text-primary transition-smooth">
                            {relatedService.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {relatedService.description}
                          </p>
                          <span className="text-primary text-sm font-semibold inline-flex items-center gap-1">
                            Saiba Mais →
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
