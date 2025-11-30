# 📧 Configuração do FormSubmit

## ✅ Status: CONFIGURADO E PRONTO PARA USO!

O FormSubmit foi configurado com sucesso no projeto. Este guia explica como funciona e como usar.

## 🎯 O que é FormSubmit?

- ✅ **Gratuito** - Sem limites de envio
- ✅ **Sem backend necessário** - Funciona direto do frontend
- ✅ **Sem chave de acesso** - Não precisa de configuração complexa
- ✅ **Fácil de usar** - Apenas configure o email de destino
- ✅ **Proteção anti-spam** - Proteção automática integrada

## 📧 Emails Configurados

### Email Principal:
- **renatabastosnutri@gmail.com** (recebe todos os emails)

### Email Cópia (CC):
- **fabiano.freitas@gmail.com** (recebe cópia de todos os emails)

## 🚀 Como Funciona

1. Usuário preenche o formulário de contato
2. Dados são validados e sanitizados
3. Formulário é enviado via FormSubmit API
4. Email é enviado para ambos os endereços configurados
5. Usuário recebe confirmação de sucesso

## 📋 Campos do Formulário

O formulário envia os seguintes dados:

- **Nome Completo** - Nome do contato
- **E-mail** - Email do contato
- **Telefone** - Telefone/WhatsApp
- **Assunto** - Assunto selecionado (Agendar Consulta, Solicitar Orçamento, etc.)
- **Mensagem** - Mensagem do usuário

## 🧪 Como Testar

### 1. Teste Local (Desenvolvimento)

1. Inicie o servidor:
   ```bash
   npm run dev
   # ou
   bun dev
   ```

2. Acesse: http://localhost:8080

3. Vá até a seção "Contato"

4. Preencha o formulário com dados de teste

5. Envie e verifique:
   - ✅ Mensagem de sucesso aparece
   - ✅ Console mostra: `✅ FormSubmit - Email enviado com sucesso!`
   - ✅ Email chega em ambos os endereços

### 2. Verificar Resposta da API

No console do navegador (F12), você verá:
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### 3. Verificar Email Recebido

Os emails serão enviados para:
- **renatabastosnutri@gmail.com** (principal)
- **fabiano.freitas@gmail.com** (cópia)

## 📧 Formato do Email Recebido

O email terá o seguinte formato:

```
Assunto: Novo contato pelo site: [Assunto Selecionado]

Nome: [Nome do contato]
Email: [Email do contato]
Telefone: [Telefone]
Assunto: [Assunto]
Mensagem: [Mensagem]
```

## ⚙️ Configuração Atual

- **API:** `https://formsubmit.co/ajax/renatabastosnutri@gmail.com`
- **Email Principal:** renatabastosnutri@gmail.com
- **Email Cópia:** fabiano.freitas@gmail.com
- **Template:** Box (limpo e profissional)
- **Auto-resposta:** Habilitada (confirmação automática)

## 🔧 Personalizações Disponíveis

### Alterar Email Principal

No arquivo `src/components/Contact.tsx`, linha ~49:

```typescript
const formAction = "https://formsubmit.co/ajax/SEU-EMAIL@exemplo.com";
```

### Alterar Email de Cópia

No arquivo `src/components/Contact.tsx`, linha ~67:

```typescript
formDataForSubmit.append("_cc", "outro-email@exemplo.com");
```

### Adicionar Mais Emails em Cópia

Para adicionar múltiplos emails, separe por vírgula:

```typescript
formDataForSubmit.append("_cc", "email1@exemplo.com,email2@exemplo.com");
```

### Desabilitar Auto-resposta

Remova ou comente a linha:

```typescript
// formDataForSubmit.append("_autoresponse", "...");
```

### Alterar Template

FormSubmit oferece vários templates:
- `box` - Template limpo (atual)
- `table` - Template em tabela
- `basic` - Template básico

Altere na linha ~66:

```typescript
formDataForSubmit.append("_template", "table"); // ou "basic"
```

## 🛡️ Segurança

### ✅ Proteções Implementadas:

1. **Validação de dados** - Validação client-side completa
2. **Sanitização** - Limpeza de dados antes do envio
3. **Proteção anti-spam** - FormSubmit tem proteção automática
4. **Rate limiting** - FormSubmit limita automaticamente envios suspeitos

### 🔐 Boas Práticas:

- ✅ Validação sempre no frontend
- ✅ Sanitização de todos os campos
- ✅ Limitação de tamanho de campos
- ✅ Mensagens de erro claras

## 🐛 Troubleshooting

### Erro: "Email not sent"

**Verifique:**
- ✅ Email de destino está correto
- ✅ Formato do email está válido
- ✅ Não há bloqueios de spam
- ✅ Console do navegador para erros detalhados

### Email não chega

**Verifique:**
1. Console do navegador (F12) - veja se há erros
2. Caixa de spam - emails podem ir para lá
3. Ambos os emails (principal e cópia)
4. Aguarde alguns minutos (pode haver delay)

### Erro: "Rate limit exceeded"

**Solução:**
- FormSubmit pode limitar muitos envios em pouco tempo
- Aguarde alguns minutos e tente novamente
- Verifique se não há spam sendo enviado

### Formulário não envia

**Verifique:**
1. Console do navegador (F12) - veja erros
2. Network tab (F12 → Network) - veja a requisição
3. Validação - todos os campos obrigatórios preenchidos?
4. Conexão com internet

## 📊 Monitoramento

### Verificar Envios

FormSubmit não oferece dashboard, mas você pode:

1. **Verificar emails recebidos** - Ambos os emails configurados
2. **Console do navegador** - Logs detalhados de cada envio
3. **Network tab** - Ver requisições HTTP

## 🔄 Diferenças do Web3Forms

### Vantagens do FormSubmit:

- ✅ Sem limite de envios (gratuito)
- ✅ Não precisa de chave de acesso
- ✅ Configuração mais simples
- ✅ Suporte a múltiplos emails (CC)

### Desvantagens:

- ⚠️ Sem dashboard de monitoramento
- ⚠️ Menos opções de personalização
- ⚠️ Menos documentação disponível

## 📝 Exemplo de Email Recebido

```
De: noreply@formsubmit.co
Para: renatabastosnutri@gmail.com
CC: fabiano.freitas@gmail.com
Assunto: Novo contato pelo site: Agendar Consulta

Nome: João Silva
Email: joao@exemplo.com
Telefone: (21) 99999-9999
Assunto: Agendar Consulta
Mensagem: Gostaria de agendar uma consulta para avaliação nutricional...
```

## 🎯 Próximos Passos

O formulário está pronto para uso em produção!

- ✅ Teste localmente
- ✅ Teste em produção
- ✅ Monitore os emails recebidos
- ✅ Ajuste mensagens se necessário

## 📚 Recursos Adicionais

- **FormSubmit Docs:** https://formsubmit.co/documentation
- **FormSubmit Status:** Verifique se o serviço está online

---

**Configurado em:** Janeiro 2025
**Status:** ✅ Pronto para uso!
**Emails:** renatabastosnutri@gmail.com (principal) + fabiano.freitas@gmail.com (cópia)

