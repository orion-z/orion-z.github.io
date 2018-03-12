$(".details").on("click", function(e) {
  e.preventDefault();
  $(this).siblings("p").slideToggle(600);
  $(this).toggleClass("active");
})

let modal = $("#myModal");

$("#modalBtn").off().on("click", function() {
  modal.css("display", "block");
})

$(modal).on("click", function() {
  modal.css("display", "none");
  window.location.href = "patatap/index.html";
})