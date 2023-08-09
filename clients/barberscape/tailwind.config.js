const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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
      xl: "1200px",
      "2xl": "1900px",
    },
    extend: {
      fontFamily: {
        default: ["Encode-Sans-Expanded", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: {
          500: "#0f100d",
          900: "#000000",
        },
        orange: {
          300: "#ffe9d4",
          500: "#f87a13",
          600: "#e9610d",
        },
        // sky: {
        //   500: "#85e2ff",
        // },
        // pink: {
        //   200: "#d1c6f0",
        //   500: "#B70284",
        // },
        // muted: {
        //   500: "#262626",
        // },
      },
    },
  },
};
