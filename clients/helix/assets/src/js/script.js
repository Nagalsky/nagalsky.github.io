$(document).ready(function() {
  //Mobile menu overlay action
  $(".navbar-toggler").on("click", function() {
    $(".navbar-overlay").toggleClass("active");
  });

  //Initial testimonials gallery
  var owl = $(".testimonials");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    nav: false,
    autoplay: 3500,
    onInitialized: counter,
    onTranslated: counter
  });
  // Custom Button
  $(".testimonial-button-next").click(function() {
    owl.trigger("next.owl.carousel");
  });
  $(".testimonial-button-prev").click(function() {
    owl.trigger("prev.owl.carousel");
  });
  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $(element)
      .parent()
      .find(".testimonial-pagination")
      .html(item + " / " + items);
  }

  //Initial Bootstrap popover
  $('[data-toggle="popover"]').popover();
});
