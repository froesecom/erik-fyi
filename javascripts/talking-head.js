var ERIK = {
  sprite: {
    frame: {
      width: 345,
      height: 588
    },
    animate: false,
    moveToFrame(n) {
      var fWidth = ERIK.sprite.frame.width,
         moveToF = n * fWidth;
      $("#erik-head").css("left", -moveToF);
    },
    talkingFrames: [1,2,1,0]
  }
};

ERIK.talk = function(){
  ERIK.animate = true;
  var frames = ERIK.sprite.talkingFrames;
  function chatterBox(){
    if(ERIK.animate = true) {
      var f = frames.shift();
      //append to end of frames
      frames.push(f);
      ERIK.sprite.moveToFrame(f);
      setTimeout(chatterBox, 150);
    }
  }
  chatterBox();
  
};


