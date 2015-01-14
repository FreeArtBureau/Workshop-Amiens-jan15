///////////////////////////////////
// Jeff Guess					 //
// pratiques-algorithmiques.net  //
// github.com/jguess			 //
///////////////////////////////////

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
}

function nyt(obj) {  
	
	// println(obj.response.docs);

     $(obj.response.docs).each(function(i, v) {
		 println(i);
		 println(v.lead_paragraph);
		 println(v.word_count);
	 });
}
