const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      md: "768px",
      lg: "991px",
      xl: "1230px",
      xxl: "1350px",
    },
    extend: {
      fontFamily: {
        default: ["Sora", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gold: {
          400: "#e4cb65",
          500: "#bb8e31",
        },
        blue: {
          500: "#1549ff",
          600: "#3957be",
        },
      },
    },
  },
};
