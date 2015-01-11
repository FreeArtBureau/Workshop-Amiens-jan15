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