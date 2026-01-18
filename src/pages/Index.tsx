import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import FAQSchema from "@/components/FAQSchema";

interface IndexProps {
  scrollTo?: string;
}

const Index = ({ scrollTo }: IndexProps = {}) => {
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
      <SEO />
      <StructuredData type="home" />
      <FAQSchema />
      <Header />
      <main>
        <Hero />
        <Differentiators />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
