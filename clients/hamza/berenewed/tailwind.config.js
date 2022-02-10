const bodyFontFamily = '"Montserrat", sans-serif';

module.exports = {
  mode: "jit", // Just-In-Time Compiler
  content: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
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
      red: "#ff0000",
      silver: "#f0f0f0",
      sky: "#3E87C1",
      gold: "#fdd424",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    // screens: {
    //   sm: "540px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "768px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "930px",
    // },
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
