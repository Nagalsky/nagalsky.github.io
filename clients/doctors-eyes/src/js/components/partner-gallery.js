var slider = new KeenSlider(
  "#partner-brand-slider",
  {
    loop: true,
    breakpoints: {
      "(min-width: 540px)": {
        slides: { spacing: 32, perView: 6 },
      },
      "(min-width: 768px)": {
        slides: { spacing: 36, perView: 7 },
      },
      "(min-width: 991px)": {
        slides: { spacing: 48, perView: 8 },
      },
      "(min-width: 1200px)": {
        slides: { spacing: 64, perView: 8 },
      },
      "(min-width: 1400px)": {
        slides: { spacing: 64, perView: 10 },
      },
      "(min-width: 1700px)": {
        slides: { spacing: 64, perView: 12 },
      },
    },
    slides: { spacing: 32, perView: 3.5 },
  },
  [
    (slider) => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 2000);
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]
);
