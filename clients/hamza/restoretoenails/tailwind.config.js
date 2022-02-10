const bodyFontFamily = '"Open Sans", sans-serif';

module.exports = {
  mode: "jit", // Just-In-Time Compiler
  content: ["./src/**/*.html"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [bodyFontFamily],
      serif: [bodyFontFamily],
      mono: [bodyFontFamily],
      display: [bodyFontFamily],
      body: [bodyFontFamily],
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
      dark: "#212529",
      gray: "#999999",
      orange: "#ff8400",
      blue: "#007bff",
      blue500: "#0A1078",
      blue600: "#201f37",
      red: "#F90000",
      red500: "#dc2626",
      dark100: "#292d32",
      gray100: "#F0F0F0",
      gray200: "#E1E1E1",
      gray300: "#C1C4CA",
      yellow500: "#FFAC3D",
      green500: "#53B089",
      green600: "#00464A",
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    screens: {
      sm: "540px",

      md: "768px",

      lg: "930px",

      xl: "1020px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
