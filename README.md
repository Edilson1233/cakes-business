# Zulmira Cakes

Website one page para a marca **Zulmira Cakes**, construído com React, Vite, Tailwind CSS, Framer Motion e Lucide React.

## Estado do MVP

- O site está em português de Moçambique.
- O número de WhatsApp é configurável em `src/config/business.js`.
- As imagens reais dos bolos foram organizadas em `public/images/cakes/zulmira/`.
- Não existe backend, autenticação, base de dados, pagamentos nem armazenamento de dados pessoais.

## Instalação

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

## Build de produção

```bash
npm run build
```

## Personalização

Contactos e dados do negócio:

```js
// src/config/business.js
export const business = {
  name: "Zulmira Cakes",
  whatsapp: "",
  instagram: "",
  tiktok: "",
  location: "",
};
```

Produtos, galeria, tipos de bolo, sabores e FAQ:

```text
src/data/products.js
```

Imagens:

```text
public/images/cakes/
```

Ao adicionares novas fotografias, usa nomes simples e actualiza `src/data/products.js`.

### Categorias e sequência da galeria

As cinco categorias estão definidas em `src/data/gallery.js` e são partilhadas
pelo catálogo, pelos filtros da galeria e pelo formulário de encomenda:

- Bolos de aniversário: 15 fotografias.
- Temas infantis: 6 fotografias.
- Bolos caseiros: 8 fotografias.
- Mini bolos: 2 fotografias.
- Noivado: 1 fotografia avulsa.

Dentro de cada categoria, as fotografias seguem a ordem das entradas do ZIP
enviado. O ZIP de aniversário incluído dentro do ZIP de bolos caseiros foi
ignorado, pois a categoria já tem o seu próprio arquivo. As 15 fotografias
reenviadas que já existiam no projecto reutilizam os ficheiros anteriores;
as 17 novas estão em `public/images/cakes/categories/`. Fotografias distintas
do mesmo bolo foram preservadas. A galeria apresenta cada entrada uma única vez.

O registo da importação está em `docs/gallery-import.json`. Para alterar a
sequência ou acrescentar trabalhos, actualiza `src/data/gallery.js`; o catálogo
e os tipos de bolo acompanham automaticamente as categorias.

Logotipo e marca:

```text
src/config/brand.js
src/components/BrandIdentity.jsx
public/images/branding/
```

O site está preparado para receber o SVG definitivo sem usar um símbolo
provisório. Quando a identidade final estiver pronta, adiciona:

```text
public/images/branding/logo-full.svg
public/images/branding/logo-symbol.svg
public/favicon.svg
```

Depois actualiza `brandIdentity.assets.full` e `brandIdentity.assets.compact`
em `src/config/brand.js`. A navbar e a animação de entrada usam o mesmo
componente reutilizável, preservando as proporções originais do SVG e sem
aplicar círculos, fundos ou molduras adicionais.

## WhatsApp

Insere o número no formato internacional, sem espaços. Exemplo para Moçambique:

```js
whatsapp: "258XXXXXXXXX";
```

Sem um número configurado, os botões não abrem contactos fictícios.

## Publicação

### Vercel

1. Faz push do projecto para um repositório Git.
2. Importa o repositório na Vercel.
3. Usa o comando de build `npm run build`.
4. A pasta de saída é `dist`.

### Firebase Hosting

```bash
npm run build
firebase deploy
```

O ficheiro `firebase.json` já aponta para a pasta `dist`.

## Checklist antes do lançamento

- Confirmar o número real de WhatsApp.
- Adicionar Instagram e TikTok apenas quando existirem.
- Rever a ordem da galeria sempre que forem adicionados novos trabalhos reais.
- Confirmar sabores, tamanhos, preços e condições de entrega.
- Executar `npm run build`.
- Testar o formulário num telemóvel real.
