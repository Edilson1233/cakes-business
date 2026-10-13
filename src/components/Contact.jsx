import { Instagram, MessageCircle, Music2 } from "lucide-react";
import { business } from "../config/business.js";
import { createWhatsappUrl } from "../utils/whatsapp.js";
import Reveal from "./Reveal.jsx";

function Contact() {
  const whatsappUrl = createWhatsappUrl(
    business.whatsapp,
    "Olá, Zulmira! Gostaria de conversar sobre o bolo perfeito para a minha celebração.",
  );

  const socialLinks = [
    {
      label: "Instagram",
      href: business.instagram,
      icon: Instagram,
    },
    {
      label: "TikTok",
      href: business.tiktok,
      icon: Music2,
    },
  ].filter((item) => item.href);

  return (
    <section
      id="contactos"
      className="bg-cocoa py-20 text-white sm:py-24"
      aria-labelledby="contact-title"
    >
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-script text-4xl text-blush">Zulmira Cakes</p>
            <h2
              id="contact-title"
              className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl"
            >
              Vamos adoçar o teu próximo momento especial?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              Conta-nos a tua ideia e vamos conversar sobre o bolo perfeito para
              a tua celebração.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl || "#encomendar"}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-extrabold text-cocoa shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
              >
                <MessageCircle aria-hidden="true" size={19} />
                Conversar no WhatsApp
              </a>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-cocoa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <item.icon aria-hidden="true" size={18} />
                  {item.label}
                </a>
              ))}
            </div>

            {!business.whatsapp && (
              <p className="mt-4 text-sm text-white/60">
                Contacto de WhatsApp e redes sociais aguardam confirmação para
                ficarem activos.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
