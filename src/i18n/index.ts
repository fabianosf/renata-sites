import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./locales/pt.json";

export const SUPPORTED_LANGUAGES = ["pt", "en", "es"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_STORAGE_KEY = "preferredLang";

const lazyLoaders: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import("./locales/en.json"),
  es: () => import("./locales/es.json"),
};

/**
 * pt é carregado no bundle principal (idioma padrão). en/es só são baixados
 * (chunk separado via import dinâmico) quando o usuário realmente troca de idioma.
 */
export async function ensureLanguageLoaded(lang: string): Promise<void> {
  if (lang === "pt" || i18n.hasResourceBundle(lang, "translation")) return;
  const loader = lazyLoaders[lang];
  if (!loader) return;
  const mod = await loader();
  i18n.addResourceBundle(lang, "translation", mod.default, true, true);
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
    },
    lng: "pt",
    fallbackLng: "pt",
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage"],
      caches: [],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
