import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import About from "@/components/About";
import Differentiators from "@/components/Differentiators";
import VideoSection from "@/components/VideoSection";
import NutritionPlusAesthetics from "@/components/NutritionPlusAesthetics";
import ConsultationTypes from "@/components/ConsultationTypes";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import GoogleReviewQR from "@/components/GoogleReviewQR";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import FAQSchema from "@/components/FAQSchema";

interface IndexProps {
  scrollTo?: string;
}

const Index = ({ scrollTo }: IndexProps = {}) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          setTimeout(() => {
            const element = document.getElementById(scrollTo);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 200);
        }
      }, 100);
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen">
      <SEO title={t("home.seo.title")} description={t("home.seo.description")} path="/" />
      <StructuredData type="home" />
      <FAQSchema />
      <Header />
      <main>
        <About asHero />
        <Differentiators />
        <VideoSection />
        <NutritionPlusAesthetics />
        <ConsultationTypes />
        <Pricing />
        <FAQ />
        <GoogleReviewQR />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
