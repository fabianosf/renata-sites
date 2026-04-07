import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Página Não Encontrada - 404"
        description="A página que você está procurando não foi encontrada. Retorne à página inicial ou explore nossos serviços."
        url="https://clinicarenatabastos.com.br/404"
      />
      <Header />
      <main className="flex-1 flex items-center justify-center bg-muted p-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Página Não Encontrada</h2>
            <p className="text-lg text-muted-foreground mb-2">
              A página que você está procurando não existe ou foi movida.
            </p>
            <p className="text-sm text-muted-foreground">
              URL tentada: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Voltar ao Início
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/servicos">
                <Search className="mr-2 h-5 w-5" />
                Ver Serviços
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <Link
              to="/sobre"
              className="p-4 bg-background rounded-lg hover:shadow-elevated transition-smooth"
            >
              <h3 className="font-semibold mb-2">Sobre</h3>
              <p className="text-sm text-muted-foreground">
                Conheça a Dra. Renata Bastos
              </p>
            </Link>
            <Link
              to="/servicos"
              className="p-4 bg-background rounded-lg hover:shadow-elevated transition-smooth"
            >
              <h3 className="font-semibold mb-2">Serviços</h3>
              <p className="text-sm text-muted-foreground">
                Veja nossos tratamentos
              </p>
            </Link>
            <Link
              to="/contato"
              className="p-4 bg-background rounded-lg hover:shadow-elevated transition-smooth"
            >
              <h3 className="font-semibold mb-2">Contato</h3>
              <p className="text-sm text-muted-foreground">
                Entre em contato
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
