(() => {
  const toggleMenuButton = document.querySelector(".menu-toggle");
  const toggleMenu = document.querySelector(".navbar");

  toggleMenuButton.onclick = () => {
    toggleMenu.classList.toggle("hidden");
    toggleMenu.classList.toggle("flex");
  };
})();
