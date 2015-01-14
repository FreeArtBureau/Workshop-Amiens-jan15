///////////////////////////////////
// Jeff Guess					 //
// pratiques-algorithmiques.net  //
// github.com/jguess			 //
///////////////////////////////////

var blobmanager;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fill(125);
  stroke(255);

  blobmanager = new BlobManager();
}

function draw() {
  background(50);
  
  blobmanager.display();
}


