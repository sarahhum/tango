$(document).ready(function(){

  $(window).load(function() {
    $('.flexslider').flexslider();
  });
  

  $('#mix-cards, #planner-events, #planner-countdowns').mixItUp({
    animation: {
      enable: false   
    }
  });

  // Show/hide item details
  $('.card').on('click', function () {
    console.log('click');
    $('.item-detail').show();
  });
  $('.black-overlay').on('click', function () {
    $('.item-detail').hide();
  });

  // Show the right even labels in planner
  $('.sidebar-card').on('click', function () {
      console.log($(this).attr("id"));
      $('#planner-countdowns li').removeClass('active');
      $('#planner-countdowns li.' + $(this).attr("id")).addClass('active');
  });


});