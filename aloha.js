/* Validation of Email
@source https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

*/
$(function() {
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $(".botton");
  var email = $(".email").val();

  if (validateEmail(email)) {
    alert("You have subcribed");
  } else {
    alert("Email is not valid ");
  }
  return false;
}

$(".botton").bind("click", validate);

/* Smooth scrolling
@source https://css-tricks.com/smooth-scrolling-accessibility/

*/


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


//Flickity PlugIn

$(".carosel").flickity({
  // options
  cellAlign: "left",
  contain: true,
  autoPlay: true,
  prevNextButtons: false,
  imagesLoaded: true,
  percentPosition: false
});
});