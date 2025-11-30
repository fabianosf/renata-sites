import { useEffect } from "react";
import { siteConfig } from "@/config/site";

const FAQSchema = () => {
  useEffect(() => {
    try {
      const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Onde fica localizada a Clínica Renata Bastos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `A Clínica Renata Bastos está localizada na Tijuca, Rio de Janeiro, em frente ao Shopping Tijuca. Também oferecemos atendimento na Barra da Tijuca e consultas online para todo o Brasil.`,
        },
      },
      {
        "@type": "Question",
        name: "Quais são os horários de atendimento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Atendemos de segunda a sexta-feira das 7h às 20h, com horários flexíveis que podem ser remanejados conforme sua necessidade.`,
        },
      },
      {
        "@type": "Question",
        name: "A consulta pode ser feita online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Sim! Oferecemos consultas nutricionais online com a mesma qualidade da consulta presencial. Ideal para quem tem rotina agitada ou mora em outras cidades.`,
        },
      },
      {
        "@type": "Question",
        name: "O que é Nutrição Ortomolecular?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `A Nutrição Ortomolecular utiliza nutrientes em doses otimizadas para restaurar o equilíbrio bioquímico do organismo, prevenir doenças, melhorar a saúde celular e promover longevidade com qualidade de vida.`,
        },
      },
      {
        "@type": "Question",
        name: "Quais procedimentos estéticos são oferecidos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Oferecemos diversos procedimentos estéticos avançados: Intradermoterapia, Harmonização Glútea, Skin Booster, Toxina Botulínica, Bioestimulador de Colágeno e Tratamento Capilar. Todos realizados com técnica apurada e produtos de alta qualidade.`,
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o plano alimentar personalizado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Juntos montamos um cardápio respeitando sua preferência alimentar, tempo hábil para realizar as refeições e opções variadas. Você recebe um app com todo conteúdo da consulta, onde pode fazer o registro do diário alimentar. O plano é entregue em até 3 dias úteis após a consulta.`,
        },
      },
      {
        "@type": "Question",
        name: "Qual a formação da Renata Bastos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Renata Bastos é Nutricionista formada pela UVA em 2010, pós graduada em Nutrição Ortomolecular (Nutmed), Nutrição Esportiva Funcional (VP), pós graduanda em Nutrição Clínica Funcional (VP) e graduada em Biomedicina pela UNIGAMA.`,
        },
      },
    ],
      };

      // Remove script anterior se existir
      const existing = document.getElementById("schema-faq");
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "schema-faq";
      script.textContent = JSON.stringify(faqSchema);
      if (document.head) {
        document.head.appendChild(script);
      }

      // Cleanup
      return () => {
        try {
          const scriptToRemove = document.getElementById("schema-faq");
          if (scriptToRemove && scriptToRemove.parentNode) {
            scriptToRemove.parentNode.removeChild(scriptToRemove);
          }
        } catch (error) {
          // Ignore cleanup errors
        }
      };
    } catch (error) {
      console.error("Error in FAQSchema:", error);
    }
  }, []);

  return null;
};

export default FAQSchema;

