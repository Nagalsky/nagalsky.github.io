const bodyFontFamily = '"Montserrat", sans-serif';

module.exports = {
  mode: "jit",
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      sans: [bodyFontFamily],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
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
      primary: "#061826",
      blue300: "#deeaf4",
      blue500: "#2191fb",
      silver500: "#9ba3a8",
      success500: "#0cca4a",
      danger500: "#fb2121",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "991px",
      xl: "1199px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
