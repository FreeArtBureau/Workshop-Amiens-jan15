///////////////////////////////////
// Jeff Guess                    //
// pratiques-algorithmiques.net  //
// github.com/jguess             //
///////////////////////////////////

function setup() {
  	createCanvas(windowWidth, windowHeight);
  
    var cle_api = "";
    var methode = "flickr.photos.getRecent";
    
    $.ajax({
        url: "https://api.flickr.com/services/rest/?method=" + methode + "&extras=description,url_m" + "&format=json&api_key=" + cle_api + "&jsoncallback=mon_callback",
        dataType: "jsonp"
    });
}

function mon_callback(obj) {  
	   println(obj);
}
