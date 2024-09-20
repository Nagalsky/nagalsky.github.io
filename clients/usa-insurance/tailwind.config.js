const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "930px",
      xl: "1140px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        default: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          500: "#5496d6",
          700: "#355472",
          900: "#1b4350",
          500: "#cdd6e3",
          700: "#8994a3",
          800: "#868686",
          900: "#969696",
        },
        gray: {
          500: "#cdd6e3",
          700: "#8994a3",
          800: "#868686",
          900: "#969696",
        },
      },
    },
  },
};
