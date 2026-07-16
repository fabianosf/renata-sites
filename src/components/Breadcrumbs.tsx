import { useTranslation } from "react-i18next";
import { Link } from "@/components/LocalizedLink";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const { t } = useTranslation();

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-primary transition-smooth"
            aria-label={t("common.breadcrumbs.home")}
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">{t("common.breadcrumbs.home")}</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
            {item.to ? (
              <Link
                to={item.to}
                className="hover:text-primary transition-smooth"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
