$(function(){
  $("#erik-head").load(function() {
    erik.init();
    doomMachine.fireItUp();
  });

  $('.menu-btn').click(function(){
    $('.menu').toggleClass('expand');
    $(this).toggleClass('menu-btn-open');
  });
 
});
