var erik = {
  sprite: {
    frame: {
      baseWidth: 345,
      baseHeight: 588,
      width: 172.5, //set this dynamically
      height: 294 //set this dynamically
    },
    moveToFrame(n) {
      var fWidth = erik.sprite.frame.width,
         moveToF = n * fWidth;
      $("#erik-head").css("left", -moveToF);
    },
    talkingFrames: [1,2,1,0]
  },
  speaking: false
};

erik.init = function(){
  //dynamically set height and width here
  //use baseWidth/baseHeight to set width/height
  $("#erik-head").height(erik.sprite.frame.height)
  $("#sprite-erik").height(erik.sprite.frame.height).width(erik.sprite.frame.width).show();

}

erik.talk = function(words){
  erik.speaking = true;
  erik.say(words);
  
  var frames = erik.sprite.talkingFrames;
  function chatterBox(){
    if(erik.speaking === true) {
      var f = frames.shift();
      //append to end of frames
      frames.push(f);
      erik.sprite.moveToFrame(f);
      setTimeout(chatterBox, 150);
      
    }
  }
  chatterBox();
  
};

erik.say = function(chars){
  var char = chars.shift();
  var timeout;
  
  if (char === ","){
    timeout = 400;
  } else if (char.search(/[!.:;?]/) >= 0) {
    timeout = 800;
  } else {
    timeout = 40;
  }

  $("#speaker-box").append(char);

  if(erik.speaking === true && chars.length >= 1 ) {
    setTimeout(function(){erik.say(chars)}, timeout);
  }; 
};


