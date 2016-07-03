doomMachine = {
  queue: []
};

doomMachine.eatTheQueue = function(){
  if (doomMachine.queue.length > 0 && !erik.busy) {
    doomMachine.queue.shift()();
  }
};

doomMachine.fireItUp = function(){
  //intialize doom machine
  this.queue.push(function(){erik.talk("Nothing to see here, move along.");});
  setInterval(this.eatTheQueue, 400);
};


