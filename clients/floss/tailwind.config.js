const fontBlack = "Avenir-Black";
const fontRoman = "Avenir-Roman";
const fontOblique = "Avenir-Oblique";
const fontHeavy = "Avenir-Heavy";
const fontMedium = "Avenir-Medium";

module.exports = {
  mode: "jit", // Just-In-Time Compiler
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      base: [fontRoman],
      black: [fontBlack],
      oblique: [fontOblique],
      heavy: [fontHeavy],
      medium: [fontMedium],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: "#061826",
      blue: "#2191fb",
      red: "#fb2121",
      green: "#0cca4a",
      silver: "#f7f9fc",
      "silver-300": "#9ba3a8",
      "silver-400": "#d9d9d9",
      gray: "#bac2c8",
    },
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "930px",

      xl: "1140px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
