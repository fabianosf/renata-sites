import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ana Paula Santos",
      age: 32,
      location: "Vila Mariana, SP",
      result: "Perdeu 18kg em 6 meses",
      rating: 5,
      text: "A Dra. Renata mudou completamente minha relação com a comida. Não foi apenas uma dieta, foi uma transformação de vida. Aprendi a comer de forma saudável sem passar fome e os resultados apareceram naturalmente. A abordagem ortomolecular fez toda a diferença!",
      date: "Janeiro 2024",
    },
    {
      name: "Carlos Eduardo Lima",
      age: 45,
      location: "Centro, SP",
      result: "Controlou diabetes (glicemia de 180 para 95) e colesterol",
      rating: 5,
      text: "Depois de anos tentando controlar minha diabetes, finalmente encontrei uma profissional que me ajudou de verdade. Meus exames melhoraram significativamente - glicemia normalizada e colesterol controlado. Me sinto muito mais disposto no dia a dia.",
      date: "Dezembro 2023",
    },
    {
      name: "Juliana Martins",
      age: 28,
      location: "Pinheiros, SP",
      result: "Ganhou 5kg de massa magra e melhorou performance",
      rating: 5,
      text: "Como atleta, precisava de uma nutricionista que entendesse minhas necessidades. O acompanhamento da Dra. Renata foi essencial para melhorar minha performance e recuperação. Ganhei massa magra e meus treinos renderam muito mais. Recomendo muito!",
      date: "Fevereiro 2024",
    },
    {
      name: "Roberto Silva",
      age: 38,
      location: "Moema, SP",
      result: "Eliminou problemas digestivos e melhorou energia",
      rating: 5,
      text: "Sofria com problemas intestinais há anos. A abordagem personalizada da Dra. Renata foi fundamental. Com a nutrição ortomolecular, consegui identificar e tratar as causas. Hoje tenho uma qualidade de vida que não imaginava ser possível.",
      date: "Novembro 2023",
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
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Depoimentos e Histórias de Transformação
          </h1>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos pacientes têm a dizer sobre sua jornada com a Renata Bastos
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-background p-8 lg:p-12 rounded-3xl shadow-elevated relative animate-scale-in">
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
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-6">
                <p className="text-primary font-semibold">{current.result}</p>
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
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Pacientes Transformados</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Taxa de Satisfação</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">8+</p>
            <p className="text-muted-foreground">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
