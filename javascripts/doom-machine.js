doomMachine = {
  queue: []
};

doomMachine.eatTheQueue = function(){
  this.queue[0]();
};

doomMachine.fireItUp = function(){
  //intialize doom machine
  this.queue.push(function(){erik.talk("Nothing to see here, move along.");});
  this.eatTheQueue();
};


