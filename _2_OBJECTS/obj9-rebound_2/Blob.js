///////////////////////////////////
// Jeff Guess					 //
// pratiques-algorithmiques.net  //
// github.com/jguess			 //
///////////////////////////////////

Blob = function(_x, _y, _w, _n, _p) {
   this.x = _x;
   this.y = _y;
   this.w = _w;
   this.neg = _n;
   this.pos = _p;
};

Blob.prototype.move = function() {
    this.x = this.x + random(this.neg, this.pos);
    this.y = this.y + random(this.neg, this.pos);
};

Blob.prototype.display = function() {
	fill(125);
    ellipse(this.x, this.y, this.w, this.w);
};