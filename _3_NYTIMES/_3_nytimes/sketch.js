///////////////////////////////////
// Jeff Guess					 //
// pratiques-algorithmiques.net  //
// github.com/jguess			 //
///////////////////////////////////

var mesTextes = [];
var timerId;
var tt;

function setup() {
  	createCanvas(windowWidth, windowHeight);
  
  	var cle_api = "";
  	var q = "paris";

  	$.ajax({
        type: "GET",
        url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + q + "&api-key=" + cle_api + "&callback=nyt",
        dataType: "json",
        success: nyt
    });

    timerId = setInterval(change, 7000); 
}

function nyt(obj) {  

     $(obj.response.docs).each(function(i, v) {
		
		if (v.lead_paragraph !== null) {
			append(mesTextes, v.lead_paragraph);
		}
	 });

	 change();
}


function change() {
	tt = mesTextes[floor(random(mesTextes.length))];
}

function draw() {    
	background(255);

	noStroke();
	fill(255, 0, 0);
	textFont("Georgia");
	textLeading(25);
	textSize(18);

	if (tt !== undefined) {
		text(tt, 100, 100, 600, 1000);
	}
}
