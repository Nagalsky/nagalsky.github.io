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
      xl: "1120px",
    },
    extend: {
      fontFamily: {
        default: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          300: "#fffaf2",
          500: "#e83908",
          600: "#e72908",
        },
        yellow: {
          500: "#eba605",
        },
        green: {
          500: "#008100",
        },
        gray: {
          100: "#f5f5f5",
          200: "#f8f8f8",
          300: "#efefef",
          400: "#7f7f7f",
          500: "#dedede",
          600: "#7D7D7D",
          700: "#ececec",
          800: "#e9ecf2",
          900: "#261b1b",
        },
      },
    },
  },
};
