const bodyFontFamily = '"Arimo", sans-serif';

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
      red300: "#c12e2a",
      red: "#F90000",
      red400: "#d9534f",
      red500: "#c9302c",
      dark: "#404040",
      dark100: "#292d32",
      gray50: "#eceeef",
      gray100: "#F0F0F0",
      gray200: "#E1E1E1",
      gray300: "#C1C4CA",
      blue500: "#0A1078",
      blue600: "#201f37",
      yellow500: "#FFAC3D",
      green500: "#53B089",
      green600: "#00464A",
      link500: "#0275d8",
      link600: "#2e72ac",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "900px",
    },
    extend: {
      animation: {
        blink: "scale 1s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
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
