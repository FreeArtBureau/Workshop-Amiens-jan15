function Blob(_x, _y, _w, _n, _p) {
   this.x = _x;
   this.y = _y;
   this.w = _w;
   this.neg = _n;
   this.pos = _p;
   
   this.r = random(255);
   this.v = random(255);
   this.b = random(255);

   this.img = loadImage("data/hilton.jpg");
}

/* move permet de faire un mouvement Brownien */ 
Blob.prototype.move = function() {
    this.x = this.x + random(this.neg, this.pos);
    this.y = this.y + random(this.neg, this.pos);
};

/* rendre l'objet à l'écran */
Blob.prototype.display = function() {
    fill(this.r, this.v, this.b);
    //ellipse(this.x, this.y, this.w, this.w);
    image(this.img, this.x, this.y);
};