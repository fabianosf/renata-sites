import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/site";

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Scroll suave para o topo quando a página carregar
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const testimonials = [
    {
      name: "Ana Paula Santos",
      age: 32,
      location: "Barra da Tijuca, RJ",
      result: "Perdeu 18kg em 6 meses",
      rating: 5,
      text: "A Dra. Renata mudou completamente minha relação com a comida. Não foi apenas uma dieta, foi uma transformação de vida. Aprendi a comer de forma saudável sem passar fome e os resultados apareceram naturalmente. A abordagem ortomolecular fez toda a diferença!",
      date: "Janeiro 2024",
    },
    {
      name: "Carlos Eduardo Lima",
      age: 45,
      location: "Ipanema, RJ",
      result: "Controlou diabetes (glicemia de 180 para 95) e colesterol",
      rating: 5,
      text: "Depois de anos tentando controlar minha diabetes, finalmente encontrei uma profissional que me ajudou de verdade. Meus exames melhoraram significativamente - glicemia normalizada e colesterol controlado. Me sinto muito mais disposto no dia a dia.",
      date: "Dezembro 2023",
    },
    {
      name: "Juliana Martins",
      age: 28,
      location: "Leblon, RJ",
      result: "Ganhou 5kg de massa magra e melhorou performance",
      rating: 5,
      text: "Como atleta, precisava de uma nutricionista que entendesse minhas necessidades. O acompanhamento da Dra. Renata foi essencial para melhorar minha performance e recuperação. Ganhei massa magra e meus treinos renderam muito mais. Recomendo muito!",
      date: "Fevereiro 2024",
    },
    {
      name: "Roberto Silva",
      age: 38,
      location: "Botafogo, RJ",
      result: "Eliminou problemas digestivos e melhorou energia",
      rating: 5,
      text: "Sofria com problemas intestinais há anos. A abordagem personalizada da Dra. Renata foi fundamental. Com a nutrição ortomolecular, consegui identificar e tratar as causas. Hoje tenho uma qualidade de vida que não imaginava ser possível.",
      date: "Novembro 2023",
    },
    {
      name: "Mariana Costa",
      age: 35,
      location: "Barra da Tijuca, RJ",
      result: "Melhorou saúde da pele e autoestima",
      rating: 5,
      text: "Procurei a Dra. Renata para melhorar minha pele e acabei transformando minha saúde por completo. A combinação de nutrição ortomolecular e estética avançada trouxe resultados incríveis. Minha autoestima melhorou muito!",
      date: "Março 2024",
    },
    {
      name: "Pedro Alves",
      age: 42,
      location: "Ipanema, RJ",
      result: "Reduziu gordura visceral e melhorou exames",
      rating: 5,
      text: "Excelente profissional! A Dra. Renata conseguiu me ajudar a reduzir gordura visceral e melhorar todos os meus exames. A abordagem é muito completa e personalizada. Super recomendo!",
      date: "Abril 2024",
    },
    {
      name: "Fernanda Oliveira",
      age: 29,
      location: "Tijuca, RJ",
      result: "Regulou hormônios e perdeu 12kg",
      rating: 5,
      text: "Sofria com desregulação hormonal há anos e nenhum médico conseguia me ajudar de forma completa. A Dra. Renata fez uma abordagem integrando alimentação e suplementação ortomolecular e em poucos meses meu ciclo regularizou, perdi 12kg e minha energia voltou. Sou outra pessoa!",
      date: "Março 2024",
    },
    {
      name: "Marcos Pereira",
      age: 52,
      location: "Vila Isabel, RJ",
      result: "Colesterol e triglicérides normalizados sem remédio",
      rating: 5,
      text: "Meus exames estavam todos alterados e o médico já queria me colocar em medicamento. Resolvi tentar primeiro com nutrição. Em 4 meses com a Dra. Renata, colesterol e triglicérides normalizaram sem remédio. Fiquei impressionado com o resultado.",
      date: "Maio 2024",
    },
    {
      name: "Camila Souza",
      age: 24,
      location: "Copacabana, RJ",
      result: "Controle da SOP e perda de 9kg",
      rating: 5,
      text: "Fui diagnosticada com síndrome do ovário policístico e não sabia o que fazer. A Dra. Renata me explicou tudo com paciência e montou um plano alimentar personalizado. Hoje tenho ciclo regular, perdi 9kg e a acne que me incomodava tanto melhorou muito.",
      date: "Junho 2024",
    },
    {
      name: "Patricia Lima",
      age: 41,
      location: "Méier, RJ",
      result: "Perdeu 15cm de medidas com protocolo integrado",
      rating: 5,
      text: "Fiz a combinação de nutrição com os procedimentos estéticos da clínica e o resultado foi surpreendente. Perdi 15cm nas medidas em 3 meses, a celulite melhorou visivelmente e me sinto muito mais confiante. O atendimento da Dra. Renata é muito humanizado.",
      date: "Julho 2024",
    },
    {
      name: "Thiago Rocha",
      age: 36,
      location: "São Conrado, RJ",
      result: "Ganhou massa magra e eliminou fadiga crônica",
      rating: 5,
      text: "Treinava muito mas não conseguia ganhar massa. A Dra. Renata identificou deficiências nutricionais que atrapalhavam meu rendimento. Com o acompanhamento ortomolecular, minha energia triplicou e finalmente comecei a ver resultado no treino. Recomendo demais!",
      date: "Agosto 2024",
    },
    {
      name: "Sandra Neves",
      age: 48,
      location: "Tijuca, RJ",
      result: "Menopausa sem sofrimento e perdeu 10kg",
      rating: 5,
      text: "Estava na menopausa e achei que teria que conviver com os sintomas para sempre — calores, insônia, ganho de peso. A Dra. Renata me mostrou que era possível viver essa fase com muito mais qualidade. Perdi 10kg, durmo bem e me sinto muito mais equilibrada.",
      date: "Setembro 2024",
    },
    {
      name: "Larissa Fernandes",
      age: 31,
      location: "Niterói, RJ",
      result: "Pele transformada com nutrição ortomolecular",
      rating: 5,
      text: "Gastei fortunas em dermatologistas e cremes para tratar minha acne e nada funcionava de verdade. Uma amiga me indicou a Dra. Renata e foi a melhor indicação da minha vida. Trabalhando a alimentação e a suplementação, minha pele se transformou em 3 meses.",
      date: "Outubro 2024",
    },
    {
      name: "Eduardo Costa",
      age: 33,
      location: "Flamengo, RJ",
      result: "Eliminou ansiedade alimentar e perdeu 8kg",
      rating: 5,
      text: "Tinha uma relação muito complicada com a comida — comia por ansiedade e não conseguia manter nenhuma dieta. A Dra. Renata não me deu apenas um plano alimentar, me ajudou a entender meu comportamento. Perdi 8kg e hoje tenho autonomia nas minhas escolhas.",
      date: "Novembro 2024",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="min-h-screen">
      <SEO
        title="Depoimentos e Histórias de Transformação - Renata Bastos"
        description="Veja o que nossos pacientes têm a dizer sobre sua jornada de transformação com a Dra. Renata Bastos. Resultados reais e transformações duradouras."
        keywords="depoimentos, avaliações, pacientes, resultados, transformação, nutricionista ortomolecular, tijuca rio de janeiro"
        url="https://clinicarenatabastos.com.br/depoimentos"
      />
      <StructuredData type="home" />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Depoimentos e Histórias de Transformação
              </h1>
              <p className="text-lg text-muted-foreground">
                Veja o que nossos pacientes têm a dizer sobre sua jornada com a {siteConfig.professional.name}
              </p>
            </div>

            {/* Featured Testimonial */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-card shadow-elevated">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(current.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                        "{current.text}"
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <p className="font-bold text-lg">{current.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {current.age} anos • {current.location}
                          </p>
                          <p className="text-sm font-semibold text-primary mt-1">
                            {current.result}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">{current.date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-smooth ${
                        index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* All Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-elevated transition-smooth ${
                    index === currentIndex ? "border-2 border-primary" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location} • {testimonial.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TestimonialsPage;

