import BrandIdentity from "./BrandIdentity.jsx";

function Logo({ compact = false, tone = "default" }) {
  return (
    <a
      href="#inicio"
      className="focus-ring inline-flex min-w-0 items-center rounded-md"
      aria-label="Ir para o início"
    >
      <BrandIdentity variant={compact ? "compact" : "full"} tone={tone} />
    </a>
  );
}

export default Logo;
