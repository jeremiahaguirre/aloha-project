$("form").on("click", "button", function() {
  alert("You have Subscribed");
  $(".botton").val("");
});

/* Smooth scrolling
@souce https://css-tricks.com/smooth-scrolling-accessibility/

*/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1600
        );
        return false;
      }
    }
  });
});

//Flickity PlugIn

$(".carosel").flickity({
  // options
  cellAlign: "left",
  contain: true
});
