$(".details").on("click", function() {
  $(this).siblings("p").slideToggle(600);
  $(this).toggleClass("active");
})