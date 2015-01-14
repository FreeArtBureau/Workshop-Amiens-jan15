///////////////////////////////////
// Jeff Guess					 //
// pratiques-algorithmiques.net  //
// github.com/jguess			 //
///////////////////////////////////

var blob;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fill(125);
  stroke(255);

  blob = new Blob(); 
}

function draw() {
  background(50);
    
  blob.move();
  blob.display();
  //println(blob.x);
}