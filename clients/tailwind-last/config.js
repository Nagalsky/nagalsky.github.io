module.exports = {
  config: {
    tailwindjs: "./tailwind.config.js",
    port: 9050,
  },
  paths: {
    root: "./",
    src: {
      base: "./src",
      css: "./src/css",
      js: "./src/js",
      img: "./src/img",
      fonts: "./src/fonts",
      video: "./src/video",
    },
    dist: {
      base: "./dist",
      css: "./dist/css",
      js: "./dist/js",
      img: "./dist/img",
      fonts: "./dist/fonts",
      video: "./dist/video",
    },
    build: {
      base: "./build",
      css: "./build/css",
      js: "./build/js",
      img: "./build/img",
      fonts: "./build/fonts",
      video: "./build/video",
    },
  },
};
