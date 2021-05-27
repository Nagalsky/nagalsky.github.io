// Import jQuery
//= ../../../node_modules/jquery/dist/jquery.min.js

// Import Popper
//= ../../../node_modules/@popperjs/core/dist/umd/popper.min.js

// Import Bootstrap 5
//= ../../../node_modules/bootstrap/dist/js/bootstrap.min.js

// Import Typeahead js
//= ../../../node_modules/typeahead.js/dist/typeahead.jquery.min.js

// jQuery Lazyload
//= ../../../node_modules/jquery-lazy/jquery.lazy.min.js

// Import Slick
//= ../../../node_modules/slick-carousel/slick/slick.min.js

// Import custom js-files
//= components/typehead.js
//= components/navigation.js
//= components/hero-form.js
//= components/lazy.js
//= components/products-nav.js
//= components/qty.js
//= components/related-gallery.js
//= components/featured-news-gallery.js
//= components/product-gallery.js
//= components/scroll-to-top.js
//= components/share-menu.js

const shareButton = document.querySelector(".share-button");
const shareDialog = document.querySelector(".share-dialog");
const closeButton = document.querySelector(".close-button");

shareButton.addEventListener("click", (event) => {
  if (navigator.share) {
    navigator
      .share({
        title: "WebShare API Demo",
        url: "https://codepen.io/ayoisaiah/pen/YbNazJ",
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    shareDialog.classList.add("is-open");
  }
});

closeButton.addEventListener("click", (event) => {
  shareDialog.classList.remove("is-open");
});
