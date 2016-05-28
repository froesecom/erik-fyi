var erik = {
  sprite: {
    frame: {
      width: 345,
      height: 588
    },
    animate: false,
    moveToFrame(n) {
      var fWidth = erik.sprite.frame.width,
         moveToF = n * fWidth;
      $("#erik-head").css("left", -moveToF);
    },
    talkingFrames: [1,2,1,0]
  }
};

erik.talk = function(){
  erik.sprite.animate = true;
  var frames = erik.sprite.talkingFrames;
  function chatterBox(){
    if(erik.sprite.animate === true) {
      var f = frames.shift();
      //append to end of frames
      frames.push(f);
      erik.sprite.moveToFrame(f);
      setTimeout(chatterBox, 150);
      
    }
  }
  chatterBox();
  
};


