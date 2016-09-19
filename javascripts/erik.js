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
  $("#sprite-erik").height(erik.sprite.frame.height).width(erik.sprite.frame.width).css('visibility', 'visible');

}

erik.talk = function(words){
  this.speaking = true;
  doomMachine.busy = true;
  $( "#speaker-box" ).fadeTo( "medium" , 1, function() {
     erik.say(words.split(""));
    erik.animate();
  });
};

erik.textFadeOut = function(){
  setTimeout(function(){
    $( "#speaker-box" ).fadeTo( "slow" , 0.2);
  }, 250);
};

erik.animate = function(){
  var frames = erik.sprite.talkingFrames;
  function chatterBox(){
    if(erik.speaking === true) {
      var f = frames.shift();
      //append to end of frames
      frames.push(f);
      erik.sprite.moveToFrame(f);
      setTimeout(chatterBox, 110);
    }
  }
  chatterBox();
};

erik.say = function(chars){
  var char = chars.shift();
  var timeout;
  
  if (char === ","){
    timeout = 200;
    erik.stopSpeaking(true);
  } else if (char.search(/[!.:;?]/) >= 0) {
    timeout = 800;
    erik.stopSpeaking(true);
  } else {
    timeout = 80;
  }

  $("#speaker-box").append(char);

  if(chars.length >= 1 ) {
    setTimeout(function(){
      if (erik.speaking === true) {
        erik.say(chars);
      } else {
        erik.talk(chars.join(""));
      }    
    }, timeout);
  } else {
    erik.stopSpeaking(false);
  }; 
};

erik.makeFacialExpression = function(setWaitTime){
  doomMachine.busy = true;
  var frame = doomMachine.randomNum(2, 3); //frames 3 and 4 have facial expressions
  var waitFor = doomMachine.randomNum(400, 1000);
  erik.sprite.moveToFrame(frame);
  setTimeout(function(){
    //reset
    erik.sprite.moveToFrame(0);
    setWaitTime();
    doomMachine.busy = false;
  }, waitFor);
};

erik.saySomethingUseless = function(setWaitTime){
  var saying = erik.getSaying();
  doomMachine.queue.push(function(){erik.talk(saying);});
}

erik.getSaying = function(){
  //eventually get random saying in here
  var n = doomMachine.randomNum(CONTENT.idleSayings.length, 0);
  return CONTENT.idleSayings[n];
}

erik.stopSpeaking = function(hasMoreToSay){
  this.speaking = false;
  this.sprite.moveToFrame(0);

  if (!hasMoreToSay){
    //nothing more to say;
    doomMachine.busy = false;
    this.textFadeOut();
    setTimeout(function(){
      $("#speaker-box").text("");
    }, 200);
  }

};


