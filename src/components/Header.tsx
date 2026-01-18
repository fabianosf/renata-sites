import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";

const Header = () => {
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
    { label: "Início", to: "/inicio" },
    { label: "Sobre", to: "/sobre" },
    { label: "Serviços", to: "/servicos" },
    { label: "Preços", to: "/precos" },
    { label: "Depoimentos", to: "/depoimentos" },
    { label: "Blog", to: "/blog" },
    { label: "Contato", to: "/contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-foreground/95 shadow-lg border-b border-border/50" : "bg-foreground/95 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-background hover:text-primary transition-smooth font-medium cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            className="hidden lg:flex" 
            size="lg"
            onClick={() => {
              const message = encodeURIComponent(siteConfig.whatsappMessages.appointment);
              window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
            }}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Consulta
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-background"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-background hover:text-primary transition-smooth font-medium py-2 cursor-pointer"
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
                Agendar Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
