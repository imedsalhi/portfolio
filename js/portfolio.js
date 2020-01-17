var typed = new Typed('.texte', { strings: ["A HERO WE NEED ", "WEB DEVELOPPER  !!"], typeSpeed: 50, loop: true, showCursor: true });
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
    });
});

$(function() {
    $.scrollIt();
});
$("#b_navigation").on("click", function() {
    $("#nav_bar").toggle();

});