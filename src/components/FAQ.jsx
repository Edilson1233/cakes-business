import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "../data/products.js";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-cream py-20 sm:py-24" aria-labelledby="faq-title">
      <div className="section-shell max-w-5xl">
        <Reveal>
          <SectionTitle
            eyebrow="Perguntas frequentes"
            title="As dúvidas principais ficam respondidas antes da primeira mensagem."
          />
        </Reveal>

        <div className="mt-10 divide-y divide-cocoa/10 rounded-[2rem] border border-cocoa/10 bg-white shadow-soft">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-[2rem] px-5 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-bold text-cocoa">{item.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    size={20}
                    className={`shrink-0 text-rose transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-6 text-sm leading-7 text-cocoa/70 sm:px-7">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
