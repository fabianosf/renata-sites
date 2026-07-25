import { forwardRef } from "react";
import { Link as RouterLink, LinkProps, useParams } from "react-router-dom";
import { SUPPORTED_LANGUAGES } from "@/i18n";

const PREFIXED_LANGS = SUPPORTED_LANGUAGES.filter((l) => l !== "pt");

/**
 * Substituto do <Link> do react-router que preserva o prefixo de idioma atual
 * (/en, /es) ao navegar para caminhos internos (ex: "/a-clinica" -> "/en/a-clinica").
 * Use sempre para links internos do site; para links fora do layout de idioma
 * (ex: /servico/:id) continue usando o Link padrão do react-router-dom.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...props }, ref) => {
  const { lang } = useParams();
  const prefix = lang && PREFIXED_LANGS.includes(lang as never) ? `/${lang}` : "";

  let target = to;
  if (typeof to === "string" && to.startsWith("/")) {
    target = to === "/" ? prefix || "/" : `${prefix}${to}`;
  }

  return <RouterLink ref={ref} to={target} {...props} />;
});

Link.displayName = "LocalizedLink";
