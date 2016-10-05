$(function(){
  $("#erik-head").load(function() {
    erik.init();
    doomMachine.fireItUp();
  });

  $('.menu-btn').click(function(){
    $('.responsive-menu').addClass('expand');
  });
 
  $('.menu-close').click(function(){
    $('.responsive-menu').removeClass('expand');
  });

});
