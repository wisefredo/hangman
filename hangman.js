// GLOBAL VARIABLE
var chosenWordelement = document.getElementById('chosenWord');
var userInput = document.getElementById('userInput')

var wordList =[
	"tiger","lion"
	]

var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var goodJob = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 3;

function startGame(){
/*
1. select a word at random
2. want to break that word into letters and replace with underscore
3. add those underscores to HTML
4. numguesses always equal 9 and blankandsuccesses is an empty array
	& wrongguesses is empty as well

*/
var numGuesses = 3;
var goodJob = [];
var wrongGuesses = [];

chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
// .split is a method on the string object that converts string to array 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 
letterInChosenWord = chosenWord.split("")
console.log(letterInChosenWord)
// inner HTML 
// chosenWordelement.innerHTML = chosenWord;


}

function checkLetters(event){
	var keypressed = event.key;
	var n = chosenWord.includes(keypressed);
	console.log(n);
	if (n === false && keypressed !== 'Backspace') {
		// alert('OH NOOO')
		numGuesses--;   
		// numguesses = numguesses -1 ;
		if (numGuesses === 0 ){
			alert("LOSER")
		}
	}
	else if (n === true && keypressed !== 'Backspace') {
		// // alert("YES!!!")
		goodJob.push(keypressed)
		console.log(goodJob)
		if (letterInChosenWord.includes(goodJob)) {
			alert("AWESOME")

		}

	}
	/* 
	1.compare the letter the user picks matches any of the letters in the word
	2.want a conditional statement that will determine if letter does exist in the word,
	 if not do something else
	3.if the user is wrong we want to decrease the numGuesses variables by one
	*/ 
}

function roundComplete(){
	/*
	1.it's going to update the HTML with letter that in the word
	2.it's going to update the HTML with guesses we have left
	3.it's going to update the HTML to show the wrong guesses
	4.It's going to determine whether the use wonr the fame or not
	*/ 



}
// event listener "onkeyup"
userInput.onkeyup =  function (event) {
	console.log(event.key)
	checkLetters(event); 
	/*
	1. going to take in the letter that we type
	2. going to pass it through the checkletter function
	*/

 
}
startGame();





























