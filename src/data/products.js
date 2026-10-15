import { cakeCategories, galleryImages } from "./gallery.js";

export { cakeCategories, galleryImages };

export const products = cakeCategories.map((category) => {
  const images = galleryImages.filter(
    (image) => image.category === category.id,
  );
  const cover = images[category.coverIndex];

  return {
    id: category.id,
    name: category.name,
    description: category.description,
    price: "Preço sob consulta",
    image: cover.src,
    imageAlt: cover.alt,
    imagePosition: "center",
  };
});

export const cakeTypes = [
  ...cakeCategories.map((category) => category.name),
  "Outro",
];

export const flavourSuggestions = [
  "Chocolate",
  "Baunilha",
  "Red velvet",
  "Cenoura",
  "Outro sabor a combinar",
];

export const faqItems = [
  {
    question: "Como faço uma encomenda?",
    answer: "Podes enviar o teu pedido directamente pelo WhatsApp.",
  },
  {
    question: "Com quanto tempo de antecedência devo encomendar?",
    answer:
      "O prazo depende do tipo de bolo e da disponibilidade. Consulta-nos para confirmar.",
  },
  {
    question: "É possível personalizar um bolo?",
    answer:
      "Sim! Podes explicar a tua ideia e solicitar um orçamento personalizado.",
  },
  {
    question: "Fazem entregas?",
    answer:
      "As condições de entrega ou levantamento devem ser confirmadas directamente com a Zulmira.",
  },
  {
    question: "Quais são os métodos de pagamento?",
    answer: "Os métodos disponíveis serão confirmados no momento da encomenda.",
  },
];
