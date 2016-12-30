//an evil state machine
doomMachine = {
  queue: [],
  waitUntil: 0, //date-to-milliseconds until another function can be run
  busy: false,
  randomNum: function(possibleNums, startOfRange) {
    return Math.floor(Math.random() * possibleNums) + startOfRange; 
  },
  idleFunctions: [
    fireball.explode,
    erik.makeFacialExpression,
    erik.makeFacialExpression,
    erik.saySomethingUseless

  ]
};

doomMachine.loadImg = function(imgPath){
  var deferred = $.Deferred(),
      img = new Image();
  
  img.onload = function(){deferred.resolve()};
     img.src = imgPath;

  return deferred;
}

doomMachine.preloadImages = function(){
  var loadHead = this.loadImg("public/head-sprite.png"),
      loadFire = this.loadImg("/public/flm.png");
  
  return $.when(loadHead, loadFire);
}

doomMachine.setWaitTime = function(){
  var waitT = doomMachine.randomNum(2000, 500),
       date = new Date(); 
  doomMachine.waitUntil =  date.getTime() + waitT; 
}

doomMachine.canRun = function(){
  var d = new Date();
  return d.getTime() > doomMachine.waitUntil;
}

doomMachine.eatTheQueue = function(){
  if (!doomMachine.busy) {
    if (doomMachine.queue.length > 0) {
      //if something is in the queue, run it
      doomMachine.queue.shift()();
    } else {
      if (doomMachine.canRun()) {
        doomMachine.pickIdleFunction();
      } 
    }
  } 
}

doomMachine.pickIdleFunction = function() {
  //pick a random function
  var n = doomMachine.randomNum(doomMachine.idleFunctions.length, 0);
  doomMachine.idleFunctions[n](doomMachine.setWaitTime);
}

doomMachine.fireItUp = function(){
  //intialize doom machine with fireball and then make erik talk
  doomMachine.queue.push(
      function(){fireball.explode(
        {
          preFunc: function(){doomMachine.busy = true},
          callback: function(){doomMachine.busy = false; $(".fireball").css("z-index", "-1");  }
        }
       )
      },
      erik.init,
      function(){erik.talk("Hey good looking. What you got cooking?");}
    );
  setInterval(doomMachine.eatTheQueue, 400);
}


