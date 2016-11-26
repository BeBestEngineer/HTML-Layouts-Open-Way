$(document).ready(function(){
    $(".scroll-to-item").click( function() {
        console.log( $(this).attr('href') );    
      $(window).scrollTo( $(this).attr('href'), 1000, {offset: {top:-50, left:0} });
    });
});