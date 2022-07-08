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
      blue400: "#dae7f4",
      blue500: "#057cff",
      blue600: "#194ef8",
      blue700: "#202246",
      blue800: "#212940",
      dark300: "#1e2833",
      dark500: "#11142d",
      gray50: "#f1f0fb",
      gray75: "#eaeaea",
      gray100: "#d9d9d9",
      gray200: "#f9f9fc",
      gray300: "#c6c6c6",
      gray400: "#9a9ab0",
      gray500: "#646464",
      gray600: "#333646",
      gray700: "#898989",
      green300: "#dcf5f2",
      green500: "#14b8a6",
      red400: "#f67a6f",
      red500: "#fa4f58",
      dark500: "#323232",
      body: "#f8f8f8",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "991px",
      xl: "1199px",
      xxl: "1650px",
      huge: "2100px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
