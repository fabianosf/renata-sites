import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { Link } from "@/components/LocalizedLink";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
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

  const navItems = [
    { label: t("common.nav.home"), to: "/" },
    { label: t("common.nav.clinica"), to: "/a-clinica" },
    { label: t("common.nav.draRenata"), to: "/dra-renata" },
    { label: t("common.nav.metodoRB"), to: "/metodo-rb" },
    { label: t("common.nav.facial"), to: "/rejuvenescimento-facial" },
    { label: t("common.nav.corporal"), to: "/estetica-corporal" },
    { label: t("common.nav.nutrition"), to: "/nutricao-estrategica" },
    { label: t("common.nav.beforeAfter"), to: "/antes-e-depois" },
    { label: t("common.nav.stories"), to: "/historias-de-transformacao" },
    { label: t("common.nav.contact"), to: "/contato" },
  ];

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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-foreground hover:text-primary transition-smooth font-medium cursor-pointer relative group whitespace-nowrap text-sm xl:text-base"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            {/* CTA Button */}
            <Button
              className="shadow-glow hover:shadow-elevated hover:scale-105 transition-all duration-300"
              size="lg"
              onClick={() => {
                const message = encodeURIComponent(siteConfig.whatsappMessages.appointment);
                window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              {t("common.cta.scheduleConsultation")}
            </Button>
          </div>

          {/* Mobile: idioma, tema e menu */}
          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              className="text-foreground hover:text-primary transition-smooth p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2 cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="mt-4"
                size="lg"
                onClick={() => {
                  const message = encodeURIComponent(siteConfig.whatsappMessages.appointment);
                  window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                {t("common.cta.scheduleConsultation")}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
