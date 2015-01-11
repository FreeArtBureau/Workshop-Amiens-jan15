function BlobManager() {
  
  this.blob = [];

  for(var i = 0; i < 2; i++) {
    this.blob[i] = new Blob(width/2, height/2, random(100), "hello " );
  }  
}

BlobManager.prototype.display = function() {
  for(var i = 0; i < 2; i++) {
    this.blob[i].move();
    this.blob[i].display();
  }  
};