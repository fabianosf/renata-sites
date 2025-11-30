import { useEffect } from "react";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "service";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  article,
}: SEOProps) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.brand.name}`
    : siteConfig.seo.title;
  const fullDescription = description || siteConfig.seo.description;
  const fullKeywords = keywords || siteConfig.seo.keywords;
  const fullImage = image || "https://clinicarenatabastos.com.br/og-image.jpg";
  const fullUrl = url || "https://clinicarenatabastos.com.br";

  useEffect(() => {
    // Atualiza title
    document.title = fullTitle;

    // Atualiza ou cria meta tags
    const updateMetaTag = (name: string, content: string, attribute = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Meta tags básicas
    updateMetaTag("description", fullDescription);
    updateMetaTag("keywords", fullKeywords);
    updateMetaTag("author", siteConfig.professional.name);

    // Open Graph
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", fullDescription, "property");
    updateMetaTag("og:image", fullImage, "property");
    updateMetaTag("og:url", fullUrl, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:locale", "pt_BR", "property");

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", fullDescription);
    updateMetaTag("twitter:image", fullImage);

    // Article specific
    if (type === "article" && article) {
      if (article.publishedTime) {
        updateMetaTag("article:published_time", article.publishedTime, "property");
      }
      if (article.modifiedTime) {
        updateMetaTag("article:modified_time", article.modifiedTime, "property");
      }
      if (article.author) {
        updateMetaTag("article:author", article.author, "property");
      }
      if (article.section) {
        updateMetaTag("article:section", article.section, "property");
      }
    }

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [fullTitle, fullDescription, fullKeywords, fullImage, fullUrl, type, article]);

  return null;
};

export default SEO;

