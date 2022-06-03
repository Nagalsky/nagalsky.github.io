const bodyFontFamily = '"Inter", sans-serif';

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
      black: "#000000",
      blue300: "#e5f2ff",
      blue500: "#057cff",
      blue600: "#194ef8",
      dark300: "#1e2833",
      dark500: "#11142d",
      gray300: "#c6c6c6",
      gray400: "#9a9ab0",
      gray500: "#646464",
      gray600: "#333646",
      green300: "#dcf5f2",
      green500: "#14b8a6",
      red500: "#fa4f58",
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
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
