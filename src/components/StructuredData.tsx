import { useEffect, useMemo } from "react";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/servicesData";

interface StructuredDataProps {
  type?: "home" | "service" | "article" | "about";
  serviceId?: string;
  article?: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified: string;
    author: string;
  };
}

const StructuredData = ({ type = "home", serviceId, article }: StructuredDataProps) => {
  // LocalBusiness Schema (sempre presente)
  const localBusinessSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://clinicarenatabastos.com.br/#organization",
    name: siteConfig.brand.name,
    alternateName: siteConfig.brand.fullName,
    description: siteConfig.seo.description,
    url: "https://clinicarenatabastos.com.br",
    logo: "https://clinicarenatabastos.com.br/logo.png",
    image: "https://clinicarenatabastos.com.br/og-image.jpg",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Tijuca",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-22.9123",
      longitude: "-43.2345",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Rio de Janeiro",
    },
    sameAs: [
      siteConfig.social.instagram.url,
      siteConfig.social.facebook.url,
    ].filter(url => url !== "#"),
  }), []);

  // Person Schema (Renata Bastos)
  const personSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://clinicarenatabastos.com.br/#person",
    name: siteConfig.professional.name,
    jobTitle: siteConfig.professional.title,
    description: `${siteConfig.professional.name} - ${siteConfig.professional.title} com ${siteConfig.professional.experience} anos de experiência. Especializada em Nutrição Ortomolecular e Estética Avançada.`,
    image: "https://clinicarenatabastos.com.br/renata-avatar.jpg",
    url: "https://clinicarenatabastos.com.br",
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tijuca",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "UVA - Universidade Veiga de Almeida",
      },
      {
        "@type": "EducationalOrganization",
        name: "UNIGAMA",
      },
    ],
    knowsAbout: [
      "Nutrição Ortomolecular",
      "Biomedicina Estética",
      "Nutrição Clínica",
      "Nutrição Esportiva",
      "Estética Avançada",
    ],
    sameAs: [
      siteConfig.social.instagram.url,
      siteConfig.social.facebook.url,
    ].filter(url => url !== "#"),
  }), []);

  // Service Schema (se for página de serviço)
  const serviceSchema = useMemo(() => {
    if (type === "service" && serviceId) {
      const service = servicesData.find(s => s.id === serviceId);
      if (service) {
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `https://clinicarenatabastos.com.br/servico/${serviceId}`,
          name: service.title,
          description: service.fullDescription,
          provider: {
            "@id": "https://clinicarenatabastos.com.br/#organization",
          },
          areaServed: {
            "@type": "City",
            name: "Rio de Janeiro",
          },
          serviceType: service.title,
          offers: {
            "@type": "Offer",
            price: service.price,
            priceCurrency: "BRL",
          },
        };
      }
    }
    return null;
  }, [type, serviceId]);

  // Article Schema (se for post do blog)
  const articleSchema = useMemo(() => {
    if (type === "article" && article) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: article.image,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        author: {
          "@type": "Person",
          "@id": "https://clinicarenatabastos.com.br/#person",
          name: article.author,
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://clinicarenatabastos.com.br/#organization",
          name: siteConfig.brand.name,
          logo: {
            "@type": "ImageObject",
            url: "https://clinicarenatabastos.com.br/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://clinicarenatabastos.com.br/blog/${article.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`,
        },
        articleSection: article.title.split(" ")[0] || "Nutrição",
        keywords: article.title,
        inLanguage: "pt-BR",
      };
    }
    return null;
  }, [type, article]);

  // BreadcrumbList Schema
  const breadcrumbSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://clinicarenatabastos.com.br",
      },
      ...(type === "service" && serviceId
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: "Serviços",
              item: "https://clinicarenatabastos.com.br/servicos",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: servicesData.find(s => s.id === serviceId)?.title || "Serviço",
              item: `https://clinicarenatabastos.com.br/servico/${serviceId}`,
            },
          ]
        : []),
      ...(type === "article" && article
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://clinicarenatabastos.com.br/blog",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: article.title,
              item: `https://clinicarenatabastos.com.br/blog/${article.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`,
            },
          ]
        : []),
    ],
  }), [type, serviceId, article]);

  useEffect(() => {
    try {
      const scripts: HTMLScriptElement[] = [];

      // Função para criar e adicionar script
      const addScript = (schema: object | null, id: string) => {
        if (!schema) return;
        
        try {
          // Remove script anterior se existir
          const existing = document.getElementById(id);
          if (existing && existing.parentNode) {
            existing.parentNode.removeChild(existing);
          }

          const script = document.createElement("script");
          script.type = "application/ld+json";
          script.id = id;
          script.textContent = JSON.stringify(schema);
          if (document.head) {
            document.head.appendChild(script);
            scripts.push(script);
          }
        } catch (error) {
          console.warn(`Error adding schema script ${id}:`, error);
        }
      };

      addScript(localBusinessSchema, "schema-localbusiness");
      addScript(personSchema, "schema-person");
      addScript(serviceSchema, "schema-service");
      addScript(articleSchema, "schema-article");
      addScript(breadcrumbSchema, "schema-breadcrumb");

      // Cleanup
      return () => {
        scripts.forEach(script => {
          try {
            if (script.parentNode) {
              script.parentNode.removeChild(script);
            }
          } catch (error) {
            // Ignore cleanup errors
          }
        });
      };
    } catch (error) {
      console.error("Error in StructuredData:", error);
    }
  }, [localBusinessSchema, personSchema, serviceSchema, articleSchema, breadcrumbSchema]);

  return null;
};

export default StructuredData;
