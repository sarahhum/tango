$(document).ready(function(){

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

});