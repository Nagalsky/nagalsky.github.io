const bodyFontFamily = '"Raleway", sans-serif';

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
      orange: "#ffa200",
      orange500: "#ff9f39",
      mustard: "#fdf8e2",
      red: "#c80000",
      gray: "#696969",
      gray500: "#989898",
      silver: "#767676",
    },
    fontWeight: {
      normal: 400,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "930px",
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
