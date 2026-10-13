function SectionTitle({ eyebrow, title, text, align = "center" }) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mx-auto flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-cocoa sm:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-base leading-7 text-cocoa/70 sm:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
