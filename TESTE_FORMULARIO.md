# 🧪 Guia Rápido de Teste do Formulário

## ✅ Como Testar o Formulário FormSubmit

### Passo 1: Iniciar o Servidor

```bash
npm run dev
# ou
bun dev
```

O site estará disponível em: `http://localhost:8080`

### Passo 2: Abrir o Console do Navegador

1. Abra o site no navegador
2. Pressione **F12** para abrir o DevTools
3. Vá para a aba **"Console"**

### Passo 3: Testar o Formulário

1. Navegue até a seção **"Contato"** do site
2. Preencha todos os campos:
   - Nome Completo
   - E-mail
   - Telefone
   - Assunto (selecione um)
   - Mensagem
3. Clique em **"Enviar Mensagem"**

### Passo 4: Verificar no Console

**Se funcionou, você verá:**
```
📧 FormSubmit - Resposta da API: {success: true, message: "..."}
✅ FormSubmit - Email enviado com sucesso!
📬 Dados enviados: {nome: "...", email: "...", telefone: "...", assunto: "..."}
```

**Se deu erro, você verá:**
```
❌ FormSubmit - Erro no envio: {success: false, ...}
❌ Erro ao enviar formulário: ...
```

## 🔍 Verificações Adicionais

### Verificar na Aba Network

1. No DevTools, vá para a aba **"Network"**
2. Filtre por **"Fetch/XHR"**
3. Envie o formulário
4. Procure pela requisição: `renatabastosnutri@gmail.com`
5. Clique nela e veja:
   - **Status:** Deve ser `200 OK`
   - **Response:** Pode ser JSON ou HTML

## ✅ Resultados Esperados

### Sucesso ✅
- Mensagem de toast: "Mensagem enviada com sucesso!"
- Console mostra: `✅ FormSubmit - Email enviado com sucesso!`
- Formulário é limpo automaticamente
- Status HTTP: `200 OK`

### Erro ❌
- Mensagem de toast: "Erro ao enviar mensagem..."
- Console mostra detalhes do erro
- Verifique conexão com internet
- Verifique se os emails estão corretos

## 📧 Verificar Email Recebido

Para confirmar que o email foi recebido:

1. **Email Principal:** Verifique `renatabastosnutri@gmail.com`
2. **Email Cópia:** Verifique `fabiano.freitas@gmail.com`
3. Verifique a caixa de spam se não encontrar
4. Aguarde alguns minutos (pode haver delay)

### Formato do Email

O email terá:
- **Assunto:** "Novo contato pelo site: [Assunto]"
- **Campos:** Nome, Email, Telefone, Assunto, Mensagem
- **Auto-resposta:** O remetente receberá uma confirmação automática

## 🎯 Emails Configurados

- **Principal:** renatabastosnutri@gmail.com
- **Cópia (CC):** fabiano.freitas@gmail.com

---

**Última atualização:** Janeiro 2025
**Serviço:** FormSubmit (https://formsubmit.co/)
