doomMachine = {
  queue: [],
  busy: false,
  randomNum: function(possibleNums, startOfRange) {
    return Math.floor(Math.random() * possibleNums) + startOfRange; 
  },
  idleFunctions: [
    function(){
      //facial expressions
      var frame = doomMachine.randomNum(2, 3); //frames 3 and 4 have facial expressions
      erik.sprite.moveToFrame(frame);
    }
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


