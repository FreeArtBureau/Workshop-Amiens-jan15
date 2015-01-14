///////////////////////////////////
// Jeff Guess					 //
// pratiques-algorithmiques.net  //
// github.com/jguess			 //
///////////////////////////////////

var map;

function setup() {
	
	var mapOptions = {
		zoom: 16, 
		center: {lat: 49.036374, lng: 2.077472}
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}