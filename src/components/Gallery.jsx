import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { galleryImages } from "../data/products.js";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % galleryImages.length,
    );

  const showPrevious = () =>
    setActiveIndex((current) =>
      current === null
        ? galleryImages.length - 1
        : (current - 1 + galleryImages.length) % galleryImages.length,
    );

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section
      id="galeria"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="gallery-title"
    >
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Galeria de trabalhos"
            title="Alguns trabalhos para inspirar a tua próxima celebração."
            text="A galeria está organizada para crescer facilmente com novas fotografias confirmadas pela Zulmira."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image.id} delay={index * 0.04}>
              <button
                type="button"
                className="focus-ring group relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-beige text-left shadow-sm sm:aspect-[4/3]"
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/75 to-transparent p-4 text-sm font-bold text-white">
                  {image.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-cocoa/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da fotografia"
        >
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              className="focus-ring absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full bg-white text-cocoa"
              aria-label="Fechar galeria"
              onClick={() => setActiveIndex(null)}
            >
              <X aria-hidden="true" size={22} />
            </button>

            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[78svh] w-full rounded-3xl object-contain shadow-lift"
            />
            <p className="mt-4 text-center text-sm font-bold text-white">
              {activeImage.caption}
            </p>

            <button
              type="button"
              className="focus-ring absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-cocoa"
              aria-label="Fotografia anterior"
              onClick={showPrevious}
            >
              <ChevronLeft aria-hidden="true" size={24} />
            </button>
            <button
              type="button"
              className="focus-ring absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-cocoa"
              aria-label="Fotografia seguinte"
              onClick={showNext}
            >
              <ChevronRight aria-hidden="true" size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
