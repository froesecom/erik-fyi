var fireball = {
  sprite: {
    frame: {
      baseWidth: 400,
      baseHeight: 400,
      width: 400, //set this dynamically
      height: 400 //set this dynamically
    },
    moveToFrame(n) {
      var fWidth = fireball.sprite.frame.width,
         moveToF = n * fWidth;
      $("#fireball-1").css("left", -moveToF);
    },
    fireballFrames: [0,1,2,3,4,5,6,7,8,9,10]
  }
};

fireball.explode = function(callback){
  console.log("boom");
  callback.call();
}
