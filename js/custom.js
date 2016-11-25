$('.scroll-to-item').click( function() {
    console.log( $(this).attr('href') );
//  console.log( typeof( $(this).attr('href')) );
    var scrollToAdress = $(this).attr('href');
  $(window).scrollTo( ''+scrollToAdress, 1000, {offset: {top:-50, left:0} });
});
