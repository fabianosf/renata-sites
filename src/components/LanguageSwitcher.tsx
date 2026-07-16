import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SUPPORTED_LANGUAGES, LANGUAGE_STORAGE_KEY, ensureLanguageLoaded } from "@/i18n";
import { useTranslation } from "react-i18next";

const LABELS: Record<string, string> = { pt: "PT", en: "EN", es: "ES" };
const PREFIXED_LANGS = SUPPORTED_LANGUAGES.filter((l) => l !== "pt") as string[];

const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
  const current = lang && PREFIXED_LANGS.includes(lang) ? lang : "pt";

  const switchTo = async (target: string) => {
    if (target === current) return;

    // Remove o prefixo de idioma atual do caminho, se houver
    let rest = location.pathname;
    if (current !== "pt") {
      rest = rest.replace(new RegExp(`^/${current}`), "");
    }
    rest = rest === "" ? "/" : rest;

    await ensureLanguageLoaded(target);
    await i18n.changeLanguage(target);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, target);

    const newPath = target === "pt" ? rest : `/${target}${rest === "/" ? "" : rest}`;
    navigate(`${newPath}${location.search}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`text-foreground hover:text-primary gap-1.5 ${className}`}
          aria-label="Selecionar idioma / Select language / Seleccionar idioma"
        >
          <Globe className="h-4 w-4" />
          {LABELS[current]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {SUPPORTED_LANGUAGES.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => switchTo(code)}
            className={code === current ? "font-semibold text-primary" : ""}
          >
            {LABELS[code]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
