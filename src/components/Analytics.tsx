import { useEffect } from "react";

// Google Analytics Component
// Para usar, adicione seu ID do Google Analytics em siteConfig
const Analytics = () => {
  useEffect(() => {
    // Verifica se está em produção e se há um ID do GA configurado
    const gaId = import.meta.env.VITE_GA_ID || "";

    if (gaId && typeof window !== "undefined") {
      // Script do Google Analytics
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', {
          page_path: window.location.pathname,
        });
      `;
      document.head.appendChild(script2);

      // Cleanup
      return () => {
        const scripts = document.querySelectorAll(`script[src*="googletagmanager"]`);
        scripts.forEach((script) => script.remove());
      };
    }
  }, []);

  return null;
};

// Função helper para eventos do GA
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Função helper para tracking de página
export const trackPageView = (path: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", import.meta.env.VITE_GA_ID || "", {
      page_path: path,
    });
  }
};

export default Analytics;

