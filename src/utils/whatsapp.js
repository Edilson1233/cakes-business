export function normaliseWhatsappNumber(number = "") {
  return number.replace(/[^\d]/g, "");
}

export function createWhatsappUrl(number, message) {
  const cleanNumber = normaliseWhatsappNumber(number);

  if (!cleanNumber) {
    return "";
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message.trim())}`;
}

export function buildProductMessage(productName) {
  return `Olá, Zulmira! 😊 Vi o teu catálogo e gostaria de saber mais sobre ${productName}.`;
}

export function getTodayInputValue() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return localDate.toISOString().split("T")[0];
}

export function formatDateForMessage(value) {
  if (!value) {
    return "";
  }

  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

export function buildOrderMessage(form) {
  const observations = form.notes?.trim()
    ? `\n📝 Observações:\n${form.notes.trim()}\n`
    : "";

  return `🎂 NOVO PEDIDO — ZULMIRA CAKES

Olá, Zulmira! Gostaria de solicitar
um orçamento.

👤 Nome: ${form.name.trim()}
🎂 Tipo: ${form.cakeType}
🍫 Sabor: ${form.flavour.trim()}
👥 Pessoas/Tamanho: ${form.size.trim()}
📅 Data: ${formatDateForMessage(form.date)}
🎨 Tema: ${form.theme.trim() || "A confirmar"}
${observations}
Aguardo o teu orçamento.
Obrigada! ❤️`;
}
