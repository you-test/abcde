$(function() {

  $('.nav-toggle').on('click', function () {
    $('.nav-toggle, .nav-menu').toggleClass('show');
  });


  $('header a').click(function() {
      var id =$(this).attr('href');
      var position = $(id).offset().top;
      $('html, body').animate({
        'scrollTop': position
      }, 1000);
    });


  $(".header-banner img:not(:first-child)").hide();

  setInterval(function() {
    $(".header-banner img:first-child").fadeOut(3000)
    .next("img").fadeIn(3000)
    .end().appendTo(".header-banner");

  }, 5000);


});
