import { useEffect, useState } from "react";
import { useParams, useLocation, Navigate, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  SUPPORTED_LANGUAGES,
  LANGUAGE_STORAGE_KEY,
  ensureLanguageLoaded,
  type SupportedLanguage,
} from "@/i18n";
import NotFound from "@/pages/NotFound";

const PREFIXED_LANGS = SUPPORTED_LANGUAGES.filter((l) => l !== "pt") as string[];

function detectBrowserLanguage(): SupportedLanguage {
  const nav = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "pt";
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("es")) return "es";
  return "pt";
}

/**
 * Layout de idioma: lê o segmento opcional ":lang" da URL (/en/..., /es/..., ou
 * nenhum prefixo = pt), carrega o bundle de tradução correspondente (lazy para
 * en/es) e mantém a preferência do usuário em localStorage.
 */
const LanguageLayout = () => {
  const { lang } = useParams();
  const location = useLocation();
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(false);
  const [redirectTo, setRedirectTo] = useState<string | null>(null);

  const isValidLang = !lang || PREFIXED_LANGS.includes(lang);

  useEffect(() => {
    if (!isValidLang) {
      setReady(true);
      return;
    }

    let cancelled = false;

    async function resolveLanguage() {
      let target: SupportedLanguage;

      if (lang === "en" || lang === "es") {
        target = lang;
      } else {
        // Sem prefixo na URL: respeita preferência salva, ou detecta o idioma
        // do navegador na primeira visita (fallback PT).
        const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (stored === "en" || stored === "es" || stored === "pt") {
          target = stored;
        } else {
          target = detectBrowserLanguage();
        }

        if (target !== "pt") {
          // Redireciona para a URL prefixada equivalente, preservando o restante do caminho.
          const rest = location.pathname === "/" ? "" : location.pathname;
          if (!cancelled) setRedirectTo(`/${target}${rest}${location.search}${location.hash}`);
          window.localStorage.setItem(LANGUAGE_STORAGE_KEY, target);
          return;
        }
      }

      await ensureLanguageLoaded(target);
      if (cancelled) return;

      await i18n.changeLanguage(target);
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, target);
      document.documentElement.lang = target === "pt" ? "pt-BR" : target;
      setReady(true);
    }

    resolveLanguage();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  if (!isValidLang) {
    return <NotFound />;
  }

  if (redirectTo) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!ready) {
    return null;
  }

  return <Outlet />;
};

export default LanguageLayout;
