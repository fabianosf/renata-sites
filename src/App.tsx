import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ErrorBoundary from "@/components/ErrorBoundary";
import Analytics from "@/components/Analytics";
import LanguageLayout from "@/components/LanguageLayout";
import Index from "./pages/Index";
import ClinicaPage from "./pages/ClinicaPage";
import AboutPage from "./pages/AboutPage";
import MetodoRBPage from "./pages/MetodoRBPage";
import RejuvenescimentoFacialPage from "./pages/RejuvenescimentoFacialPage";
import EsteticaCorporalPage from "./pages/EsteticaCorporalPage";
import NutricaoEstrategicaPage from "./pages/NutricaoEstrategicaPage";
import AntesDepoisPage from "./pages/AntesDepoisPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <ThemeProvider attribute="class" forcedTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Analytics />
          <Toaster />
          <Sonner />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Routes>
              {/* :lang é opcional - sem prefixo = Português (padrão), /en e /es = Inglês/Espanhol */}
              <Route path="/:lang?" element={<LanguageLayout />}>
                <Route index element={<Index />} />
                <Route path="inicio" element={<Index scrollTo="inicio" />} />
                <Route path="a-clinica" element={<ClinicaPage />} />
                <Route path="dra-renata" element={<AboutPage />} />
                <Route path="metodo-rb" element={<MetodoRBPage />} />
                <Route path="rejuvenescimento-facial" element={<RejuvenescimentoFacialPage />} />
                <Route path="estetica-corporal" element={<EsteticaCorporalPage />} />
                <Route path="nutricao-estrategica" element={<NutricaoEstrategicaPage />} />
                <Route path="antes-e-depois" element={<AntesDepoisPage />} />
                <Route path="historias-de-transformacao" element={<TestimonialsPage />} />
                <Route path="contato" element={<Index scrollTo="contato" />} />
                {/* Rotas antigas mantidas como redirect para preservar SEO/links já indexados */}
                <Route path="sobre" element={<Navigate to="../dra-renata" replace />} />
                <Route path="depoimentos" element={<Navigate to="../historias-de-transformacao" replace />} />
                <Route path="servicos" element={<Index scrollTo="servicos" />} />
                <Route path="precos" element={<Index scrollTo="precos" />} />
                {/* Blog removido do site - redireciona para a Home do idioma atual */}
                <Route path="blog" element={<Navigate to=".." replace />} />
                <Route path="blog/:id" element={<Navigate to=".." replace />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              {/* Fora do prefixo de idioma - páginas de serviço permanecem em Português */}
              <Route path="/servico/:id" element={<ServiceDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
