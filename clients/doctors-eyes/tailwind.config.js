module.exports = {
  mode: "jit",
  content: ["./src/**/*.html"],
  theme: {
    // fontFamily: {
    //   sans: bodyFontFamily,
    //   heading: headingFontFamily,
    //   "heading-bold": headingBoldFontFamily,
    //   subheading: subHeadingFontFamily,
    //   "subheading-medium": subHeadingMediumFontFamily,
    //   lead: leadFontFamily,
    // },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "991px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "32px",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      // colors: {
      //   "semi-white": "#eee8e1",
      //   "dark-500": "#1b2022",
      //   "purple-400": "#AD8AFF",
      //   "purple-500": "#825AFF",
      //   "purple-600": "#6540da",
      //   "yellow-400": "#efd475",
      //   "yellow-500": "#edc94a",
      //   "yellow-600": "#d2b343",
      //   "sky-500": "#75a8ff",
      //   "sky-600": "#8eb8ff",
      //   "rose-400": "#fa6898",
      //   "rose-500": "#e35484",
      //   "red-500": "#e8002d",
      //   "green-500": "#249775",
      // },
      // backgroundImage: {
      //   "body-gradient":
      //     "linear-gradient(to top, #484b4b 0%, #252a2b 53%, #1b2022 100%)",
      //   "footer-gradient": "linear-gradient(113deg, #825aff 1%, #483681 92%)",
      // },
      borderRadius: {
        DEFAULT: "16px",
        "xl": "60px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
