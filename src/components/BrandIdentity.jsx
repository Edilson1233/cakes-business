import { useState } from "react";
import { brandIdentity } from "../config/brand.js";

const imageSizes = {
  full: "h-14 max-w-[15rem] sm:max-w-[18rem]",
  compact: "h-12 max-w-[4rem]",
};

const textTones = {
  default: {
    name: "text-cocoa",
    tagline: "text-rose",
  },
  light: {
    name: "text-white",
    tagline: "text-blush",
  },
};

function BrandIdentity({
  variant = "full",
  tone = "default",
  className = "",
  fallbackClassName = "",
}) {
  const [failed, setFailed] = useState(false);
  const selectedTone = textTones[tone] ?? textTones.default;
  const isCompact = variant === "compact";
  const logoSource = isCompact
    ? brandIdentity.assets.compact
    : brandIdentity.assets.full;

  if (logoSource && !failed) {
    return (
      <span
        className={`inline-flex shrink-0 items-center ${imageSizes[variant]} ${className}`}
      >
        <img
          src={logoSource}
          alt={brandIdentity.alt}
          className="block h-full w-auto max-w-full object-contain"
          onError={() => setFailed(true)}
        />
      </span>
    );
  }

  if (isCompact) {
    return <span className="sr-only">{brandIdentity.name}</span>;
  }

  return (
    <span
      className={`inline-flex shrink-0 flex-col leading-none ${className} ${fallbackClassName}`}
    >
      <span className={`font-display text-2xl font-bold ${selectedTone.name}`}>
        {brandIdentity.name}
      </span>
      <span className={`mt-1 font-script text-xl ${selectedTone.tagline}`}>
        {brandIdentity.tagline}
      </span>
    </span>
  );
}

export default BrandIdentity;
