
$(document).ready(function() {
  $(function() {
    $(".match").matchHeight();
  })
  
  $('#slideDown').hide();
  $("#slideTog").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).text("Show less");
    } else {
      $(this).text("Show more");
    }
    $('#slideDown').slideToggle();
    $.fn.matchHeight._update()
    // $('#slideDown').css('display', 'grid');
  })
})

