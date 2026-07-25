import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@/components/LocalizedLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={t("common.notFound.seo.title")}
        description={t("common.notFound.seo.description")}
        path="/404"
      />
      <Header />
      <main className="flex-1 flex items-center justify-center bg-muted p-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-8xl font-medium text-primary mb-4">404</h1>
            <h2 className="text-3xl font-medium mb-4">{t("common.notFound.title")}</h2>
            <p className="text-lg text-muted-foreground mb-2">
              {t("common.notFound.description")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("common.notFound.attemptedUrl")}{" "}
              <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                {t("common.notFound.backHome")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/servicos">
                <Search className="mr-2 h-5 w-5" />
                {t("common.notFound.seeServices")}
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t("common.notFound.goBack")}
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <Link
              to="/dra-renata"
              className="p-4 bg-background rounded-lg hover:shadow-elevated transition-smooth"
            >
              <h3 className="font-semibold mb-2">{t("common.notFound.draRenataTitle")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("common.notFound.draRenataDesc")}
              </p>
            </Link>
            <Link
              to="/servicos"
              className="p-4 bg-background rounded-lg hover:shadow-elevated transition-smooth"
            >
              <h3 className="font-semibold mb-2">{t("common.notFound.servicesTitle")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("common.notFound.servicesDesc")}
              </p>
            </Link>
            <Link
              to="/contato"
              className="p-4 bg-background rounded-lg hover:shadow-elevated transition-smooth"
            >
              <h3 className="font-semibold mb-2">{t("common.notFound.contactTitle")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("common.notFound.contactDesc")}
              </p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;
