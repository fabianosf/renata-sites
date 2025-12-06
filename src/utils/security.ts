// Utilitários de segurança

/**
 * Sanitiza HTML removendo tags e scripts perigosos
 * Para uso com dangerouslySetInnerHTML quando necessário
 */
export const sanitizeHTML = (html: string): string => {
  if (typeof html !== "string") return "";

  // Remove scripts e event handlers
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/<iframe/gi, "")
    .replace(/<object/gi, "")
    .replace(/<embed/gi, "");
};

/**
 * Valida URL para prevenir XSS
 */
export const isValidURL = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    // Permite apenas http e https
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch {
    return false;
  }
};

/**
 * Sanitiza URL antes de usar em links
 */
export const sanitizeURL = (url: string): string => {
  if (!url) return "#";
  
  // Se já é uma URL válida, retorna
  if (isValidURL(url)) {
    return url;
  }

  // Se começa com /, é uma rota interna
  if (url.startsWith("/")) {
    return url;
  }

  // Se começa com #, é um anchor
  if (url.startsWith("#")) {
    return url;
  }

  // Caso contrário, retorna # para segurança
  return "#";
};

/**
 * Previne clickjacking - adiciona headers de segurança
 * (Para uso em servidor, mas documentado aqui)
 */
export const getSecurityHeaders = () => {
  return {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  };
};

/**
 * Rate limiting helper (client-side)
 * Previne múltiplos envios rápidos
 */
export class RateLimiter {
  private lastCall: number = 0;
  private minInterval: number;

  constructor(minIntervalMs: number = 1000) {
    this.minInterval = minIntervalMs;
  }

  canProceed(): boolean {
    const now = Date.now();
    if (now - this.lastCall >= this.minInterval) {
      this.lastCall = now;
      return true;
    }
    return false;
  }

  reset() {
    this.lastCall = 0;
  }
}

/**
 * Content Security Policy (CSP) recomendado
 * Adicione isso no servidor/nginx
 */
export const recommendedCSP = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https: blob:;
  connect-src 'self' https://www.google-analytics.com https://wa.me https://formsubmit.co;
  frame-src 'self' https://www.google.com;
  base-uri 'self';
  form-action 'self' https://wa.me https://formsubmit.co;
`.replace(/\s+/g, " ").trim();

