var blob, blob2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fill(125);
  stroke(255);

  blob = new Blob();
  blob2 = new Blob(); 
}

function draw() {
  background(50);
    
  blob.move();
  blob.display();

  blob2.move();
  blob2.display();
}