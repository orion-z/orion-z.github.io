
$(document).ready(function() {
  $(function() {
    $(".match").matchHeight();
  })
  
  $('#slideDown').hide();
  $("#slideTog").on("click", function() {
    $('#slideDown').slideToggle();
    $.fn.matchHeight._update()
    // $('#slideDown').css('display', 'grid');
  })
})

