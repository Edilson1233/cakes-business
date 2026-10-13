import { CalendarDays, ClipboardCheck, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { business } from "../config/business.js";
import { cakeTypes, flavourSuggestions } from "../data/products.js";
import {
  buildOrderMessage,
  createWhatsappUrl,
  getTodayInputValue,
} from "../utils/whatsapp.js";
import Reveal from "./Reveal.jsx";
import SectionTitle from "./SectionTitle.jsx";

const initialForm = {
  name: "",
  cakeType: "Aniversário",
  flavour: "",
  size: "",
  date: "",
  theme: "",
  notes: "",
};

function OrderForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const today = useMemo(() => getTodayInputValue(), []);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus("");
  }

  function validate() {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Indica o teu nome.";
    }

    if (!form.flavour.trim()) {
      nextErrors.flavour = "Indica o sabor ou a tua preferência.";
    }

    if (!form.size.trim()) {
      nextErrors.size = "Indica o tamanho ou número de pessoas.";
    }

    if (!form.date) {
      nextErrors.date = "Escolhe a data pretendida.";
    } else if (form.date < today) {
      nextErrors.date = "A data não pode estar no passado.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Revê os campos assinalados antes de enviar.");
      return;
    }

    const message = buildOrderMessage(form);
    const whatsappUrl = createWhatsappUrl(business.whatsapp, message);

    if (!whatsappUrl) {
      setStatus(
        "O WhatsApp real ainda não está configurado. Actualiza src/config/business.js para activar o envio.",
      );
      return;
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("Pedido preparado para WhatsApp.");
  }

  return (
    <section
      id="encomendar"
      className="bg-cream py-20 sm:py-24"
      aria-labelledby="order-title"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <Reveal>
          <div className="sticky top-28">
            <SectionTitle
              eyebrow="Personaliza a tua encomenda"
              title="Conta-nos a tua ideia e recebe um orçamento."
              align="left"
              text="O formulário apenas organiza a mensagem para WhatsApp. Nenhum dado é guardado no navegador ou em servidores."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <ClipboardCheck
                  aria-hidden="true"
                  className="text-rose"
                  size={24}
                />
                <p className="mt-3 text-sm leading-6 text-cocoa/70">
                  Preenche os detalhes principais para facilitar a conversa e
                  evitar trocas longas de mensagens.
                </p>
              </div>
              <div className="rounded-3xl bg-mint p-5 shadow-sm">
                <CalendarDays
                  aria-hidden="true"
                  className="text-sage"
                  size={24}
                />
                <p className="mt-3 text-sm leading-6 text-cocoa/70">
                  Datas passadas ficam bloqueadas para manter os pedidos claros.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            className="rounded-[2rem] border border-cocoa/10 bg-white p-5 shadow-soft sm:p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-cocoa">
                  Nome do cliente *
                </span>
                <input
                  className="input-field"
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  autoComplete="name"
                  placeholder="Ex.: Ana"
                  required
                />
                {errors.name && (
                  <span className="mt-2 block text-sm text-rose">
                    {errors.name}
                  </span>
                )}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-cocoa">
                  Tipo de bolo *
                </span>
                <select
                  className="input-field"
                  name="cakeType"
                  value={form.cakeType}
                  onChange={updateField}
                >
                  {cakeTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-cocoa">
                  Sabor *
                </span>
                <input
                  className="input-field"
                  name="flavour"
                  value={form.flavour}
                  onChange={updateField}
                  list="flavour-suggestions"
                  placeholder="Escreve a tua preferência"
                  required
                />
                <datalist id="flavour-suggestions">
                  {flavourSuggestions.map((flavour) => (
                    <option key={flavour} value={flavour} />
                  ))}
                </datalist>
                {errors.flavour && (
                  <span className="mt-2 block text-sm text-rose">
                    {errors.flavour}
                  </span>
                )}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-cocoa">
                  Tamanho ou número de pessoas *
                </span>
                <input
                  className="input-field"
                  name="size"
                  value={form.size}
                  onChange={updateField}
                  placeholder="Ex.: 15 pessoas"
                  required
                />
                {errors.size && (
                  <span className="mt-2 block text-sm text-rose">
                    {errors.size}
                  </span>
                )}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-cocoa">
                  Data pretendida *
                </span>
                <input
                  className="input-field"
                  type="date"
                  name="date"
                  value={form.date}
                  min={today}
                  onChange={updateField}
                  required
                />
                {errors.date && (
                  <span className="mt-2 block text-sm text-rose">
                    {errors.date}
                  </span>
                )}
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-cocoa">
                  Tema ou decoração
                </span>
                <input
                  className="input-field"
                  name="theme"
                  value={form.theme}
                  onChange={updateField}
                  placeholder="Ex.: rosa e dourado, flores, personagem..."
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-cocoa">
                  Observações adicionais
                </span>
                <textarea
                  className="input-field min-h-32 resize-y"
                  name="notes"
                  value={form.notes}
                  onChange={updateField}
                  placeholder="Detalhes importantes, alergias, entrega ou levantamento..."
                />
              </label>
            </div>

            <button
              type="submit"
              className="button-primary mt-7 w-full sm:w-auto"
            >
              <Send aria-hidden="true" size={18} />
              Enviar pedido pelo WhatsApp
            </button>

            {status && (
              <p className="mt-4 rounded-2xl bg-beige px-4 py-3 text-sm font-semibold text-cocoa/75">
                {status}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default OrderForm;
