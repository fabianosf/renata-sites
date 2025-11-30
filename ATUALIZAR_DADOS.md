# 📋 Guia de Atualização de Dados do Site

Este arquivo contém instruções para atualizar as informações da clínica no site.

## ⚠️ Dados que PRECISAM ser atualizados

### 1. Contato (Arquivo: `src/config/site.ts`)

Abra o arquivo `src/config/site.ts` e atualize as seguintes informações na seção `contact`:

#### Telefone
```typescript
phone: "(21) 12345-6789", // Coloque o telefone real (formato: (21) 12345-6789)
phoneLink: "tel:+5521123456789", // Link do telefone (sem parênteses, espaços ou hífens)
```

#### WhatsApp
```typescript
whatsapp: "5521123456789", // Número do WhatsApp
// Formato: código do país (55) + DDD (21) + número (123456789)
// SEM: +, parênteses, espaços ou hífens
```

#### Email
```typescript
email: "contato@renatabastos.com.br", // Email real da clínica
emailLink: "mailto:contato@renatabastos.com.br", // Link do email
```

### 2. Redes Sociais (Arquivo: `src/config/site.ts`)

Na seção `social`, atualize os links das redes sociais:

```typescript
social: {
  instagram: {
    url: "https://instagram.com/seu_perfil", // Link do Instagram
  },
  facebook: {
    url: "https://facebook.com/seu_perfil", // Link do Facebook
  },
  linkedin: {
    url: "https://linkedin.com/in/seu_perfil", // Link do LinkedIn
  },
  youtube: {
    url: "https://youtube.com/@seu_canal", // Link do YouTube
  },
}
```

**Nota:** Se não tiver alguma rede social, deixe `"#"` ou remova do Footer.

### 3. Endereço (Opcional - se quiser mais específico)

Se quiser adicionar o endereço completo da clínica:

```typescript
address: "Rua Exemplo, 123 - Tijuca, Rio de Janeiro - RJ", // Endereço completo
addressLink: "https://maps.google.com/?q=Rua+Exemplo,+123,+Tijuca", // Link do Google Maps
```

## ✅ Dados já configurados (não precisa alterar)

- ✅ Nome da clínica: "Clínica Renata Bastos"
- ✅ Nome da profissional: "Renata Bastos"
- ✅ CRN: "CRN 4 15100141"
- ✅ Localização: Tijuca e Barra da Tijuca, Rio de Janeiro
- ✅ Horários: Manhã 7h-14h | Tarde 14h-20h
- ✅ Experiência: 14+ anos
- ✅ Formação e especializações
- ✅ Todos os serviços e tratamentos
- ✅ Textos e descrições

## 🔍 Como encontrar o arquivo

O arquivo principal está em:
```
src/config/site.ts
```

## 📝 Exemplo completo de atualização

```typescript
contact: {
  phone: "(21) 98765-4321", // Exemplo
  phoneLink: "tel:+5521987654321",
  whatsapp: "5521987654321",
  email: "contato@renatabastos.com.br",
  emailLink: "mailto:contato@renatabastos.com.br",
  // ... resto permanece igual
}
```

## ⚡ Após atualizar

1. Salve o arquivo `src/config/site.ts`
2. O site atualizará automaticamente (se estiver rodando)
3. Teste os links de WhatsApp, telefone e email
4. Verifique se as redes sociais estão funcionando

## 🆘 Precisa de ajuda?

Se tiver dúvidas sobre como atualizar, entre em contato com o desenvolvedor.

---

**Última atualização:** As informações da clínica já estão configuradas, faltam apenas os dados de contato (telefone, WhatsApp, email e redes sociais).

