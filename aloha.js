$("form").on("click", "button", function() {
  alert("You have Subscribed");
  $(".botton").val("");
});

//Flickity PlugIn
$(".carosel").flickity({
  // options
  cellAlign: "left",
  contain: true
});
