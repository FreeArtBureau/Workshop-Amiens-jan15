///////////////////////////////////
// Jeff Guess					 //
// pratiques-algorithmiques.net  //
// github.com/jguess			 //
///////////////////////////////////

function setup() {
	createCanvas(windowWidth, windowHeight);
  
  	$.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/find?q=Amiens&units=metric",
        dataType: "json",
        success: weather
    });
}

function weather(obj) {  
	println(obj.list[0].wind.speed);
}
