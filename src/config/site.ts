// Configuração centralizada do site
// Atualize aqui para mudar informações em todo o site

export const siteConfig = {
  // Informações da marca
  brand: {
    name: "Clínica Renata Bastos",
    fullName: "Clínica Renata Bastos - Nutrição Ortomolecular & Estética Avançada",
    tagline: "Transformando vidas através da Nutrição Ortomolecular e Estética Avançada. Localizada no coração da Tijuca, com protocolos personalizados para transformar seus sonhos em realidade.",
  },

  // Informações da profissional
  professional: {
    name: "Renata Bastos",
    title: "Nutricionista Ortomolecular & Biomédica Esteta",
    crn: "CRN 4 15100141",
    experience: "14+", // Formada em 2010
    patients: "500+",
    satisfaction: "98%",
    formation: {
      nutrition: "Nutricionista formada pela UVA em 2010",
      specializations: [
        "Pós graduada em Nutrição Ortomolecular - Nutmed",
        "Pós graduada em Nutrição Esportiva Funcional - VP",
        "Pós graduanda em Nutrição Clínica Funcional - VP",
        "Graduada em Biomedicina - UNIGAMA",
      ],
    },
  },

  // Contato
  contact: {
    phone: "(21) 96727-3291",
    phoneLink: "tel:+5521967273291",
    whatsapp: "5521967273291", // Formato: código do país + DDD + número (sem +, parênteses, espaços ou hífens)
    email: "renatabastosnutri@gmail.com",
    emailLink: "mailto:renatabastosnutri@gmail.com",
    address: "Tijuca, Rio de Janeiro - RJ (Frente ao Shopping Tijuca)",
    addressSecondary: "Barra da Tijuca, Rio de Janeiro - RJ",
    addressLink: "https://maps.google.com/?q=Shopping+Tijuca,+Rio+de+Janeiro",
    hours: "Manhã: 7h às 14h | Tarde: 14h às 20h",
    hoursNote: "Horários flexíveis, podendo ser remanejados",
  },

  // Redes sociais
  social: {
    instagram: {
      url: "https://www.instagram.com/renatinhabastos/",
      label: "Instagram",
    },
    facebook: {
      url: "https://www.facebook.com/renatinha.bastos.1",
      label: "Facebook",
    },
    linkedin: {
      url: "#", // LinkedIn da Renata (se tiver)
      label: "LinkedIn",
    },
    youtube: {
      url: "#", // YouTube da Renata (se tiver)
      label: "YouTube",
    },
  },

  // Mensagens padrão para WhatsApp
  whatsappMessages: {
    default: "Olá! Gostaria de agendar uma consulta de Nutrição Ortomolecular ou procedimento estético com Renata Bastos.",
    service: (serviceName: string) => `Olá! Gostaria de saber mais sobre o serviço: ${serviceName}`,
    appointment: "Olá! Gostaria de agendar uma consulta com a Renata Bastos.",
  },

  // SEO
  seo: {
    title: "Nutricionista Ortomolecular & Biomédica Esteta - Renata Bastos | Tijuca, Rio de Janeiro",
    description: "Nutricionista Ortomolecular e Biomédica Esteta na Tijuca, Rio de Janeiro. Consultas presenciais (Tijuca e Barra) e online. Emagrecimento saudável, nutrição clínica, estética avançada, intradermoterapia, harmonização glútea. Mais de 500 pacientes transformados.",
    keywords: "nutricionista ortomolecular, biomédica esteta, nutrição clínica, emagrecimento saudável, consulta nutricional online, estética avançada, tijuca rio de janeiro, intradermoterapia, harmonização glútea, skin booster, toxina botulínica, bioestimulador de colágeno",
  },
};

