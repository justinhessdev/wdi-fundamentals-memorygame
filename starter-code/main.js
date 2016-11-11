console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createCards = function() {
	// instead of looping through a fixed number
	// loop through the length of the cards
	for(i=0; i<cards.length; i++){
		var newCard = document.createElement('div');
		newCard.className = 'card';
		// this will set the card's 'data-card' to be the element of the array
	  	// data- attributes are meant to store data about an element that is not
	  	// tied to a style.
	  	// i.e. "king"
		newCard.setAttribute('data-card', cards[i]);
		// when a card is clicked the function isTwoCards will be executed
   	 	newCard.addEventListener('click', isTwoCards);
		document.getElementById('game-board').appendChild(newCard);
	}
}

function isMatch(twoCardsArray) {
	if(twoCardsArray[0] == twoCardsArray[1]){
		alert("Congrats, you found a match");
	} else {
		alert("Try again");		
	}

	var cardList = document.querySelectorAll('[data-card]'); // All with attribute named "property"
	for(i=0; i<cardList.length; i++){
		cardList[i].innerHTML = "";	
	}	
		
}

//checks to see if there are cards in play
function isTwoCards() {

	// add card to array of cards in play
  	// 'this' hasn't been covered in this prework, but
  	// for now, just know it gives you access to the card the user clicked on
  	cardsInPlay.push(this.getAttribute('data-card'));

	if(this.getAttribute('data-card') == 'king'){
 		this.innerHTML = '<img src="my_king.png" alt="King of Spades" />';
 	} 

 	if(this.getAttribute('data-card') == 'queen'){
		this.innerHTML = '<img src="my_queen.png" alt="Queen of Spades" />';   	 		
 	}
  	
  	// if you have two cards in play check for a match
  	if (cardsInPlay.length === 2) {

	    // pass the cardsInPlay as an argument to isMatch function
	    isMatch(cardsInPlay);

	    // clear cards in play array for next try
	    cardsInPlay = [];
  }

}

createCards();
