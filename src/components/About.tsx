import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Heart, Brain, Users } from "lucide-react";
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
            <div className="mt-8 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6 rounded-2xl shadow-elevated border border-primary/20">
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

            {/* Vídeo de apresentação */}
            <div className="mt-8 flex flex-col gap-5">
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-primary/20 aspect-video bg-black">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                >
                  <source src="/video-remata.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>

              {/* Mensagem de acolhimento */}
              <div className="bg-background rounded-2xl p-6 border border-primary/15 shadow-subtle space-y-3">
                <p className="text-base text-foreground font-medium leading-relaxed">
                  Conheça o nosso espaço! 🌿
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Um ambiente pensado em cada detalhe para que você se sinta acolhida,
                  segura e confortável desde o momento em que chegar.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Aqui, cuidado vai além do tratamento — é sobre como você se sente
                  em cada visita, com atenção, leveza e total dedicação a você.
                </p>
                <div className="pt-2 border-t border-border/50">
                  <p className="text-sm font-semibold text-primary leading-snug">
                    Venha nos visitar e descubra um espaço feito para te transformar. ✨
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Especialista em Nutrição + Estética
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4">
              {siteConfig.professional.name}
            </h1>
            <p className="text-primary font-semibold text-lg mb-6">
              {siteConfig.professional.crn} | {siteConfig.professional.title}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Olá, é um prazer ter você por aqui. Sou Nutricionista Ortomolecular e Biomédica Esteta,
              fundadora da Clínica Renata Bastos, localizada na Tijuca — Rio de Janeiro —
              também realizo atendimentos na Barra da Tijuca e consultas online, ampliando o cuidado para
              diferentes rotinas e necessidades.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Minha trajetória na área da saúde nasceu da paixão por compreender o corpo de forma completa.
              Ao longo do caminho, ampliei minha formação para a biomedicina estética, unindo nutrição clínica
              e tecnologias avançadas com o objetivo de oferecer um cuidado mais estratégico, individualizado e eficiente.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Essa integração permite olhar além dos sintomas ou da estética isolada — considerando metabolismo,
              estilo de vida, comportamento alimentar, saúde mental e recursos modernos para promover resultados
              naturais, sustentáveis e alinhados à realidade de cada paciente.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Acredito em processos conduzidos com escuta, planejamento e acompanhamento próximo — porque
              transformação verdadeira acontece quando ciência, estratégia e cuidado caminham juntos.
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
                  className="p-4 bg-background rounded-xl shadow-subtle hover:shadow-elevated hover-lift transition-all duration-300 group border border-border hover:border-primary/50"
                >
                  <qual.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {qual.title}
                  </h4>
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
