import { Facebook, Instagram, Linkedin, Phone, MapPin, ExternalLink, MessageCircle, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "@/components/LocalizedLink";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
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

  const socialLinks = [
    { icon: Instagram, href: siteConfig.social.instagram.url, label: siteConfig.social.instagram.label },
    { icon: Facebook, href: siteConfig.social.facebook.url, label: siteConfig.social.facebook.label },
    { icon: Mail, href: "mailto:renatabastosnutri@gmail.com", label: "Email" },
    {
      icon: MessageCircle,
      href: `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessages.default)}`,
      label: "WhatsApp"
    },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <Logo className="mb-4" height="h-40 md:h-44" />
            <p className="text-background/80 mb-6 leading-relaxed">
              {t("common.footer.tagline")}
            </p>
            <p className="text-background/60 text-sm mb-4">
              {siteConfig.professional.name} - {siteConfig.professional.crn} | {siteConfig.professional.crbm}<br />
              {siteConfig.professional.title}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") && !social.href.startsWith("mailto:") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") && !social.href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-smooth group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-background group-hover:text-primary-foreground transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("common.footer.quickLinksTitle")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("common.footer.contactTitle")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <a
                  href={siteConfig.contact.addressLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  {siteConfig.contact.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <a
                  href={siteConfig.contact.phoneLink}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex flex-col gap-2">
                  <a
                    href={siteConfig.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-primary transition-smooth flex items-center gap-2"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                  <a
                    href={siteConfig.social.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-primary transition-smooth flex items-center gap-2"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Developer */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("common.footer.developedByTitle")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5521994078286"
                  className="text-background/80 hover:text-primary transition-smooth flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  (21) 99407-8286 ({t("common.footer.call")})
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5521994078286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-smooth flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("common.footer.talkWhatsapp")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fabianosfreitas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-smooth flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  {t("common.footer.portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="https://fabianosf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-smooth flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("common.footer.visitSite")}
                </a>
              </li>
              <li>
                <a
                  href="mailto:fabiano.freitas@gmail.com"
                  className="text-background/80 hover:text-primary transition-smooth flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {t("common.footer.sendEmail")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <p className="text-background/60 text-sm text-center">
            © {currentYear} {t("common.footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
