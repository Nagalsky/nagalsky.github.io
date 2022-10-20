module.exports = {
  mode: "jit",
  content: ["./src/**/*.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue", "system-ui"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "540px",
      md: "770px",
      lg: "990px",
      xl: "1200px",
      "2xl": "1350px",
    },
    extend: {
      colors: {
        "gray-500": "#666666",
        "gray-600": "#313131",
        "gray-700": "#191919",
        "gray-800": "#0d0d0d",
      },
      borderRadius: {
        DEFAULT: "10px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
