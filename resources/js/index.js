var	shuffleButton = document.getElementById("shuffle"),
	quoteDisplay = document.getElementById("quote-display"),
	authorDisplay = document.getElementById("author-display");

function quoteGenerator (){
	fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(function(response) {
    	return response.json()})//response type
    .then(function(data) {
    	var quote = data[0].quote;
    	var author = data[0].author;
    	quoteDisplay.textContent = quote;
		authorDisplay.textContent = "-- " + author;
    	})
}


shuffleButton.addEventListener('click', quoteGenerator);