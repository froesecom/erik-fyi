var fireball = {
  sprite: {
    frame: {
      width: 400
    },
    moveToFrame(n) {
      var fWidth = fireball.sprite.frame.width,
         moveToF = n * fWidth;
      $(".fireball").css("left", -moveToF);
    },
    frames: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,0],
    speed: 60
  }
};

fireball.explode = function(opts){
  var frames = fireball.sprite.frames.slice(0);//slice duplicates array otherwise modify variable modifies original array
  console.log(frames);
  fireball.sprite.frame.width = $(".fireball-window").width(); //the width of the frame is determined by css
  
  if(opts.preFunc){
    opts.preFunc.call();
  }
  console.log(doomMachine.busy);
  console.log("boom");
  
  function burnFrames(fs){
    var f = fs.shift();
    fireball.sprite.moveToFrame(f);
    if(fs.length > 0){
      setTimeout(function(){burnFrames(fs)}, fireball.sprite.speed);
    } else if (opts.callback){
      opts.callback.call();
    }
    
  }
  burnFrames(frames);
}

