
var drops = [];

function setup() {
  // put setup code here
  createCanvas(600, 800);
  for(var i = 0; i < 500; i++){
    drops[i] = new Raindrop();
  }
}

function draw() {
  // put drawing code here
  background(0);

  for(var i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].fall();
  }
  
}

