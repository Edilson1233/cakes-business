import { MessageCircle } from "lucide-react";
import { business } from "../config/business.js";
import { buildProductMessage, createWhatsappUrl } from "../utils/whatsapp.js";

function ProductCard({ product }) {
  const whatsappUrl = createWhatsappUrl(
    business.whatsapp,
    buildProductMessage(product.name.toLowerCase()),
  );

  function handleDisabledClick(event) {
    if (!whatsappUrl) {
      event.preventDefault();
    }
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-cocoa/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.imageAlt}
          style={{ objectPosition: product.imagePosition }}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-3xl font-bold text-cocoa">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-cocoa/68">
          {product.description}
        </p>
        <p className="mt-5 inline-flex w-fit rounded-full bg-beige px-4 py-2 text-sm font-bold text-cocoa">
          {product.price}
        </p>
        <a
          href={whatsappUrl || "#delicias"}
          className={`mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition ${
            whatsappUrl
              ? "bg-rose text-white hover:bg-cocoa"
              : "cursor-not-allowed bg-cocoa/10 text-cocoa/50"
          }`}
          aria-disabled={!whatsappUrl}
          title={
            !whatsappUrl
              ? "Configura o WhatsApp real em src/config/business.js"
              : undefined
          }
          onClick={handleDisabledClick}
        >
          <MessageCircle aria-hidden="true" size={17} />
          Pedir orçamento
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
