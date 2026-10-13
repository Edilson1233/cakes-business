import { Instagram, Music2 } from "lucide-react";
import { business } from "../config/business.js";
import Logo from "./Logo.jsx";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Delícias", href: "#delicias" },
  { label: "Galeria", href: "#galeria" },
  { label: "Encomendar", href: "#encomendar" },
];

function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { label: "Instagram", href: business.instagram, icon: Instagram },
    { label: "TikTok", href: business.tiktok, icon: Music2 },
  ].filter((item) => item.href);

  return (
    <footer className="bg-[#2f1d19] py-10 text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
              Bolos artesanais preparados com dedicação para celebrações,
              encomendas especiais e pequenos momentos doces.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-blush">Links rápidos</h2>
            <div className="mt-4 grid gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-blush">Redes sociais</h2>
            {socialLinks.length > 0 ? (
              <div className="mt-4 flex gap-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-cocoa"
                    aria-label={item.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <item.icon aria-hidden="true" size={18} />
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-6 text-white/60">
                Instagram e TikTok serão adicionados quando forem
                disponibilizados.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Zulmira Cakes — Feito com carinho.</p>
          <p>Website desenvolvido por {business.developer}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
