//an evil state machine
doomMachine = {
  queue: [],
  waitUntil: 0, //date-to-milliseconds until another function can be run
  busy: false,
  randomNum: function(possibleNums, startOfRange) {
    return Math.floor(Math.random() * possibleNums) + startOfRange; 
  },
  idleFunctions: [
    erik.makeFacialExpression,
    erik.makeFacialExpression,
    erik.saySomethingUseless

  ]
};

doomMachine.setWaitTime = function(){
  var waitT = doomMachine.randomNum(2000, 500),
       date = new Date(); 
  doomMachine.waitUntil =  date.getTime() + waitT; 
};

doomMachine.canRun = function(){
  var d = new Date();
  return d.getTime() > doomMachine.waitUntil;
};

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
};

doomMachine.pickIdleFunction = function() {
  //pick a random function
  var n = doomMachine.randomNum(doomMachine.idleFunctions.length, 0);
  doomMachine.idleFunctions[n](doomMachine.setWaitTime);
};

doomMachine.blowShitUp = function(opts){
  if (opts && opts.makeBusy){
    //hold up the queue while fireballs blow up
    doomMachine.busy = true;
  }
  fireball.explode(function(){doomMachine.busy = false});
};

doomMachine.fireItUp = function(){
  //intialize doom machine with firball and then make erik talk
  this.queue.push(erik.init,
      function(){doomMachine.blowShitUp({makeBusy: true})},
      function(){erik.talk("Nothing to see here, move along.");
     });
  setInterval(this.eatTheQueue, 400);
};


