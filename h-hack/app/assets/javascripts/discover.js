$(document).on("click", ".keyword .remove_keyboard",function(e){
  e.preventDefault();
  var target = $(e.target);

  target.closest("li").animate({opacity: 0}, function() {
    $(this).slideUp();
  });
});

var startAnimation = true;
$("#search").on("change", function() {
  if (startAnimation) {
    console.log("mai");
    
    $(this).val("");
  }
});