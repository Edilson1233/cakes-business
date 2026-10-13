import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Delícias", href: "#delicias" },
  { label: "Galeria", href: "#galeria" },
  { label: "Encomendar", href: "#encomendar" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "border-b border-cocoa/10 bg-cream/90 shadow-sm backdrop-blur-xl"
          : "bg-cream/65 backdrop-blur-md"
      }`}
    >
      <nav className="section-shell flex min-h-20 items-center justify-between py-3">
        <Logo />

        <div className="hidden items-center gap-2 rounded-full border border-cocoa/10 bg-white/60 p-1 shadow-sm backdrop-blur md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-bold text-cocoa/75 transition hover:bg-blush/60 hover:text-cocoa"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-cocoa/10 bg-white/80 text-cocoa shadow-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <X aria-hidden="true" size={22} />
          ) : (
            <Menu aria-hidden="true" size={22} />
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-cocoa/10 bg-cream/95 px-4 pb-5 pt-2 shadow-soft backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-2xl px-4 py-3 text-base font-bold text-cocoa transition hover:bg-blush/70"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
