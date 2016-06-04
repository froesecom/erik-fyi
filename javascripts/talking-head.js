var erik = {
  sprite: {
    frame: {
      baseWidth: 345,
      baseHeight: 588,
      width: 172.5,
      height: 294
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

erik.init = function(){
  //dynamically set height and width here
  //use baseWidth/baseHeight to set width/height
  $("#erik-head").height(erik.sprite.frame.height)
  $("#sprite-erik").height(erik.sprite.frame.height).width(erik.sprite.frame.width).show();

}

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


