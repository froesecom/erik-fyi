doomMachine = {
  queue: [],
  busy: false,
  idleFunctions: [
    function(){console.log("blar")}
  ]
};

doomMachine.eatTheQueue = function(){
  if (!doomMachine.busy) {
    if (doomMachine.queue.length > 0) {
      doomMachine.queue.shift()();
    } else {
      doomMachine.pickIdleFunction();
    }
  } 
};

doomMachine.pickIdleFunction = function() {
  doomMachine.idleFunctions[0]();
};

doomMachine.fireItUp = function(){
  //intialize doom machine
  this.queue.push(function(){erik.talk("Nothing to see here, move along.");});
  setInterval(this.eatTheQueue, 400);
};


