import { Heart, Leaf, Palette } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

const highlights = [
  {
    icon: Heart,
    title: "Carinho",
    text: "Cada pedido é pensado para valorizar o momento de quem celebra.",
  },
  {
    icon: Palette,
    title: "Criatividade",
    text: "Temas, cores e detalhes podem ser conversados antes da confirmação.",
  },
  {
    icon: Leaf,
    title: "Toque artesanal",
    text: "Um processo cuidado, simples e focado em sabor e apresentação.",
  },
];

function About() {
  return (
    <section
      id="sobre"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="about-title"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-beige p-2 shadow-soft">
            <img
              src="/images/cakes/zulmira/zulmira-cake-11.jpeg"
              alt="Bolo artesanal verde com detalhes dourados produzido pela Zulmira Cakes."
              className="h-[420px] w-full rounded-[1.55rem] object-cover object-[center_42%] sm:h-[540px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionTitle
            eyebrow="Sobre a marca"
            title="Um toque de carinho em cada fatia."
            align="left"
            text="Na Zulmira Cakes, acreditamos que cada celebração merece algo especial. Por isso, cada bolo é preparado com atenção aos detalhes, criatividade e muito carinho."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-cocoa/10 bg-cream p-5 shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-sage">
                  <item.icon aria-hidden="true" size={21} />
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-cocoa">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-cocoa/68">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
