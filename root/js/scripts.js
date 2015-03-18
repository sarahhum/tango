$(document).ready(function(){

  // $(window).load(function() {
  //   $('.flexslider').flexslider();
  // });
  

  $('#mix-cards, #planner-events, #planner-countdowns').mixItUp({
    animation: {
      enable: false   
    }
  });

  var img;

  // Show/hide item details
  $('.card').on('click', function () {
    title = $(this).find('h2').html();
    meta = $(this).find('h3').html();
    price = $(this).find('.price').html();
    hiddenDetails = $(this).find('.hidden-details').html();
    imgcontainer = $(this).find('.img-container');
    
    $('.slides').empty();
    $('ol.flex-control-nav.flex-control-paging').empty();
    $('ul.flex-direction-nav').empty();

    $(imgcontainer).children('img').each(function () {
        img = $(this).attr('src');
        $('.slides').append('<li><img src="' + img + '" /></li>');
    });

    $('.details-title h1').empty().append(title);
    $('.details-title h3').empty().append(meta);
    $('.details-container').empty().append(hiddenDetails);
    $('.footer-content .price').empty().append(price + '<span>USD</span>');

    $('.flexslider').removeData("flexslider");
    $('.flexslider').flexslider({
      slideshowSpeed: 4000,
      pauseOnHover: true
    });
    $('.item-detail').show();
  });

  $('.ghost-button').on('click', function () {
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