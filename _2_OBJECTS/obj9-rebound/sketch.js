///////////////////////////////////
// Jeff Guess					 //
// pratiques-algorithmiques.net  //
// github.com/jguess			 //
///////////////////////////////////

var blob2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fill(125);
  stroke(255);

  blob2 = new Blob2(); 
}

function draw() {
  background(50);
  
  blob2.move();
  blob2.display();
}