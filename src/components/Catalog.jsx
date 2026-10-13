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
            title="Um catálogo simples, bonito e pronto para crescer."
            text="Os preços ficam sob consulta até que a Zulmira confirme valores, tamanhos e sabores disponíveis."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
