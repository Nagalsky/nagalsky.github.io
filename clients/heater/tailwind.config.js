const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "930px",
      xl: "1010px",
    },
    extend: {
      fontFamily: {
        default: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          300: "#fffaf2",
          500: "#ea5e0e",
        },
        yellow: {
          500: "#eba605",
        },
        green: {
          500: "#4bae4f",
          700: "#2e6f31",
        },
        gray: {
          100: "#f5f5f5",
          200: "#f6f6f6",
          300: "#e1e1e1",
          400: "#c0c0c0",
          500: "#d9d9d9",
          600: "#7D7D7D",
          900: "#261b1b",
        },
      },
    },
  },
};
