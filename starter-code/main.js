console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var createCards = function() {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	document.getElementById('game-board').appendChild(newCard);
}

for(i=0; i<4; i++){
	createCards();
}