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
      orange: "#ff9600",
      gray: "#424242",
      gray500: "#969696",
      silver: "#dcdcdc",
      yellow: "#fdf1d4",
      yellow500: "#f9fe6e",
      red: "#c80000",
      green: "#14ef00",
      sky: "#76c8dc",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
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
