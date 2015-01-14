///////////////////////////////////
// Jeff Guess                    //
// pratiques-algorithmiques.net  //
// github.com/jguess             //
///////////////////////////////////

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

  x = x + random(neg, pos);
  y = y + random(neg, pos);

  ellipse(x, y, w, w);
}