const bodyFontFamily = '"Montserrat", sans-serif';

module.exports = {
  mode: "jit", // Just-In-Time Compiler
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      body: bodyFontFamily,
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
      success: "#0cca4a",
      primary: "#2191fb",
      dark: "#061826",
      orange: "#f68e5f",
      silver50: "#9ba3a8",
      silver75: "#b2c5d3",
      silver100: "#bac2c8",
      silver150: "#b7c9d6",
      silver200: "#f7f9fc",
      silver300: "#deeaf4",
      silver400: "#dbeaff",
      silver500: "#969ea5",
      warning: "#ffc439",
      warning600: "#ffba39",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    boxShadow: {
      sm: "0 5px 15px 0 rgba(186, 194, 200, 0.25)",
      DEFAULT: "0 0 10px 0 rgba(6, 24, 38, 0.2)",
      md: "0 4px 15px 0 rgba(0, 0, 0, 0.1)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/custom-forms"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "100%",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1150px",
          },
        },
      });
    },
  ],
};
