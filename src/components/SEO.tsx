import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { SUPPORTED_LANGUAGES } from "@/i18n";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  /** Caminho canônico (sem prefixo de idioma), ex: "/a-clinica". Use no lugar de `url`. */
  path?: string;
  /** Mantido por compatibilidade; se informado, tem prioridade sobre `path`. */
  url?: string;
  type?: "website" | "article" | "service";
}

const BASE_URL = "https://clinicarenatabastos.com.br";

const OG_LOCALE: Record<string, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

const HREFLANG: Record<string, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

const SEO = ({ title, description, keywords, image, path, url, type = "website" }: SEOProps) => {
  const { lang } = useParams();
  const currentLang = lang && (lang === "en" || lang === "es") ? lang : "pt";

  const fullTitle = title ? `${title} | ${siteConfig.brand.name}` : siteConfig.seo.title;
  const fullDescription = description || siteConfig.seo.description;
  const fullKeywords = keywords || siteConfig.seo.keywords;
  const fullImage = image || `${BASE_URL}/og-image.jpg`;

  const canonicalPath = path ?? (url ? url.replace(BASE_URL, "") : "/");
  const langPrefix = (code: string) => (code === "pt" ? "" : `/${code}`);
  const urlFor = (code: string) =>
    `${BASE_URL}${langPrefix(code)}${canonicalPath === "/" ? "" : canonicalPath}` || BASE_URL;
  const fullUrl = url || urlFor(currentLang) || BASE_URL;

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = HREFLANG[currentLang];

    const updateMetaTag = (name: string, content: string, attribute = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", fullDescription);
    updateMetaTag("keywords", fullKeywords);
    updateMetaTag("author", siteConfig.professional.name);

    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", fullDescription, "property");
    updateMetaTag("og:image", fullImage, "property");
    updateMetaTag("og:url", fullUrl, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:locale", OG_LOCALE[currentLang], "property");

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", fullDescription);
    updateMetaTag("twitter:image", fullImage);

    // Canonical
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // hreflang alternates (pt-BR, en, es, x-default)
    document.querySelectorAll("link[hreflang]").forEach((el) => el.remove());
    const alternates: { hreflang: string; href: string }[] = [
      ...SUPPORTED_LANGUAGES.map((code) => ({ hreflang: HREFLANG[code], href: urlFor(code) })),
      { hreflang: "x-default", href: urlFor("pt") },
    ];
    alternates.forEach(({ hreflang, href }) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", hreflang);
      link.setAttribute("href", href);
      document.head.appendChild(link);
    });

    return () => {
      document.querySelectorAll("link[hreflang]").forEach((el) => el.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullTitle, fullDescription, fullKeywords, fullImage, fullUrl, type, currentLang, canonicalPath]);

  return null;
};

export default SEO;
