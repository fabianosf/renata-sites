import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEO
        title={t("draRenata.seo.title")}
        description={t("draRenata.seo.description")}
        path="/dra-renata"
      />
      <StructuredData type="about" />
      <Header />
      <main>
        <div className="pt-24 container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: t("draRenata.breadcrumb") }]} />
        </div>
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
