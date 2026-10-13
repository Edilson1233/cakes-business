import { MessageCircle } from "lucide-react";
import { business } from "../config/business.js";
import { createWhatsappUrl } from "../utils/whatsapp.js";

function FloatingWhatsApp() {
  const whatsappUrl = createWhatsappUrl(
    business.whatsapp,
    "Olá, Zulmira! Gostaria de fazer uma encomenda.",
  );

  if (!whatsappUrl) {
    return null;
  }

  return (
    <a
      href={whatsappUrl}
      className="focus-ring fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-cocoa shadow-lift transition hover:-translate-y-1 hover:bg-white"
      aria-label="Conversar no WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle aria-hidden="true" size={25} />
    </a>
  );
}

export default FloatingWhatsApp;
