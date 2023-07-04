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
      lg: "970px",
      xl: "1045px",
    },
    extend: {
      fontFamily: {
        default: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          400: "#3f16b5",
          500: "#1C0758",
        },
        sky: {
          500: "#85e2ff",
        },
        pink: {
          200: "#d1c6f0",
          500: "#B70284",
        },
        muted: {
          500: "#262626",
        },
      },
    },
  },
};
