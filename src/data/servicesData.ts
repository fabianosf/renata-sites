export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  fullDescription: string;
  detailedBenefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  duration: string;
  price: string;
  frequency: string;
  badge?: string; // Badge opcional (ex: "Mais Procurado", "Ideal para Começar")
  featured?: boolean; // Se o serviço deve ser destacado
}

export const servicesData: Service[] = [
  {
    id: "consulta-presencial",
    icon: "Stethoscope",
    title: "Consulta Nutricional Presencial",
    description:
      "Atendimento personalizado no consultório com avaliação completa e elaboração de plano alimentar individualizado.",
    benefits: ["Avaliação corporal", "Anamnese detalhada", "Plano personalizado"],
    badge: "Ideal para Começar",
    featured: true,
    fullDescription:
      "Na consulta presencial, faço um equilíbrio do seu metabolismo. De acordo com sinais e sintomas que você me relata, consigo entender qual nutriente está deficiente no seu organismo. Faço o ajuste através de alimentos e/ou de ativo manipulado. Esse equilíbrio te traz uma qualidade de vida incrível: você ganha ânimo para trabalhar, treinar, dormir com recuperação, controle do estresse, otimização de todas as funções gastrointestinais e destoxificação adequada. Realizo avaliação corporal através de adipômetro, fita métrica e balança para acompanhar a evolução e mensurar a quantidade de macro e micronutrientes no planejamento alimentar.",
    detailedBenefits: [
      {
        title: "Avaliação Corporal Completa",
        description:
          "Análise detalhada da composição corporal utilizando bioimpedância, medidas antropométricas e avaliação física completa.",
      },
      {
        title: "Anamnese Personalizada",
        description:
          "Entrevista aprofundada sobre seus hábitos alimentares, histórico de saúde, rotina diária e objetivos específicos.",
      },
      {
        title: "Plano Alimentar Sob Medida",
        description:
          "Elaboração de cardápio personalizado considerando suas preferências, restrições e estilo de vida.",
      },
      {
        title: "Material de Apoio",
        description:
          "Receitas práticas, lista de compras e orientações detalhadas para facilitar sua jornada.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Agendamento",
        description: "Agende sua consulta pelo WhatsApp ou formulário de contato.",
      },
      {
        step: 2,
        title: "Primeira Consulta",
        description:
          "Avaliação completa com duração de 60 minutos, incluindo medidas e anamnese.",
      },
      {
        step: 3,
        title: "Plano Alimentar",
        description:
          "Receba seu plano personalizado em até 3 dias úteis após a consulta.",
      },
      {
        step: 4,
        title: "Acompanhamento",
        description:
          "Retornos periódicos para ajustes e acompanhamento da evolução.",
      },
    ],
    duration: "60 minutos",
    price: "Consulte valores",
    frequency: "Mensal ou conforme necessidade",
  },
  {
    id: "consulta-online",
    icon: "Video",
    title: "Consulta Nutricional Online",
    description:
      "Atendimento remoto com a mesma qualidade da consulta presencial, no conforto da sua casa.",
    benefits: ["Flexibilidade de horários", "Sem deslocamento", "Acompanhamento digital"],
    badge: "Mais Procurado",
    featured: true,
    fullDescription:
      "A consulta nutricional online oferece toda a qualidade e profissionalismo da consulta presencial, com a comodidade de ser realizada de qualquer lugar. Através de videochamada, realizamos uma avaliação completa e elaboramos seu plano alimentar personalizado. Ideal para quem tem rotina agitada ou mora em outras cidades.",
    detailedBenefits: [
      {
        title: "Atendimento de Qualidade",
        description:
          "Mesma qualidade da consulta presencial, com avaliação completa e plano personalizado via plataforma segura.",
      },
      {
        title: "Flexibilidade Total",
        description:
          "Atendimento em horários flexíveis, incluindo fins de semana, adaptado à sua rotina.",
      },
      {
        title: "Sem Deslocamento",
        description:
          "Economize tempo e custos com deslocamento, realizando a consulta de casa ou trabalho.",
      },
      {
        title: "Material Digital",
        description:
          "Todo material enviado digitalmente, incluindo plano alimentar, receitas e orientações.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Agendamento Online",
        description: "Escolha o melhor horário na nossa agenda online.",
      },
      {
        step: 2,
        title: "Videochamada",
        description:
          "Consulta por Google Meet ou Zoom com duração de 60 minutos.",
      },
      {
        step: 3,
        title: "Avaliação Virtual",
        description:
          "Orientações para autoavaliação e envio de dados necessários.",
      },
      {
        step: 4,
        title: "Material Digital",
        description: "Receba todo material em formato digital via e-mail ou WhatsApp.",
      },
    ],
    duration: "60 minutos",
    price: "Consulte valores",
    frequency: "Mensal ou conforme necessidade",
  },
  {
    id: "plano-alimentar",
    icon: "FileText",
    title: "Plano Alimentar Personalizado",
    description:
      "Cardápio sob medida baseado nas suas necessidades, objetivos, preferências e rotina.",
    benefits: ["Receitas práticas", "Lista de compras", "Substituições flexíveis"],
    featured: true,
    fullDescription:
      "Juntos montamos um cardápio respeitando sua preferência alimentar, tempo hábil para realizar as refeições, opções para não haver monotonia alimentar e receitas variadas. Faço cálculo energético diário de acordo com seus treinos ou seu dia a dia. O paciente recebe o link para baixar o app com todo conteúdo da consulta, onde pode fazer o registro do diário alimentar para que eu possa reagir com meus comentários. Meu objetivo é que você tenha autonomia alimentar, melhore seu relacionamento com o alimento e entenda que o processo é muito agradável.",
    detailedBenefits: [
      {
        title: "100% Personalizado",
        description:
          "Cardápio elaborado especificamente para você, considerando suas preferências e restrições alimentares.",
      },
      {
        title: "Receitas Práticas",
        description:
          "Receitas detalhadas, fáceis de preparar e adaptadas à sua rotina e habilidades culinárias.",
      },
      {
        title: "Lista de Compras",
        description:
          "Lista completa de ingredientes organizada por categorias para facilitar suas compras.",
      },
      {
        title: "Flexibilidade",
        description:
          "Opções de substituições para cada refeição, permitindo variedade e adaptação.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação Inicial",
        description: "Consulta presencial ou online para coleta de informações.",
      },
      {
        step: 2,
        title: "Elaboração",
        description:
          "Desenvolvimento do plano alimentar personalizado em até 3 dias úteis.",
      },
      {
        step: 3,
        title: "Entrega e Explicação",
        description:
          "Apresentação detalhada do plano com todas as orientações necessárias.",
      },
      {
        step: 4,
        title: "Suporte Contínuo",
        description: "Ajustes e esclarecimento de dúvidas durante o acompanhamento.",
      },
    ],
    duration: "Entrega em 3 dias úteis",
    price: "Consulte valores",
    frequency: "Ajustado mensalmente",
  },
  {
    id: "acompanhamento",
    icon: "Calendar",
    title: "Acompanhamento Nutricional",
    description:
      "Consultas de retorno para avaliar evolução, ajustar o plano e garantir resultados duradouros.",
    benefits: ["Ajustes contínuos", "Suporte permanente", "Foco em resultados"],
    fullDescription:
      "Existem diversos programas: semestral, trimestral, encontro mensal ou de 45 em 45 dias. Porque o processo é muito individual. Na consulta conversamos bastante sobre os pontos chaves para montar um programa de acordo com sua individualidade. Explico que nem todos os dias será possível realizar tudo da maneira que planejamos, lembrando que quanto mais seguir, maior será o resultado. Explico a importância de não se cobrar tanto, pois só gera mais ansiedade e transtornos alimentares. O feito é melhor que o perfeito.",
    detailedBenefits: [
      {
        title: "Monitoramento Constante",
        description:
          "Avaliação regular da evolução com ajustes precisos baseados em seus resultados.",
      },
      {
        title: "Ajustes Personalizados",
        description:
          "Modificações no plano alimentar conforme sua evolução e novas necessidades.",
      },
      {
        title: "Suporte Motivacional",
        description:
          "Apoio contínuo para manter sua motivação e superar obstáculos no caminho.",
      },
      {
        title: "Resultados Sustentáveis",
        description:
          "Foco em mudanças graduais e sustentáveis para resultados a longo prazo.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Consulta Inicial",
        description: "Primeira avaliação completa e elaboração do plano inicial.",
      },
      {
        step: 2,
        title: "Retorno 15 dias",
        description:
          "Primeira reavaliação para ajustes iniciais e esclarecimento de dúvidas.",
      },
      {
        step: 3,
        title: "Retorno Mensal",
        description:
          "Consultas mensais para monitoramento e ajustes conforme evolução.",
      },
      {
        step: 4,
        title: "Suporte Contínuo",
        description: "Disponibilidade para dúvidas via WhatsApp entre consultas.",
      },
    ],
    duration: "30-45 minutos por retorno",
    price: "Consulte valores",
    frequency: "Quinzenal ou mensal",
  },
  {
    id: "reeducacao-alimentar",
    icon: "GraduationCap",
    title: "Reeducação Alimentar",
    description:
      "Transforme sua relação com a comida através de educação nutricional e mudanças de hábitos sustentáveis.",
    benefits: ["Mudança de mindset", "Hábitos duradouros", "Sem dietas restritivas"],
    fullDescription:
      "A reeducação alimentar vai além de dietas restritivas. É um processo de transformação da sua relação com a comida, desenvolvendo hábitos saudáveis e sustentáveis a longo prazo. Através de educação nutricional, você aprenderá a fazer escolhas conscientes e equilibradas.",
    detailedBenefits: [
      {
        title: "Mudança de Mindset",
        description:
          "Transformação da sua mentalidade sobre alimentação, sem culpa ou restrições extremas.",
      },
      {
        title: "Educação Nutricional",
        description:
          "Aprenda sobre nutrição de forma prática e aplicável ao seu dia a dia.",
      },
      {
        title: "Hábitos Sustentáveis",
        description:
          "Desenvolvimento de hábitos que você pode manter pelo resto da vida.",
      },
      {
        title: "Autonomia Alimentar",
        description:
          "Capacidade de fazer escolhas conscientes e equilibradas em qualquer situação.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação do Comportamento",
        description:
          "Análise detalhada da sua relação atual com a comida e identificação de padrões.",
      },
      {
        step: 2,
        title: "Educação Gradual",
        description:
          "Introdução progressiva de conceitos nutricionais de forma prática.",
      },
      {
        step: 3,
        title: "Implementação",
        description:
          "Aplicação gradual de mudanças sustentáveis na rotina alimentar.",
      },
      {
        step: 4,
        title: "Consolidação",
        description:
          "Acompanhamento para garantir manutenção dos novos hábitos a longo prazo.",
      },
    ],
    duration: "Processo de 3-6 meses",
    price: "Consulte valores",
    frequency: "Acompanhamento quinzenal ou mensal",
  },
  {
    id: "nutricao-esportiva",
    icon: "Trophy",
    title: "Nutrição Esportiva",
    description:
      "Estratégias nutricionais para melhorar performance, recuperação e composição corporal de atletas.",
    benefits: ["Ganho de massa", "Performance otimizada", "Recuperação acelerada"],
    fullDescription:
      "A nutrição esportiva é fundamental para atletas e praticantes de atividades físicas que buscam otimizar performance, melhorar composição corporal e acelerar recuperação. Desenvolvemos estratégias nutricionais específicas para cada modalidade e objetivo individual.",
    detailedBenefits: [
      {
        title: "Performance Otimizada",
        description:
          "Estratégias nutricionais para maximizar energia, força e resistência durante treinos e competições.",
      },
      {
        title: "Composição Corporal",
        description:
          "Planos específicos para ganho de massa muscular, redução de gordura ou manutenção.",
      },
      {
        title: "Recuperação Acelerada",
        description:
          "Protocolos nutricionais para otimizar recuperação muscular e reduzir fadiga.",
      },
      {
        title: "Suplementação",
        description:
          "Orientação sobre suplementos adequados baseada em evidências científicas.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação Esportiva",
        description:
          "Análise da modalidade, rotina de treinos, objetivos e composição corporal.",
      },
      {
        step: 2,
        title: "Periodização Nutricional",
        description:
          "Estratégias nutricionais alinhadas com seu ciclo de treinamento.",
      },
      {
        step: 3,
        title: "Implementação",
        description:
          "Plano nutricional detalhado com timing de nutrientes e refeições.",
      },
      {
        step: 4,
        title: "Ajustes Dinâmicos",
        description:
          "Reavaliações frequentes para ajustes conforme evolução e fase do treino.",
      },
    ],
    duration: "Acompanhamento contínuo",
    price: "Consulte valores",
    frequency: "Quinzenal ou conforme periodização",
  },
  {
    id: "nutricao-clinica",
    icon: "Heart",
    title: "Nutrição Clínica",
    description:
      "Tratamento nutricional para condições como diabetes, hipertensão, colesterol alto e outras patologias.",
    benefits: ["Abordagem terapêutica", "Controle de doenças", "Melhora da saúde"],
    fullDescription:
      "A nutrição clínica utiliza a alimentação como parte fundamental do tratamento de doenças crônicas e condições de saúde específicas. Trabalhamos em conjunto com sua equipe médica para desenvolver estratégias nutricionais que auxiliem no controle e tratamento da sua condição.",
    detailedBenefits: [
      {
        title: "Tratamento Integrado",
        description:
          "Trabalho em conjunto com sua equipe médica para tratamento completo e eficaz.",
      },
      {
        title: "Controle de Patologias",
        description:
          "Estratégias nutricionais específicas para diabetes, hipertensão, dislipidemia e outras condições.",
      },
      {
        title: "Melhora da Qualidade de Vida",
        description:
          "Redução de sintomas e melhora do bem-estar geral através da alimentação.",
      },
      {
        title: "Prevenção de Complicações",
        description:
          "Orientações para prevenir agravamento e complicações da condição de saúde.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação Clínica",
        description:
          "Análise detalhada do histórico médico, exames e condição atual de saúde.",
      },
      {
        step: 2,
        title: "Plano Terapêutico",
        description:
          "Elaboração de estratégia nutricional específica para sua condição.",
      },
      {
        step: 3,
        title: "Implementação Gradual",
        description:
          "Introdução progressiva de mudanças alimentares adequadas ao tratamento.",
      },
      {
        step: 4,
        title: "Monitoramento Contínuo",
        description:
          "Acompanhamento regular com ajustes baseados em exames e evolução clínica.",
      },
    ],
    duration: "Acompanhamento contínuo",
    price: "Consulte valores",
    frequency: "Conforme necessidade clínica",
  },
  {
    id: "educacao-grupo",
    icon: "Users",
    title: "Educação Nutricional em Grupo",
    description:
      "Workshops e palestras sobre alimentação saudável para empresas, escolas e grupos.",
    benefits: ["Formato dinâmico", "Troca de experiências", "Custo acessível"],
    fullDescription:
      "Workshops e palestras educativas sobre nutrição e alimentação saudável para grupos, empresas, escolas e comunidades. Formato dinâmico e interativo que promove educação nutricional e troca de experiências entre participantes.",
    detailedBenefits: [
      {
        title: "Formato Dinâmico",
        description:
          "Apresentações interativas com dinâmicas, demonstrações práticas e atividades em grupo.",
      },
      {
        title: "Temas Diversos",
        description:
          "Diversos temas disponíveis: alimentação saudável, rotulagem, compras conscientes, meal prep e mais.",
      },
      {
        title: "Troca de Experiências",
        description:
          "Ambiente colaborativo que promove troca de experiências e aprendizado coletivo.",
      },
      {
        title: "Material de Apoio",
        description:
          "Todos os participantes recebem material educativo para consulta posterior.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Definição do Tema",
        description:
          "Escolha do tema e objetivos do workshop conforme necessidade do grupo.",
      },
      {
        step: 2,
        title: "Personalização",
        description:
          "Adaptação do conteúdo para o perfil e necessidades específicas dos participantes.",
      },
      {
        step: 3,
        title: "Realização",
        description:
          "Workshop presencial ou online com duração de 1-2 horas.",
      },
      {
        step: 4,
        title: "Material Complementar",
        description:
          "Envio de material educativo e resposta a dúvidas pós-workshop.",
      },
    ],
    duration: "1-2 horas",
    price: "Consulte valores para grupos",
    frequency: "Evento único ou série de workshops",
  },
  {
    id: "nutricao-ortomolecular",
    icon: "Sparkles",
    title: "Nutrição Ortomolecular",
    description:
      "Abordagem nutricional que utiliza nutrientes em doses otimizadas para prevenir e tratar doenças, melhorando a saúde celular.",
    benefits: ["Otimização celular", "Prevenção de doenças", "Melhora da energia", "Longevidade"],
    fullDescription:
      "A Nutrição Ortomolecular utiliza vitaminas, minerais, aminoácidos e outros nutrientes em doses otimizadas para restaurar o equilíbrio bioquímico do organismo. Esta abordagem científica visa prevenir doenças, melhorar a saúde celular e promover longevidade com qualidade de vida.",
    detailedBenefits: [
      {
        title: "Otimização Celular",
        description:
          "Suplementação personalizada de micronutrientes para otimizar o funcionamento celular e metabólico.",
      },
      {
        title: "Prevenção e Tratamento",
        description:
          "Abordagem preventiva e terapêutica para diversas condições de saúde através da correção de deficiências nutricionais.",
      },
      {
        title: "Melhora da Energia",
        description:
          "Otimização dos processos metabólicos para aumento significativo de energia e vitalidade.",
      },
      {
        title: "Longevidade Saudável",
        description:
          "Estratégias nutricionais para envelhecimento saudável e prevenção de doenças crônicas.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação Ortomolecular",
        description:
          "Análise detalhada de deficiências nutricionais através de exames laboratoriais específicos.",
      },
      {
        step: 2,
        title: "Plano Personalizado",
        description:
          "Elaboração de protocolo individualizado com suplementação ortomolecular otimizada.",
      },
      {
        step: 3,
        title: "Implementação",
        description:
          "Início do protocolo com acompanhamento próximo e ajustes conforme necessário.",
      },
      {
        step: 4,
        title: "Monitoramento",
        description:
          "Reavaliações periódicas para otimização contínua do protocolo ortomolecular.",
      },
    ],
    duration: "Acompanhamento contínuo",
    price: "Consulte valores",
    frequency: "Mensal ou conforme protocolo",
  },
  {
    id: "intradermoterapia",
    icon: "Sparkles",
    title: "Intradermoterapia",
    description:
      "Tratamento indicado para melhorar composição corporal, diminuir gordura localizada, flacidez, celulite, inibir apetite, ansiedade e otimizar performance.",
    benefits: ["Redução de gordura localizada", "Melhora da celulite", "Otimização de performance", "Aumento de energia"],
    badge: "Mais Procurado",
    featured: true,
    fullDescription:
      "Intradermoterapia é um tratamento indicado para quem busca melhorar sua composição corporal, diminuir gordura localizada, flacidez, celulite, inibir apetite, ansiedade, otimização de performance, melhora da energia e disposição. Existem diversas mesclas que vão potencializar seu resultado. Os ativos utilizados são substâncias saudáveis, que agem como lipolíticas, responsáveis por quebrar os nódulos gordurosos e celulíticos diretamente na região subcutânea. Também costumam ser utilizadas combinações de vitaminas, minerais, enzimas, extratos de plantas e aminoácidos. As combinações de insumos são preparadas de acordo com a necessidade de cada paciente, tudo pensando em otimizar e acelerar seu resultado.",
    detailedBenefits: [
      {
        title: "Aplicação Localizada",
        description:
          "Infiltração de medicamentos na derme ou no tecido subcutâneo através de agulha muito fina e delicada para tratamento de áreas específicas.",
      },
      {
        title: "Aplicação Sistêmica",
        description:
          "Técnica intra muscular quando se deseja efeito sistêmico, atuando no metabolismo por um todo. Muito usado para emagrecimento total, melhora de disposição, força e potencialização do fígado.",
      },
      {
        title: "Combinações Personalizadas",
        description:
          "Diversas mesclas disponíveis que podem ser combinadas para potencializar resultados conforme suas necessidades individuais.",
      },
      {
        title: "Resultados Visíveis",
        description:
          "Os resultados começam a aparecer depois de 3 a 6 sessões, variando de acordo com cada caso.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação e Planejamento",
        description:
          "Análise das áreas a serem tratadas e definição do protocolo mais adequado para seu caso.",
      },
      {
        step: 2,
        title: "Preparação",
        description:
          "Orientações sobre cuidados antes das sessões: pele limpa, evitar saunas, suspender anticoagulantes e evitar sol.",
      },
      {
        step: 3,
        title: "Aplicação",
        description:
          "Procedimento realizado com técnica apurada. Intervalo de 7-20 dias para áreas localizadas ou semanal para aplicação sistêmica.",
      },
      {
        step: 4,
        title: "Acompanhamento",
        description:
          "Acompanhamento dos resultados e ajustes no protocolo conforme evolução do tratamento.",
      },
    ],
    duration: "3-6 sessões para resultados visíveis",
    price: "Consulte valores",
    frequency: "7-20 dias (localizada) ou semanal (sistêmica)",
  },
  {
    id: "harmonizacao-glutea",
    icon: "Sparkles",
    title: "Harmonização Glútea",
    description:
      "Remodelagem, harmonização e aumento do volume dos glúteos. Correção de assimetrias, irregularidades e depressões através de técnicas avançadas.",
    benefits: ["Remodelagem dos glúteos", "Correção de assimetrias", "Aumento de volume", "Tratamento de celulite"],
    featured: true,
    fullDescription:
      "A harmonização glútea tem como finalidade remodelar, harmonizar e aumentar o volume dos glúteos. Pode ser usada para corrigir assimetrias, irregularidades e depressões nos glúteos e nas laterais das nádegas, como a depressão trocantérica. Primeiramente, identificamos e mapeamos todas as disfunções estéticas da região (celulite, flacidez, volume ou gordura localizada). Após esse mapeamento, escolhemos o protocolo de tratamento mais adequado, que pode incluir bioestimuladores de colágeno, preenchimento com ácido hialurônico ou subcision (subcisão) para tratamento de celulites.",
    detailedBenefits: [
      {
        title: "Bioestimuladores de Colágeno",
        description:
          "Aplicação minimamente invasiva com anestesia local, variando a quantidade de acordo com as necessidades de cada pessoa para melhorar volume e contorno.",
      },
      {
        title: "Preenchimento com Ácido Hialurônico",
        description:
          "Forma segura, rápida e eficiente para harmonização de glúteos, melhorando volume e contorno. Deixa o bumbum mais empinado, com formato mais arredondado, atenuando celulites e corrigindo depressões.",
      },
      {
        title: "Subcision (Subcisão)",
        description:
          "Procedimento para tratamento de celulites onde é inserida uma agulha bisturizada que corta o tecido fibroso, redistribuindo adipócitos e estimulando formação de novo tecido conjuntivo.",
      },
      {
        title: "Resultados Harmoniosos",
        description:
          "Correção de assimetrias pontuais, equilíbrio na parte superior ou inferior do glúteo, resultando em formato mais arredondado e natural.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação e Mapeamento",
        description:
          "Identificação e mapeamento de todas as disfunções estéticas da região (celulite, flacidez, volume, gordura localizada).",
      },
      {
        step: 2,
        title: "Planejamento do Protocolo",
        description:
          "Escolha do protocolo de tratamento mais adequado: bioestimuladores, ácido hialurônico ou subcision, conforme suas necessidades.",
      },
      {
        step: 3,
        title: "Aplicação",
        description:
          "Realização do procedimento escolhido com técnica apurada e produtos de alta qualidade.",
      },
      {
        step: 4,
        title: "Repouso e Acompanhamento",
        description:
          "Repouso de até 7 dias após o tratamento e acompanhamento para garantir resultados ideais.",
      },
    ],
    duration: "Variável conforme protocolo escolhido",
    price: "Consulte valores",
    frequency: "Conforme plano de tratamento",
  },
  {
    id: "skin-booster",
    icon: "Sparkles",
    title: "Skin Booster",
    description:
      "Procedimento através de pequenas injeções de ácido hialurônico para hidratação profunda, firmeza, brilho e vigor da pele de forma natural.",
    benefits: ["Hidratação profunda", "Firmeza e elasticidade", "Melhora de rugas finas", "Resultado natural"],
    fullDescription:
      "Procedimento realizado através de pequenas injeções de um 'booster' de produtos especiais à base de ácido hialurônico, conseguimos o resultado de uma pele hidratada, firme, com brilho e vigor, e acima de tudo, de forma natural. O ácido hialurônico tem o propósito de atrair moléculas de água, formando um reservatório hídrico. Dessa forma promove a hidratação da pele com melhora da maciez e viço. Além disso, promove reestruturação da derme tratada, dando maior firmeza, elasticidade e melhora das rugas finas.",
    detailedBenefits: [
      {
        title: "Hidratação Potente",
        description:
          "Ácido hialurônico atrai moléculas de água, formando um reservatório hídrico que promove hidratação profunda da pele.",
      },
      {
        title: "Reestruturação da Derme",
        description:
          "Promove maior firmeza, elasticidade e melhora das rugas finas através da reestruturação do tecido tratado.",
      },
      {
        title: "Aplicação Versátil",
        description:
          "Pode ser aplicado nos lábios, ao redor dos olhos, bochechas, pescoço, colo, códigos de barra, dorso das mãos, cicatrizes de acne e qualquer pele que precise de hidratação potente.",
      },
      {
        title: "Associação com Outros Tratamentos",
        description:
          "Costumo associar com Toxina Botulínica, Bioestimulador de colágeno e skin care para resultados ainda melhores.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação da Pele",
        description:
          "Análise das áreas que necessitam de hidratação e definição do protocolo de aplicação.",
      },
      {
        step: 2,
        title: "Aplicação",
        description:
          "Realização do procedimento através de pequenas injeções de ácido hialurônico nas áreas definidas.",
      },
      {
        step: 3,
        title: "Skin Care em Casa",
        description:
          "Orientações sobre cuidados diários com produtos específicos para potencializar os resultados.",
      },
      {
        step: 4,
        title: "Manutenção",
        description:
          "Indicação de em média três sessões, com resultados visíveis em cerca de trinta dias.",
      },
    ],
    duration: "30 dias para resultados visíveis",
    price: "Consulte valores",
    frequency: "Média de 3 sessões",
  },
  {
    id: "toxina-botulinica",
    icon: "Sparkles",
    title: "Toxina Botulínica",
    description:
      "Tratamento injetável para eliminar ou reduzir rugas faciais, concedendo aspecto mais jovial e fresco ao rosto.",
    benefits: ["Eliminação de rugas", "Aspecto mais jovial", "Resultado rápido", "Tratamento seguro"],
    fullDescription:
      "A toxina botulínica, por vezes referida como 'botox', é um composto injetável que na medicina estética permite eliminar ou reduzir as rugas faciais, concedendo um aspecto mais jovial e fresco ao rosto, otimizando a beleza do paciente. Pode ser usada para tratar as rugas de expressão na região superior do rosto (testa, glabela, pés de galinha), elevação da cauda da sobrancelha, tratamento das 'bunny lines' (rugas no nariz), sorriso gengival e bandas platismais (cordões na região do pescoço). O efeito é paralisar ou relaxar os músculos sobre os quais atua, paralisando a contração muscular.",
    detailedBenefits: [
      {
        title: "Tratamento de Rugas de Expressão",
        description:
          "Elimina ou reduz rugas na testa, glabela (entre sobrancelhas) e pés de galinha de forma rápida e segura.",
      },
      {
        title: "Harmonização Facial",
        description:
          "Elevação da cauda da sobrancelha, tratamento de rugas no nariz e correção de sorriso gengival.",
      },
      {
        title: "Tratamento de Pescoço",
        description:
          "Tratamento das bandas platismais (cordões na região do pescoço) para aspecto mais jovial.",
      },
      {
        title: "Resultado Rápido",
        description:
          "O resultado chega em 3-15 dias após a primeira aplicação, trazendo mais autoestima e deixando a pele mais viçosa.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação e Planejamento",
        description:
          "Análise das áreas a serem tratadas e definição da quantidade e pontos de aplicação.",
      },
      {
        step: 2,
        title: "Preparação",
        description:
          "Orientações sobre cuidados antes da aplicação: evitar sol, não abaixar cabeça por 4h, não fazer exercícios.",
      },
      {
        step: 3,
        title: "Aplicação",
        description:
          "Realização do procedimento com técnica apurada, aplicando a toxina nos pontos definidos.",
      },
      {
        step: 4,
        title: "Avaliação e Retoque",
        description:
          "Após 15 dias, você tem direito de voltar para avaliação e, se necessário, fazer correções e retoques dos pontos que não tiveram adesão.",
      },
    ],
    duration: "3-4 meses de duração",
    price: "Consulte valores",
    frequency: "A cada 3-4 meses",
  },
  {
    id: "bioestimulador-colageno",
    icon: "Sparkles",
    title: "Bioestimulador de Colágeno",
    description:
      "Substâncias injetáveis que estimulam a produção de colágeno, auxiliando no rejuvenescimento e melhora da flacidez da pele (facial e corporal).",
    benefits: ["Estimula produção de colágeno", "Rejuvenescimento", "Melhora da flacidez", "Efeito duradouro"],
    fullDescription:
      "São substâncias injetáveis que estimulam a produção de colágeno, auxiliando no rejuvenescimento e melhora da flacidez da pele. Recomendo para todo ser humano, quanto mais cuidado com a pele, mais rejuvenescimento teremos. Podem suavizar a textura da pele melhorando o aspecto celulítico. Os produtos mais comumente utilizados são Ácido Poli-L-Láctico, Hidroxiapatita de Cálcio e Policaprolactona. É um ativo biocompatível, por isso não gera rejeição.",
    detailedBenefits: [
      {
        title: "Grande Melhora na Flacidez",
        description:
          "Diminui a flacidez, previne e trata a aparência de rugas, estimula o colágeno e melhora a qualidade, firmeza e elasticidade da pele.",
      },
      {
        title: "Efeito Preenchedor Duradouro",
        description:
          "Pode ter efeito preenchedor com maior duração em comparação ao ácido hialurônico, ainda assim sendo um material reabsorvível com efeito temporário.",
      },
      {
        title: "Aplicação Versátil",
        description:
          "Pode ser aplicado no rosto, pescoço, braço, coxa, joelho e glúteos, conforme necessidade.",
      },
      {
        title: "Manutenção",
        description:
          "Sua manutenção é de 4-6 meses, e depois até anual, proporcionando resultados duradouros.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação",
        description:
          "Análise das áreas que necessitam de tratamento e escolha do bioestimulador mais adequado.",
      },
      {
        step: 2,
        title: "Planejamento",
        description:
          "Definição da quantidade e pontos de aplicação conforme suas necessidades individuais.",
      },
      {
        step: 3,
        title: "Aplicação",
        description:
          "Realização do procedimento com técnica apurada, aplicando o bioestimulador nas áreas definidas.",
      },
      {
        step: 4,
        title: "Acompanhamento",
        description:
          "Acompanhamento dos resultados e agendamento de manutenção conforme protocolo (4-6 meses ou anual).",
      },
    ],
    duration: "Efeito de 4-6 meses a 1 ano",
    price: "Consulte valores",
    frequency: "Manutenção de 4-6 meses ou anual",
  },
  {
    id: "tratamento-capilar",
    icon: "Sparkles",
    title: "Tratamento Capilar",
    description:
      "Tratamento completo para força, volume, redução de queda e estímulo do nascimento capilar através de intradermoterapia e prescrições personalizadas.",
    benefits: ["Força e volume", "Redução de queda", "Estímulo de nascimento", "Tratamento completo"],
    fullDescription:
      "Podemos usar a intradermoterapia com combinação de ativos que auxiliam na força, volume, redução de queda e estímulo do nascimento. O método é realizado através de agulhas finas, onde apenas a ponta da agulha atinge o couro cabeludo. Além da intradermoterapia, existe a prescrição de manipulados com vitaminas, minerais e aminoácidos que auxiliam no mesmo objetivo de saúde capilar. E o método tópico, onde faço a prescrição de fórmulas para aplicar na região em casa. A combinação trará resultados fantásticos e satisfatórios.",
    detailedBenefits: [
      {
        title: "Intradermoterapia Capilar",
        description:
          "Aplicação através de agulhas finas no couro cabeludo com combinação de ativos específicos para força, volume e redução de queda.",
      },
      {
        title: "Prescrição de Manipulados",
        description:
          "Fórmulas manipuladas com vitaminas, minerais e aminoácidos para complementar o tratamento e otimizar resultados.",
      },
      {
        title: "Método Tópico",
        description:
          "Prescrição de fórmulas para aplicação em casa, facilitando o tratamento diário e potencializando os resultados.",
      },
      {
        title: "Tratamento Completo",
        description:
          "A combinação de intradermoterapia, manipulados e método tópico traz resultados fantásticos e satisfatórios.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Avaliação Capilar",
        description:
          "Análise do estado atual do cabelo e couro cabeludo para identificar necessidades específicas.",
      },
      {
        step: 2,
        title: "Planejamento do Tratamento",
        description:
          "Definição do protocolo completo: intradermoterapia, manipulados e fórmulas tópicas.",
      },
      {
        step: 3,
        title: "Aplicação e Prescrições",
        description:
          "Início das sessões de intradermoterapia e entrega das prescrições de manipulados e fórmulas tópicas.",
      },
      {
        step: 4,
        title: "Acompanhamento",
        description:
          "Acompanhamento da evolução e ajustes no protocolo conforme resultados. Indicado realizar em média 5-8 sessões.",
      },
    ],
    duration: "5-8 sessões em média",
    price: "Consulte valores",
    frequency: "Conforme protocolo estabelecido",
  },
];
