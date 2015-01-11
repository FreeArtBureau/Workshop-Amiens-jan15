function Blob(_x, _y, _w, _n) {
   var self = this;
   this.onOff = false;
   this.x = _x;
   this.y = _y;
   this.w = _w;
   
   this.r = random(255);
   this.v = random(255);
   this.b = random(255);
   this.name = _n;

   this.timerId = setInterval(self.startStop, 2000); // call doSomething in 3 seconds
}

Blob.prototype.startStop = function() {

    this.onOff = !this.onOff;

    console.log(this.onOff);

};

/* move permet de faire un mouvement Brownien */ 
Blob.prototype.move = function() {

    //console.log(this.onOff);

    if (this.onOff) {
      this.x = this.x + random(-10, 10); 
      this.y = this.y + random(-10, 10); 
    }
};

/* rendre l'objet à l'écran */
Blob.prototype.display = function() {
    fill(this.r, this.v, this.b);
    ellipse(this.x, this.y, this.w, this.w);
};