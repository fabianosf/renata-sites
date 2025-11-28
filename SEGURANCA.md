# 🔒 Guia de Segurança do Site

Este documento descreve as medidas de segurança implementadas no site da Clínica Renata Bastos.

## ✅ Medidas de Segurança Implementadas

### 1. **Validação e Sanitização de Dados** ⭐⭐⭐
- ✅ Validação de formulários (nome, email, telefone, mensagem)
- ✅ Sanitização de strings (remoção de caracteres perigosos)
- ✅ Limitação de tamanho de campos
- ✅ Validação de formato (email, telefone)
- ✅ Sanitização de URLs antes de usar em links

**Arquivos:**
- `src/utils/validation.ts` - Funções de validação
- `src/utils/security.ts` - Utilitários de segurança
- `src/components/Contact.tsx` - Formulário com validação

### 2. **Proteção contra XSS (Cross-Site Scripting)** ⭐⭐⭐
- ✅ Sanitização de HTML antes de usar `dangerouslySetInnerHTML`
- ✅ Remoção de tags `<script>`, event handlers (`onclick`, etc.)
- ✅ Remoção de `javascript:` em URLs
- ✅ Escape de caracteres especiais

**Implementação:**
```typescript
// Em BlogPost.tsx
dangerouslySetInnerHTML={{ 
  __html: article.content
    .replace(/<script/gi, "&lt;script")
    .replace(/<\/script>/gi, "&lt;/script&gt;")
    .replace(/on\w+\s*=/gi, "data-disabled=")
}}
```

### 3. **Headers de Segurança** ⭐⭐
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-Frame-Options: DENY` (previne clickjacking)
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`

**Nota:** Headers completos devem ser configurados no servidor (nginx/apache).

### 4. **Error Boundary** ⭐⭐
- ✅ Tratamento de erros React
- ✅ Previne quebra completa da aplicação
- ✅ Mensagens de erro amigáveis
- ✅ Log de erros em desenvolvimento

**Arquivo:** `src/components/ErrorBoundary.tsx`

### 5. **Rate Limiting (Client-side)** ⭐
- ✅ Prevenção de múltiplos envios rápidos
- ✅ Classe `RateLimiter` disponível

**Arquivo:** `src/utils/security.ts`

### 6. **Validação de URLs** ⭐⭐
- ✅ Verificação de protocolo (apenas http/https)
- ✅ Sanitização de URLs antes de usar
- ✅ Prevenção de links maliciosos

### 7. **Proteção de Links Externos** ⭐⭐
- ✅ `rel="noopener noreferrer"` em todos os links externos
- ✅ `target="_blank"` com segurança
- ✅ Validação de URLs antes de abrir

## 🔐 Recomendações Adicionais para Produção

### 1. **Configurar Headers no Servidor**

#### Nginx
```nginx
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://wa.me; frame-src 'self' https://www.google.com;" always;
```

#### Apache (.htaccess)
```apache
<IfModule mod_headers.c>
  Header set X-Frame-Options "DENY"
  Header set X-Content-Type-Options "nosniff"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### 2. **HTTPS Obrigatório**
- ✅ Configure SSL/TLS no servidor
- ✅ Force redirecionamento HTTP → HTTPS
- ✅ Use certificado válido (Let's Encrypt gratuito)

### 3. **Google Analytics**
- ✅ Configure variável de ambiente `VITE_GA_ID`
- ✅ Crie arquivo `.env` com seu ID do GA
- ✅ O componente Analytics já está implementado

### 4. **Backup Regular**
- ✅ Faça backup do código e banco de dados (se houver)
- ✅ Configure backups automáticos

### 5. **Monitoramento**
- ✅ Configure Google Search Console
- ✅ Monitore erros no console do navegador
- ✅ Use ferramentas como Sentry para tracking de erros

## 🛡️ Checklist de Segurança

### Antes de Publicar
- [ ] Configurar HTTPS
- [ ] Adicionar headers de segurança no servidor
- [ ] Configurar Google Analytics (se desejar)
- [ ] Testar validação de formulários
- [ ] Verificar que todos os links externos têm `rel="noopener noreferrer"`
- [ ] Revisar conteúdo para informações sensíveis
- [ ] Configurar backup automático

### Após Publicar
- [ ] Monitorar logs de erro
- [ ] Verificar Google Search Console
- [ ] Testar formulários em produção
- [ ] Verificar que HTTPS está funcionando
- [ ] Testar em diferentes navegadores

## 📋 Vulnerabilidades Conhecidas e Mitigações

### 1. **XSS em Conteúdo do Blog**
**Status:** ✅ Mitigado
- Conteúdo do blog é sanitizado antes de renderizar
- Tags `<script>` são removidas
- Event handlers são desabilitados

### 2. **Formulário de Contato**
**Status:** ✅ Protegido
- Validação client-side e sanitização
- Dados são sanitizados antes de enviar
- Limitação de tamanho de campos

### 3. **Links Externos**
**Status:** ✅ Protegido
- Todos os links externos têm `rel="noopener noreferrer"`
- URLs são validadas antes de usar

## 🔍 Ferramentas de Teste

1. **OWASP ZAP** - Scanner de vulnerabilidades
2. **Google Lighthouse** - Auditoria de segurança
3. **Security Headers** - https://securityheaders.com
4. **SSL Labs** - Teste de SSL/TLS

## 📞 Contato para Questões de Segurança

Se encontrar alguma vulnerabilidade, entre em contato:
- Email: renatabastosnutri@gmail.com
- Desenvolvedor: Fabiano Sousa de Freitas

---

**Última atualização:** Dezembro 2024
**Versão:** 1.0

