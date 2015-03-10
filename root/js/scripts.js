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

  $('.ghost-button').on('click', function () {
    console.log('click');
    $('.create-event').show();
    document.getElementById("focus-field").focus();
  });

  $('.black-overlay').on('click', function () {
    $('.item-detail, .create-event').hide();
  });

  // Show the right even labels in planner
  $('.sidebar-card').on('click', function () {
    $('#planner-countdowns li').removeClass('active');
    $('#planner-countdowns li.' + $(this).attr("id")).addClass('active');
  });

  $(function() {
    $(".datepicker").datepicker();
  });

  $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 2000,
      values: [ 0, 2000 ],
      slide: function( event, ui ) {
        $( "#amount-low" ).val( "$" + ui.values[ 0 ]);
        $( "#amount-high" ).val( "$" + ui.values[ 1 ]);
      }
    });
    $( "#amount-low" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount-high" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
  });


  $('#info-window').parent().addClass('testing');
});