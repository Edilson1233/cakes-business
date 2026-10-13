import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import { business } from "../config/business.js";
import { createWhatsappUrl } from "../utils/whatsapp.js";
import Reveal from "./Reveal.jsx";

function Hero() {
  const whatsappUrl = createWhatsappUrl(
    business.whatsapp,
    "Olá, Zulmira! Gostaria de conversar sobre uma encomenda de bolo.",
  );

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-warm-mesh pb-14 pt-28 sm:pt-32 lg:pb-16"
      aria-labelledby="hero-title"
    >
      <div className="section-shell grid items-center gap-10 lg:min-h-[82svh] lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose/20 bg-white/70 px-4 py-2 text-sm font-bold text-cocoa shadow-sm backdrop-blur">
            <Sparkles aria-hidden="true" size={16} className="text-rose" />
            Confeitaria artesanal por encomenda
          </div>

          <h1
            id="hero-title"
            className="max-w-3xl font-display text-4xl font-extrabold leading-[1.04] text-cocoa sm:text-6xl lg:text-7xl"
          >
            Bolos feitos com carinho para momentos inesquecíveis.
          </h1>

          <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-1.5 shadow-soft lg:hidden">
            <img
              src="/images/cakes/zulmira/zulmira-cake-14.jpeg"
              alt="Bolo de aniversário artesanal produzido pela Zulmira Cakes."
              className="h-64 w-full rounded-[1.15rem] object-cover object-[center_36%] min-[460px]:h-[23rem] sm:h-[26rem]"
            />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-cocoa/78">
            Transformamos os teus momentos especiais em doces memórias, com
            bolos personalizados, deliciosos e preparados com dedicação.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl || "#encomendar"}
              className="button-primary"
              aria-label={
                whatsappUrl
                  ? "Encomendar pelo WhatsApp"
                  : "Ir para o formulário de encomenda"
              }
            >
              <MessageCircle aria-hidden="true" size={18} />
              Encomendar pelo WhatsApp
            </a>
            <a href="#delicias" className="button-secondary">
              Ver as nossas delícias
              <ArrowDown aria-hidden="true" size={18} />
            </a>
          </div>

          {!business.whatsapp && (
            <p className="mt-4 max-w-xl text-sm leading-6 text-cocoa/60">
              O número de WhatsApp ainda não foi configurado. O pedido será
              preparado para envio assim que o contacto real for inserido.
            </p>
          )}
        </Reveal>

        <Reveal delay={0.12} className="relative hidden lg:block">
          <div className="absolute -left-4 top-8 hidden rounded-full bg-mint px-4 py-2 font-script text-3xl text-sage shadow-sm sm:block">
            doce cuidado
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2 shadow-lift">
            <img
              src="/images/cakes/zulmira/zulmira-cake-14.jpeg"
              alt="Bolo de aniversário artesanal produzido pela Zulmira Cakes."
              className="h-[420px] w-full rounded-[1.55rem] object-cover object-[center_52%] sm:h-[520px] lg:h-[610px]"
            />
          </div>
          <div className="absolute -bottom-5 right-4 rounded-3xl border border-cocoa/10 bg-white/90 p-4 shadow-soft backdrop-blur">
            <p className="text-sm font-bold text-cocoa">Feito sob encomenda</p>
            <p className="mt-1 text-sm text-cocoa/65">
              detalhes confirmados pelo WhatsApp
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
