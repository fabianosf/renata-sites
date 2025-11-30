import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Sobre Renata Bastos - Nutricionista Ortomolecular"
        description={`Conheça ${siteConfig.professional.name}, ${siteConfig.professional.title} com ${siteConfig.professional.experience} anos de experiência. Especializada em Nutrição Ortomolecular e Estética Avançada na Tijuca, Rio de Janeiro.`}
        keywords={`${siteConfig.professional.name}, sobre, nutricionista ortomolecular, biomédica esteta, tijuca rio de janeiro, ${siteConfig.seo.keywords}`}
        url="https://clinicarenatabastos.com.br/sobre"
      />
      <StructuredData type="about" />
      <Header />
      <main>
        <div className="pt-20">
          <About />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;

