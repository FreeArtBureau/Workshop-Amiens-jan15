var x, y, w, neg, pos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width/2;
  y = height/2;
  w = 50;
  neg = -10;
  pos = 10;

  fill(125);
  stroke(255);
}

function draw() {
  background(50);

  move();
  display();
}

function move() {
  x = x + random(neg, pos);
  y = y + random(neg, pos);
}

function display() {
  ellipse(x, y, w, w);
}