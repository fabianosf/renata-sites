import renataAvatar from "@/assets/renata-avatar.jpg";

export interface BlogArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const blogArticles: BlogArticle[] = [
  {
    id: "alimentos-aceleram-metabolismo",
    category: "Alimentação Saudável",
    title: "10 Alimentos que Aceleram o Metabolismo Naturalmente",
    excerpt:
      "Descubra quais alimentos podem ajudar seu corpo a queimar calorias de forma mais eficiente e como incluí-los no seu dia a dia.",
    date: "15 de Março, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    author: {
      name: "Renata Bastos",
      role: "Nutricionista Ortomolecular & Biomédica Esteta",
      avatar: renataAvatar,
    },
    content: `
# 10 Alimentos que Aceleram o Metabolismo Naturalmente

O metabolismo é o conjunto de reações químicas que ocorrem no nosso corpo para manter a vida. Alguns alimentos possuem propriedades termogênicas que podem acelerar esse processo naturalmente.

## 1. Pimenta Vermelha

A capsaicina presente na pimenta vermelha aumenta a temperatura corporal e acelera o metabolismo. Estudos mostram que pode aumentar a queima de calorias em até 8% após o consumo.

**Como consumir:** Adicione pimenta vermelha em pó às suas refeições ou use pimenta fresca em saladas e refogados.

## 2. Chá Verde

Rico em catequinas e cafeína, o chá verde é um potente acelerador metabólico. Pode aumentar a queima de gordura em até 17% durante exercícios físicos.

**Como consumir:** 2-3 xícaras por dia, preferencialmente entre as refeições.

## 3. Gengibre

O gengibre possui propriedades termogênicas e anti-inflamatórias. Pode aumentar o gasto energético e promover sensação de saciedade.

**Como consumir:** Chá de gengibre, suco detox ou ralado em preparações.

## 4. Café

A cafeína estimula o sistema nervoso central e pode aumentar o metabolismo em 3-11%. Também melhora o desempenho físico.

**Como consumir:** 1-2 xícaras por dia, preferencialmente sem açúcar.

## 5. Proteínas Magras

A digestão de proteínas requer mais energia do corpo (efeito térmico dos alimentos). Pode aumentar o metabolismo em 15-30%.

**Exemplos:** Frango, peixe, ovos, tofu, leguminosas.

## 6. Água Gelada

Beber água gelada obriga o corpo a gastar energia para aquecê-la até a temperatura corporal.

**Como consumir:** 8-10 copos de água por dia, alguns gelados.

## 7. Canela

A canela ajuda a regular os níveis de açúcar no sangue e pode aumentar o metabolismo da glicose.

**Como consumir:** Polvilhe em frutas, café, chás ou iogurte.

## 8. Alimentos Ricos em Ômega-3

O ômega-3 regula os níveis de leptina, hormônio que controla a velocidade do metabolismo.

**Exemplos:** Salmão, sardinha, linhaça, chia.

## 9. Vinagre de Maçã

Ajuda a controlar os níveis de açúcar no sangue e pode aumentar a sensação de saciedade.

**Como consumir:** 1 colher de sopa diluída em água antes das refeições.

## 10. Brócolis

Rico em cálcio e vitamina C, nutrientes essenciais para um metabolismo eficiente.

**Como consumir:** Cozido no vapor ou refogado, 3-4 vezes por semana.

## Considerações Finais

Lembre-se que nenhum alimento isolado fará milagres. A aceleração do metabolismo depende de um conjunto de fatores:

- Alimentação equilibrada
- Hidratação adequada
- Exercícios físicos regulares
- Sono de qualidade
- Controle do estresse

Consulte sempre um nutricionista para um plano alimentar personalizado às suas necessidades.
    `,
  },
  {
    id: "alimentacao-pre-pos-treino",
    category: "Nutrição Esportiva",
    title: "Guia Completo: O Que Comer Antes e Depois do Treino",
    excerpt:
      "Maximize seus resultados com as estratégias nutricionais corretas para pré e pós-treino. Saiba o timing ideal e as melhores opções.",
    date: "12 de Março, 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    author: {
      name: "Renata Bastos",
      role: "Nutricionista Ortomolecular & Biomédica Esteta",
      avatar: renataAvatar,
    },
    content: `
# Guia Completo: O Que Comer Antes e Depois do Treino

A nutrição adequada antes e depois do treino é fundamental para maximizar seus resultados, seja seu objetivo ganho de massa muscular, perda de gordura ou melhora de performance.

## Alimentação Pré-Treino

### Timing Ideal

- **2-3 horas antes:** Refeição completa
- **30-60 minutos antes:** Snack leve

### Objetivos da Refeição Pré-Treino

1. Fornecer energia suficiente
2. Prevenir catabolismo muscular
3. Melhorar performance
4. Evitar desconforto gástrico

### Melhores Opções (2-3h antes)

**Opção 1:** Frango grelhado + arroz integral + legumes
**Opção 2:** Omelete com batata-doce e salada
**Opção 3:** Macarrão integral com atum e vegetais
**Opção 4:** Peixe assado + quinoa + brócolis

### Snacks Leves (30-60min antes)

- Banana com pasta de amendoim
- Tapioca com queijo branco
- Batata-doce assada
- Aveia com frutas
- Shake de whey com fruta

### O que Evitar

- Alimentos muito gordurosos
- Excesso de fibras
- Alimentos que causam gases
- Refeições muito volumosas

## Alimentação Pós-Treino

### Janela Anabólica

Os primeiros 30-60 minutos após o treino são cruciais. O corpo está mais receptivo aos nutrientes.

### Objetivos da Refeição Pós-Treino

1. Repor glicogênio muscular
2. Iniciar recuperação muscular
3. Reduzir catabolismo
4. Promover síntese proteica

### Composição Ideal

**Proteínas:** 20-40g
**Carboidratos:** 0.5-1g por kg de peso corporal
**Proporção:** 3:1 ou 4:1 (carboidrato:proteína)

### Melhores Opções

**Imediatamente após:**
- Shake de whey com banana
- Água de coco com whey
- Smoothie de frutas com iogurte grego

**Refeição completa (1-2h depois):**
- Frango + arroz branco + legumes
- Carne magra + batata + salada
- Peixe + macarrão + vegetais
- Ovos + pão integral + abacate

### Suplementação Pós-Treino

**Essenciais:**
- Whey protein: 25-30g
- Creatina: 3-5g
- Glutamina: 5-10g (opcional)

**Carboidratos de rápida absorção:**
- Dextrose
- Maltodextrina
- Waxy maize

## Timing Específico por Tipo de Treino

### Treino de Força/Hipertrofia

**Pré:** Carboidratos complexos + proteína moderada
**Pós:** Alta proteína + carboidratos moderados a altos

### Treino Aeróbico/Cardio

**Pré:** Carboidratos de fácil digestão
**Pós:** Carboidratos para reposição + proteína moderada

### Treino em Jejum

- Somente para treinos leves/moderados
- BCAA antes pode ajudar
- Refeição pós-treino ainda mais importante

## Hidratação

### Antes do Treino
- 500ml de água 2h antes
- 250ml 15min antes

### Durante o Treino
- 150-250ml a cada 15-20min
- Isotônicos para treinos > 1h

### Após o Treino
- 150% do peso perdido em suor
- Verificar cor da urina

## Suplementos Pré-Treino

**Cafeína:** 3-6mg/kg de peso corporal
**Beta-alanina:** 2-5g
**Citrulina malato:** 6-8g
**Creatina:** 3-5g (pode ser antes ou depois)

## Erros Comuns

1. **Treinar em jejum prolongado** sem adaptação
2. **Excesso de gordura pré-treino** causando desconforto
3. **Pular refeição pós-treino** perdendo janela anabólica
4. **Carboidratos insuficientes** levando à fadiga
5. **Desidratação** prejudicando performance

## Plano de Ação Personalizado

Cada pessoa é única. Considere:
- Objetivo (ganho de massa, perda de gordura, performance)
- Tipo de treino
- Horário do treino
- Preferências alimentares
- Intolerâncias

## Conclusão

A nutrição pré e pós-treino é tão importante quanto o próprio treino. Não deixe seus esforços na academia irem por água abaixo por falta de uma estratégia nutricional adequada.

**Quer um plano nutricional personalizado para seus treinos? Agende uma consulta e maximize seus resultados!**
    `,
  },
  {
    id: "alimentacao-saude-mental",
    category: "Bem-estar",
    title: "Como a Alimentação Afeta Sua Saúde Mental e Humor",
    excerpt:
      "Entenda a conexão entre intestino e cérebro e como escolhas alimentares podem influenciar seu bem-estar emocional.",
    date: "8 de Março, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
    author: {
      name: "Renata Bastos",
      role: "Nutricionista Ortomolecular & Biomédica Esteta",
      avatar: renataAvatar,
    },
    content: `
# Como a Alimentação Afeta Sua Saúde Mental e Humor

A conexão entre o que comemos e como nos sentimos é muito mais profunda do que imaginamos. Nosso intestino é frequentemente chamado de "segundo cérebro", e com razão.

## O Eixo Intestino-Cérebro

### O Que É?

Uma via de comunicação bidirecional entre o sistema nervoso central e o sistema nervoso entérico (intestino). Essa comunicação ocorre através de:

- Nervos (principalmente o nervo vago)
- Hormônios
- Sistema imunológico
- Microbiota intestinal

### Por Que Importa?

- **95% da serotonina** (neurotransmissor da felicidade) é produzida no intestino
- **50% da dopamina** também tem origem intestinal
- Trilhões de bactérias intestinais influenciam nossa saúde mental

## Nutrientes Essenciais Para o Cérebro

### 1. Ômega-3

**Função:** Componente estrutural das membranas cerebrais, anti-inflamatório.

**Benefícios:**
- Reduz sintomas de depressão
- Melhora função cognitiva
- Protege contra declínio mental

**Fontes:**
- Peixes gordos (salmão, sardinha, atum)
- Linhaça e chia
- Nozes
- Suplementos de óleo de peixe

### 2. Vitaminas do Complexo B

**Função:** Produção de neurotransmissores, metabolismo energético cerebral.

**Vitamina B12:**
- Deficiência ligada à depressão
- Essencial para função nervosa
- Fontes: carnes, ovos, laticínios

**Vitamina B6:**
- Síntese de serotonina e dopamina
- Fontes: banana, batata, frango

**Ácido Fólico (B9):**
- Prevenção de depressão
- Fontes: vegetais verdes, leguminosas

### 3. Triptofano

**Função:** Precursor da serotonina.

**Fontes:**
- Ovos
- Queijos
- Nozes
- Sementes
- Banana
- Chocolate amargo

### 4. Magnésio

**Função:** Relaxamento muscular, regulação do humor.

**Benefícios:**
- Reduz ansiedade
- Melhora qualidade do sono
- Regula cortisol (hormônio do estresse)

**Fontes:**
- Vegetais verdes escuros
- Nozes e sementes
- Abacate
- Banana
- Cacau

### 5. Vitamina D

**Função:** Regulação de neurotransmissores.

**Deficiência associada a:**
- Depressão sazonal
- Transtornos de humor
- Fadiga

**Fontes:**
- Exposição solar (principal)
- Peixes gordos
- Ovos
- Cogumelos
- Suplementação quando necessário

## Alimentos que Melhoram o Humor

### Alimentos Ricos em Probióticos

Melhoram a microbiota intestinal:
- Iogurte natural
- Kefir
- Chucrute
- Kimchi
- Kombucha

### Alimentos Ricos em Prebióticos

Alimentam as bactérias boas:
- Alho
- Cebola
- Banana verde
- Aveia
- Aspargos

### Antioxidantes

Protegem o cérebro do estresse oxidativo:
- Frutas vermelhas
- Chocolate amargo (70%+ cacau)
- Chá verde
- Cúrcuma
- Frutas cítricas

## Alimentos que Prejudicam a Saúde Mental

### 1. Açúcar Refinado

**Efeitos:**
- Picos e quedas de glicemia
- Inflamação cerebral
- Redução de BDNF (fator neurotrófico)
- Alterações de humor bruscas

### 2. Alimentos Ultraprocessados

**Problemas:**
- Pobres em nutrientes
- Ricos em aditivos químicos
- Inflamação sistêmica
- Desequilíbrio da microbiota

### 3. Excesso de Cafeína

**Quando em excesso:**
- Ansiedade aumentada
- Insônia
- Irritabilidade
- Dependência

### 4. Álcool

**Impactos:**
- Depressor do sistema nervoso
- Interfere no sono
- Depleta vitaminas do complexo B
- Desidratação cerebral

### 5. Gorduras Trans

**Consequências:**
- Inflamação cerebral
- Prejuízo na função cognitiva
- Aumento de risco de depressão

## Padrões Alimentares e Saúde Mental

### Dieta Mediterrânea

**Benefícios comprovados:**
- Redução de 33% no risco de depressão
- Melhora cognitiva
- Proteção contra declínio mental

**Componentes:**
- Azeite de oliva
- Peixes
- Frutas e vegetais
- Grãos integrais
- Nozes

### Dieta DASH

Originalmente para hipertensão, também beneficia a saúde mental:
- Rica em frutas e vegetais
- Laticínios com baixo teor de gordura
- Grãos integrais
- Proteínas magras

## Estratégias Práticas

### 1. Regularidade nas Refeições

- Coma a cada 3-4 horas
- Evite jejuns prolongados
- Mantenha glicemia estável

### 2. Hidratação

- Desidratação afeta humor e concentração
- 2-3 litros de água por dia
- Chás de ervas (camomila, melissa)

### 3. Redução de Inflamação

- Aumente ômega-3
- Reduza ômega-6 e gorduras trans
- Consuma mais antioxidantes
- Limite açúcar e processados

### 4. Cuidado com o Intestino

- Probióticos e prebióticos diários
- Fibras suficientes (25-30g/dia)
- Variedade de alimentos
- Evite antibióticos desnecessários

### 5. Gerenciamento do Estresse

Alimentação não é tudo:
- Exercício físico regular
- Sono de qualidade
- Técnicas de relaxamento
- Conexões sociais

## Sinais de Alerta

Procure ajuda profissional se:
- Mudanças drásticas no apetite
- Compulsão alimentar frequente
- Restrição alimentar extrema
- Alterações de humor persistentes
- Fadiga crônica
- Dificuldade de concentração

## Suplementação

Em alguns casos, pode ser necessária:

**Sempre com orientação:**
- Ômega-3 (EPA/DHA)
- Vitamina D
- Complexo B
- Magnésio
- Probióticos

## Conclusão

A alimentação é uma ferramenta poderosa para cuidar da saúde mental. Pequenas mudanças consistentes podem ter um grande impacto no seu humor, energia e bem-estar emocional.

**Lembre-se:** Cada pessoa é única. O que funciona para um pode não funcionar para outro. Um acompanhamento nutricional personalizado considera suas necessidades individuais, preferências e objetivos.

**Quer descobrir como otimizar sua alimentação para melhorar sua saúde mental? Agende uma consulta e vamos criar juntos um plano alimentar que nutre corpo e mente!**
    `,
  },
];

export const getArticleById = (id: string): BlogArticle | undefined => {
  return blogArticles.find((article) => article.id === id);
};

export const getRelatedArticles = (currentId: string, limit: number = 3): BlogArticle[] => {
  return blogArticles
    .filter((article) => article.id !== currentId)
    .slice(0, limit);
};
