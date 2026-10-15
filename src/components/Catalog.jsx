import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

function Catalog() {
  return (
    <section
      id="delicias"
      className="bg-cream py-20 sm:py-24"
      aria-labelledby="catalog-title"
    >
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="As nossas delícias"
            title="Um bolo para cada ocasião."
            text="Descobre as nossas categorias e fala connosco para combinar o sabor, o tamanho e a decoração."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.05} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
