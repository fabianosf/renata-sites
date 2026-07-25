// Configuração centralizada do site
// Atualize aqui para mudar informações em todo o site

export const siteConfig = {
  // Informações da marca
  brand: {
    name: "Clínica Renata Bastos",
    fullName: "Clínica Renata Bastos - Harmonização Facial & Estética Integrativa",
    tagline: "Referência em harmonização facial e estética integrativa. Protocolos personalizados que tratam o envelhecimento de forma estratégica, natural e individualizada.",
  },

  // Informações da profissional
  professional: {
    name: "Dra. Renata Bastos",
    title: "Biomédica Esteta & Nutricionista",
    crn: "CRN 4 15100141",
    crbm: "CRBM 60773",
    experience: "14+",
    patients: "2000+",
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
    address: "Ed Corporate - Eng Ednaldo Cravo Peixoto, 105/1020 - Tijuca, Rio de Janeiro - RJ (na rua do estacionamento do Shopping Tijuca)",
    addressSecondary: "Barra da Tijuca, Rio de Janeiro - RJ",
    addressNote: "Estacionamento rotativo no local",
    addressLink: "https://maps.google.com/?q=Eng+Ednaldo+Cravo+Peixoto+105,+Tijuca,+Rio+de+Janeiro",
    hours: "10h às 20h",
    hoursNote: "Horários flexíveis, podendo ser remanejados",
  },

  // Redes sociais
  social: {
    instagram: {
      url: "https://www.instagram.com/drarenatabastos_/",
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
    title: "Harmonização Facial & Estética Integrativa - Dra. Renata Bastos | Tijuca, Rio de Janeiro",
    description: "Biomédica Esteta e Nutricionista especialista em rejuvenescimento facial e estética integrativa na Tijuca, Rio de Janeiro. Bioestimuladores de colágeno, toxina botulínica, preenchimento, fios, skin booster e nutrição estratégica. Métodos Exclusivos RB para resultados naturais e duradouros.",
    keywords: "harmonização facial tijuca, biomédica esteta rio de janeiro, rejuvenescimento facial, bioestimulador de colágeno, toxina botulínica, preenchimento ácido hialurônico, fios de sustentação, skin booster, nutricionista ortomolecular, estética integrativa, dra renata bastos",
  },
};

