///////////////////////////////////
// Jeff Guess                    //
// pratiques-algorithmiques.net  //
// github.com/jguess             //
///////////////////////////////////

Blob2 = function () {
   this.x = width/2;
   this.y = height/2;
   this.w = 50;
   this.dirX = random(-10, 10);
   this.dirY = random(-10, 10);
};

Blob2.prototype.move = function() {

    this.x = this.x + this.dirX;

    if ((this.x > width) || (this.x < 0)) {
      this.dirX = this.dirX * - 1;
    }

    this.y = this.y + this.dirY;

    if ((this.y > height) || (this.y < 0)) {
      this.dirY = this.dirY * - 1;
    }
};

Blob2.prototype.display = function() {
    fill(random(255), random(255), random(255));
    ellipse(this.x, this.y, this.w, this.w);
};