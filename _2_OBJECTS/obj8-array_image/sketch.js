///////////////////////////////////
// Jeff Guess                    //
// pratiques-algorithmiques.net  //
// github.com/jguess             //
///////////////////////////////////

var blob = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fill(125);
  stroke(255);

  for(var i=0; i < 100; i++) {
    blob[i] = new Blob(width/2, height/2, random(100), -10, 10);
  }  
}

function draw() {
  background(50);
  
  for(var i=0; i < 100; i++) {
    blob[i].move();
    blob[i].display();
  }  
}


