/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F2",
        blush: "#F7D9D7",
        rose: "#D77A83",
        cocoa: "#422B26",
        beige: "#F3E7DE",
        sage: "#7A8F68",
        mint: "#E6F1E4",
        honey: "#C49A52",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(66, 43, 38, 0.12)",
        lift: "0 20px 50px rgba(66, 43, 38, 0.16)",
      },
      backgroundImage: {
        "warm-mesh":
          "radial-gradient(circle at 10% 20%, rgba(247, 217, 215, 0.8), transparent 28%), radial-gradient(circle at 85% 15%, rgba(230, 241, 228, 0.78), transparent 25%), linear-gradient(135deg, #FFF8F2 0%, #F3E7DE 100%)",
      },
    },
  },
  plugins: [],
};
