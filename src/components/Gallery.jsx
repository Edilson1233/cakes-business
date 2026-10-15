import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cakeCategories, galleryImages } from "../data/gallery.js";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButton = useRef(null);
  const visibleCategories = cakeCategories.filter(
    (category) =>
      selectedCategory === "all" || category.id === selectedCategory,
  );
  const visibleImages = galleryImages.filter(
    (image) =>
      selectedCategory === "all" || image.category === selectedCategory,
  );
  const activeImage = activeIndex === null ? null : visibleImages[activeIndex];

  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % visibleImages.length,
    );

  const showPrevious = () =>
    setActiveIndex((current) =>
      current === null
        ? visibleImages.length - 1
        : (current - 1 + visibleImages.length) % visibleImages.length,
    );

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const trigger = document.activeElement;
    closeButton.current?.focus();
    return () => trigger?.focus();
  }, [activeIndex === null]);

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

      if (event.key === "Tab") {
        const buttons = closeButton.current
          ?.closest('[role="dialog"]')
          ?.querySelectorAll("button");
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, selectedCategory]);

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
            text="Explora os nossos bolos por categoria e abre as fotografias para ver cada detalhe."
          />
        </Reveal>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filtrar fotografias por categoria"
        >
          {[{ id: "all", name: "Todas" }, ...cakeCategories].map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={selectedCategory === category.id}
              aria-controls="gallery-groups"
              className={`focus-ring min-h-11 rounded-full border px-4 py-2 text-sm font-bold transition ${selectedCategory === category.id ? "border-cocoa bg-cocoa text-white" : "border-cocoa/15 bg-cream text-cocoa hover:border-rose hover:text-rose"}`}
              onClick={() => {
                setActiveIndex(null);
                setSelectedCategory(category.id);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-cocoa/65" role="status">
          {visibleImages.length}{" "}
          {visibleImages.length === 1 ? "fotografia" : "fotografias"}
        </p>

        <div id="gallery-groups" className="mt-10 space-y-12">
          {visibleCategories.map((category) => (
            <section
              key={category.id}
              aria-labelledby={`gallery-${category.id}`}
            >
              <h3
                id={`gallery-${category.id}`}
                className="font-display text-3xl font-bold text-cocoa"
              >
                {category.name}
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {visibleImages
                  .filter((image) => image.category === category.id)
                  .map((image, index) => (
                    <Reveal key={image.id} delay={Math.min(index, 5) * 0.04}>
                      <button
                        type="button"
                        className="focus-ring group relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-beige text-left shadow-sm sm:aspect-[4/3]"
                        onClick={() =>
                          setActiveIndex(visibleImages.indexOf(image))
                        }
                        aria-label={`Ampliar: ${image.caption}`}
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
            </section>
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
              ref={closeButton}
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
