import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote, TrendingUp, Award, Heart } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section id="depoimentos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Histórias Reais de Transformação
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Vidas Transformadas,{" "}
            <span className="text-primary">Sonhos Realizados</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Mais de 2000 pessoas já conquistaram seus objetivos — e essas são apenas algumas das histórias incríveis de quem confiou no processo.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-background p-8 lg:p-12 rounded-lg shadow-elevated relative animate-scale-in">
            <Quote className="h-12 w-12 text-primary/20 absolute top-8 left-8" />

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                "{current.text}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 px-6 py-3 rounded-full mb-6 border border-primary/30">
                <TrendingUp className="h-5 w-5 text-primary" />
                <p className="text-primary font-bold text-base">{current.result}</p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg">{current.name}</p>
                  <p className="text-muted-foreground">
                    {current.age} anos{current.location ? ` • ${current.location}` : ""} • {current.date}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={prevTestimonial}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={nextTestimonial}
                    className="rounded-full"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-smooth ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="bg-background p-6 rounded-lg shadow-subtle border border-border hover:shadow-elevated transition-smooth text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">2000+</p>
            <p className="text-muted-foreground font-medium">Pacientes Transformados</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-subtle border border-border hover:shadow-elevated transition-smooth text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground font-medium">Taxa de Satisfação</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-subtle border border-border hover:shadow-elevated transition-smooth text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">8+</p>
            <p className="text-muted-foreground font-medium">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
