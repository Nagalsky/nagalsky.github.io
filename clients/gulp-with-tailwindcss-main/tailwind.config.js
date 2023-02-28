const options = require("./config"); //options from config.js
const defaultTheme = require("tailwindcss/defaultTheme");

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  lineClamp: require("@tailwindcss/line-clamp"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Shell", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          gray: {
            DEFAULT: "#71767F",
            300: "#F5F5F5",
            400: "#F6F6F9",
            500: "#E9E9ED",
            600: "#404040",
            700: "#292929",
          },
          primary: "#FBCE07",
          secondary: "#DD1D21",
          tirnary: "#0097BB",
          blue: "#002E6D",
        },
      },
      boxShadow: {
        nav: "0px 4px 5px rgba(0, 0, 0, 0.07), 0px 1px 10px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.1)",
        box: "0px 0px 2px rgba(29, 29, 37, 0.07), 0px 2px 2px rgba(29, 29, 37, 0.06), 0px 1px 3px rgba(29, 29, 37, 0.1)",
        card: "0px 2px 10px rgba(51, 51, 51, 0.1035)",
      },
    },
  },
  plugins: plugins,
};
