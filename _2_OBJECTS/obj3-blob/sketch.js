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



// classe Blob
function Blob () {
   var x, y, w, neg, pos;

   this.x = width/2;
   this.y = height/2;
   this.w = 50;
   this.neg = -10;
   this.pos = 10;
}

Blob.prototype.move = function() {
    this.x = this.x + random(this.neg, this.pos);
    this.y = this.y + random(this.neg, this.pos);
};

Blob.prototype.display = function() {
    ellipse(this.x, this.y, this.w, this.w);
};