$(document).ready(function(){

  $(window).load(function() {
    $('.flexslider').flexslider();
  });
  
  $('#mix-cards').mixItUp({
    animation: {
      enable: false   
    }
    // },
    // callbacks: {
    //   onMixLoad: function(){
    //     $(this).mixItUp('setOptions', {
    //       animation: {
    //         enable: true  
    //       },
    //     });
    //   }
    // }
  }); 

  $('#planner-events, #planner-countdowns').mixItUp({
    animation: {
      enable: false   
    }
  });

  $('.card').on('click', function () {
    console.log('click');
    $('.item-detail').show();
  });

  $('.black-overlay').on('click', function () {
    $('.item-detail').hide();
  });

});