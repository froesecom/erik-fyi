$(function(){
  $("#erik-head").load(function() {
    erik.init();
    doomMachine.fireItUp();
  });

  $('.menu-btn').click(function(){
    $('.responsive-menu').toggleClass('expand');
  });

});
