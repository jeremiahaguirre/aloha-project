$(".botton").on("click", function() {
  function validateEmail(sEmail) {
    var re = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    console.log(re.test(sEmail));
    if (re.test(sEmail)) {
      return true;
    } else {
      return false;
    }
  }
  const sEmail = $(".email").valueOf();
  if (validateEmail(sEmail)) {
    alert("You have subscribed");
  } else {
    alert("Invalid Email");
  }
});

/* Smooth scrolling
@source https://css-tricks.com/smooth-scrolling-accessibility/

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
  contain: true,
  autoPlay: true,
  prevNextButtons: false
});
