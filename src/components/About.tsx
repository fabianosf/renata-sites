import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Heart, Target, Brain, Users } from "lucide-react";
import fruitsImage from "@/assets/frutas.jpg";
import { siteConfig } from "@/config/site";

const About = () => {
  const specializations = [
    "Nutrição Ortomolecular",
    "Biomédica Esteta",
    "Nutrição Clínica",
    "Emagrecimento Saudável",
    "Nutrição Esportiva",
    "Estética Avançada",
    "Saúde Intestinal",
  ];

  const qualifications = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Nutricionista formada pela UVA em 2010. Graduada em Biomedicina - UNIGAMA",
    },
    {
      icon: Award,
      title: "Especializações",
      description: "Pós graduada em Nutrição Ortomolecular (Nutmed), Nutrição Esportiva Funcional (VP) e pós graduanda em Nutrição Clínica Funcional (VP)",
    },
    {
      icon: Brain,
      title: "Filosofia de Trabalho",
      description: "Acredito no equilíbrio, reeducação alimentar e melhoria da relação com o alimento. Contra radicalismo e dietas da moda.",
    },
    {
      icon: Heart,
      title: "Abordagem",
      description: "Trabalho com comportamento do paciente, ajudando a desvendar bloqueios e conquistar autonomia nas escolhas. O feito é melhor que o perfeito.",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="animate-fade-in -mt-8 lg:-mt-12">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated group border-2 border-primary/10">
              <div className="relative aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src={fruitsImage}
                  alt="Alimentação saudável e nutritiva - Frutas frescas e variadas para uma nutrição equilibrada"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            {/* Card de Nutrição Natural - Abaixo da imagem */}
            <div className="mt-6 bg-background rounded-2xl p-5 border border-primary/20 shadow-subtle">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <p className="text-sm font-bold text-primary">Nutrição Natural</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Alimentação equilibrada com alimentos frescos e naturais
              </p>
            </div>
            
            {/* Stats Badge */}
            <div className="mt-8 bg-background p-6 rounded-2xl shadow-elevated">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">{siteConfig.professional.experience}</p>
                  <p className="text-sm text-muted-foreground">Anos</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">{siteConfig.professional.patients}</p>
                  <p className="text-sm text-muted-foreground">Pacientes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">{siteConfig.professional.satisfaction}</p>
                  <p className="text-sm text-muted-foreground">Satisfação</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              {siteConfig.professional.name}
            </h1>
            <p className="text-primary font-semibold text-lg mb-6">
              {siteConfig.professional.crn} | {siteConfig.professional.title}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Olá, é um grande prazer ter você por aqui! Sou Nutricionista Ortomolecular & Biomédica Esteta na Tijuca, Rio de Janeiro. Com muito amor 
              e dedicação pela área da saúde, resolvi expandir meu conhecimento e me tornar 
              uma biomédica com especialização em estética.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Com essa junção consigo entregar resultados magníficos de forma mais acelerada, 
              que integra um olhar apurado sobre estilo de vida, saúde mental e uso de tecnologia 
              em prol da saúde, da beleza e da autoestima. A transformação que você tanto procura 
              pode ser mais simples do que você imagina.
            </p>

            {/* Specializations */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">Áreas de Atuação</h3>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <Badge key={spec} variant="secondary" className="px-4 py-2 text-sm">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Atendimento</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Presencial:</strong> Ed Corporate - Eng Ednaldo Cravo Peixoto, 105/1020 - Tijuca, RJ (na rua do estacionamento do Shopping Tijuca). Estacionamento rotativo no local.<br />
                    <strong>Também atendemos:</strong> Barra da Tijuca, Rio de Janeiro<br />
                    <strong>Online:</strong> Para todo o Brasil e exterior
                  </p>
                </div>
              </div>
            </div>

            {/* Qualifications Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {qualifications.map((qual) => (
                <div
                  key={qual.title}
                  className="p-4 bg-background rounded-xl shadow-subtle hover:shadow-elevated transition-smooth"
                >
                  <qual.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{qual.title}</h4>
                  <p className="text-sm text-muted-foreground">{qual.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
