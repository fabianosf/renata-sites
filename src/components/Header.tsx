import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Calendar, ChevronDown } from "lucide-react";
import { Link } from "@/components/LocalizedLink";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { siteConfig } from "@/config/site";

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Grupos de navegação: "Sobre", "Tratamentos" e "Resultados" viram dropdowns
  // no desktop para não sobrecarregar a barra horizontal (10 páginas -> 5
  // pontos de entrada + idioma + tema + CTA).
  const navGroups = [
    {
      label: t("common.nav.about"),
      items: [
        { label: t("common.nav.clinica"), to: "/a-clinica" },
        { label: t("common.nav.draRenata"), to: "/dra-renata" },
      ],
    },
    {
      label: t("common.nav.treatments"),
      items: [
        { label: t("common.nav.metodoRB"), to: "/metodo-rb" },
        { label: t("common.nav.facial"), to: "/rejuvenescimento-facial" },
        { label: t("common.nav.corporal"), to: "/estetica-corporal" },
        { label: t("common.nav.nutrition"), to: "/nutricao-estrategica" },
      ],
    },
    {
      label: t("common.nav.results"),
      items: [
        { label: t("common.nav.beforeAfter"), to: "/antes-e-depois" },
        { label: t("common.nav.stories"), to: "/historias-de-transformacao" },
      ],
    },
  ];

  const handleScheduleClick = () => {
    const message = encodeURIComponent(siteConfig.whatsappMessages.appointment);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth backdrop-blur-lg ${
        isScrolled
          ? "bg-background/95 shadow-elevated border-b border-border"
          : "bg-background/80 shadow-subtle"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation — só a partir de 1280px (xl), antes disso vira hambúrguer */}
          <NavigationMenu className="hidden xl:flex" delayDuration={80}>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="inline-flex items-center px-3 py-2 text-[13px] tracking-wide text-foreground hover:text-primary transition-smooth font-medium whitespace-nowrap"
                >
                  {t("common.nav.home")}
                </Link>
              </NavigationMenuItem>

              {navGroups.map((group) => (
                <NavigationMenuItem key={group.label}>
                  <NavigationMenuTrigger className="h-auto bg-transparent px-3 py-2 text-[13px] tracking-wide font-medium text-foreground hover:bg-transparent hover:text-primary focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary">
                    {group.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="min-w-[220px] p-2">
                      {group.items.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            className="block rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors whitespace-nowrap"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <Link
                  to="/contato"
                  className="inline-flex items-center px-3 py-2 text-[13px] tracking-wide text-foreground hover:text-primary transition-smooth font-medium whitespace-nowrap"
                >
                  {t("common.nav.contact")}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Idioma e CTA — sempre visíveis, compactos (ícones) */}
          <div className="hidden xl:flex items-center gap-1">
            <LanguageSwitcher />
            <Button
              className="ml-1 shadow-glow hover:shadow-elevated hover:scale-[1.015] transition-all duration-300"
              size="sm"
              onClick={handleScheduleClick}
            >
              <Calendar className="mr-2 h-4 w-4" />
              {t("common.cta.scheduleConsultation")}
            </Button>
          </div>

          {/* Abaixo de 1280px: idioma compacto e menu off-canvas */}
          <div className="flex items-center gap-1 xl:hidden">
            <LanguageSwitcher />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-foreground hover:text-primary transition-smooth p-2"
                  aria-label="Menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[380px] flex flex-col gap-0 p-0">
                <SheetHeader className="p-6 pb-2 text-left">
                  <SheetTitle className="font-display text-xl">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-1">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-base font-medium text-foreground hover:text-primary transition-smooth"
                  >
                    {t("common.nav.home")}
                  </Link>

                  <div className="divider-line my-2" />

                  {navGroups.map((group) => (
                    <details key={group.label} className="group/details">
                      <summary className="flex items-center justify-between py-3 text-base font-medium text-foreground cursor-pointer list-none">
                        {group.label}
                        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open/details:rotate-180" />
                      </summary>
                      <div className="flex flex-col gap-1 pb-2 pl-3">
                        {group.items.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="py-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ))}

                  <div className="divider-line my-2" />

                  <Link
                    to="/contato"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-base font-medium text-foreground hover:text-primary transition-smooth"
                  >
                    {t("common.nav.contact")}
                  </Link>
                </nav>

                <div className="p-6 pt-2 border-t border-border">
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => {
                      handleScheduleClick();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    {t("common.cta.scheduleConsultation")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
