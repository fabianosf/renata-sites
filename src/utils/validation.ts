// Validação e sanitização de dados para segurança

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Sanitiza string removendo caracteres perigosos
export const sanitizeString = (input: string): string => {
  if (typeof input !== "string") return "";
  
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove < e >
    .replace(/javascript:/gi, "") // Remove javascript:
    .replace(/on\w+=/gi, "") // Remove event handlers
    .slice(0, 1000); // Limita tamanho
};

// Valida email
export const validateEmail = (email: string): boolean => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Valida telefone brasileiro
export const validatePhone = (phone: string): boolean => {
  if (!phone) return false;
  // Remove caracteres não numéricos
  const cleaned = phone.replace(/\D/g, "");
  // Aceita telefones com 10 ou 11 dígitos (com DDD)
  return cleaned.length >= 10 && cleaned.length <= 11;
};

// Valida nome
export const validateName = (name: string): boolean => {
  if (!name) return false;
  const sanitized = sanitizeString(name);
  // Nome deve ter pelo menos 2 caracteres e apenas letras, espaços e alguns caracteres especiais
  return sanitized.length >= 2 && sanitized.length <= 100 && /^[a-zA-ZÀ-ÿ\s'-]+$/.test(sanitized);
};

// Valida mensagem
export const validateMessage = (message: string): boolean => {
  if (!message) return false;
  const sanitized = sanitizeString(message);
  return sanitized.length >= 10 && sanitized.length <= 2000;
};

// Valida formulário de contato completo
export const validateContactForm = (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): ValidationResult => {
  const errors: string[] = [];

  if (!validateName(formData.name)) {
    errors.push("Nome inválido. Deve ter entre 2 e 100 caracteres.");
  }

  if (!validateEmail(formData.email)) {
    errors.push("Email inválido.");
  }

  if (!validatePhone(formData.phone)) {
    errors.push("Telefone inválido. Use o formato (XX) XXXXX-XXXX.");
  }

  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.push("Assunto deve ter pelo menos 3 caracteres.");
  }

  if (!validateMessage(formData.message)) {
    errors.push("Mensagem deve ter entre 10 e 2000 caracteres.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Sanitiza dados do formulário
export const sanitizeFormData = (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  return {
    name: sanitizeString(formData.name),
    email: sanitizeString(formData.email).toLowerCase(),
    phone: formData.phone.replace(/\D/g, ""), // Apenas números
    subject: sanitizeString(formData.subject),
    message: sanitizeString(formData.message),
  };
};

