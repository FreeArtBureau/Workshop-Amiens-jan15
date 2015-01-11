var blob2 = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fill(125);
  stroke(255);

  
  for(var i=0; i < 100; i++) {
    blob2[i] = new Blob2();
  }  
}

function draw() {
  background(50);
  
  for(var i=0; i < 100; i++) {
    blob2[i].move();
    blob2[i].display();
  }  
}