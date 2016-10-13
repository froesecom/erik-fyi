$(function(){
  $("#erik-head, #fireball-1").load(function() {
//    erik.init();
    doomMachine.fireItUp();
  });

  //build email address so shady bots don't scrape it
  setTimeout(function(){
    e_array = ["its", "@", "erik.fyi"];
    $(".email").html("<a href='mailto:" + e_array.join("") + "'>" + e_array.join("" ) + "</a>").fadeIn();
  }, 800);

  //event listeners
  $('.menu-btn').click(function(){
    $('.menu').toggleClass('expand');
    $(this).toggleClass('menu-btn-open');
  });
 
});
