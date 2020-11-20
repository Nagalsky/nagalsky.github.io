//Init swiper account gallery
var swiper = new Swiper("#account-gallery", {
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    speed: 600,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

$(document).ready(function() {
    //Mobile menu action
    $(function() {
        $(".header__button-toggle-aside").on("click", function(e) {
            e.preventDefault();
            $(".aside").toggleClass("aside--is-opened");
            $("body").toggleClass("modal-open");
            $(".aside-overlay").toggleClass("aside-overlay--is-opened");
        });

        $(".aside-overlay").on("click", function(e) {
            e.preventDefault();
            $(this).toggleClass("aside-overlay--is-opened");
            $("body").removeClass("modal-open");
            $(".aside").removeClass("aside--is-opened");
        });
    });

    //Seach box action
    $(function() {
        $(".search-box__toggle").on("click", function(e) {
            e.preventDefault();
            $(this)
                .closest(".search-box")
                .addClass("search-box--is-opened");
        });

        $(document).on("click", function(e) {
            if ($(e.target).closest(".search-box").length === 0) {
                $(".search-box").removeClass("search-box--is-opened");
            }
        });
    });

    //Table collapse action
    $(function() {
        $("body").on("click", ".table-button-edit", function(e) {
            e.preventDefault();
            $(this)
                .closest(".table-parent-row")
                .next(".table-child-row")
                .toggleClass("table-child-row--is-opened");
        });
    });

    //Accordion item toggle class
    $(function() {
        $(".question__toggle").on("click", function(e) {
            e.preventDefault();
            $(this)
                .closest(".question")
                .toggleClass("question--is-opened");
        });
    });

});