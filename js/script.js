$(document).ready(function(){
  $('#nav-mobile-button').click(function(){
    $('#nav-mobile-button').toggleClass('active');
    $('#nav').toggleClass('active');
  });

  $(".post-image-background").click(function(){

    $(this).toggleClass("expand");

  })
});
