function BlobManager() {
  
  this.blob = [];

  for(var i = 0; i < 100; i++) {
    this.blob[i] = new Blob2(width/2, height/2, random(100), -10, 10);
  }  
}

BlobManager.prototype.display = function() {
  for(var i = 0; i < 100; i++) {
    this.blob[i].move();
    this.blob[i].display();
  }  
};