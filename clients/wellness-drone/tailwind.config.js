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
      md: "768px",
      lg: "952px",
    },
    extend: {
      fontFamily: {
        default: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          200: "#f9f9f9",
          500: "#3a3a3a",
        },
        green: {
          500: "#17cea2",
          600: "#16b992",
        },
      },
    },
  },
};
