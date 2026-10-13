import { CakeSlice, MessageCircle, PartyPopper } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

const steps = [
  {
    icon: CakeSlice,
    title: "Escolhe o teu bolo",
    text: "Explora as nossas delícias ou imagina o bolo perfeito para a tua ocasião.",
  },
  {
    icon: MessageCircle,
    title: "Faz a encomenda",
    text: "Envia os detalhes através do WhatsApp e solicita um orçamento.",
  },
  {
    icon: PartyPopper,
    title: "Celebra o teu momento",
    text: "Após a confirmação e preparação, combina a entrega ou levantamento do teu bolo.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24" aria-labelledby="how-title">
      <div className="section-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Como encomendar"
            title="Três passos simples para adoçar a tua celebração."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <article className="h-full rounded-[1.75rem] border border-cocoa/10 bg-cream p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-cocoa text-white shadow-sm">
                  <step.icon aria-hidden="true" size={24} />
                </span>
                <p className="mt-6 text-sm font-bold text-rose">
                  Passo {index + 1}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-cocoa">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-cocoa/68">
                  {step.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
