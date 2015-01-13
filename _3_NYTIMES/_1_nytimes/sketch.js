function setup() {
  	createCanvas(windowWidth, windowHeight);
  
  	var cle_api = "";

  	$.ajax({
        type: "GET",
        url: "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=paris&api-key=" + cle_api + "&callback=nyt",
        dataType: "json",
        success: nyt
    });
}

function nyt(obj) {  
	println(obj);
	// println(obj.response);
	// println(obj.response.docs);
}
