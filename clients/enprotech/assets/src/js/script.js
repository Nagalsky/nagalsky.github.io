$(document).ready(function(){
    //Scroll to element
    $("[data-scroll]").on("click", function(e) {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
        return false;
    });
})