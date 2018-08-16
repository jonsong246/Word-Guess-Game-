//Creating an array of words
const words = ["bulbasaur", "charmander", "squirtle", "pikachu", "jigglypuff", "caterpie", "butterfree", "beedrill", "pidgey", "raichu", "vulpix", "dragonite", "oddish", "geodude", "arcanine", "rapidash", "alakazam"];

const sources = ["assets/images/Bulbasaur.png", "assets/images/Charmander.png", "assets/images/Squirtle.png", "assets/images/Pikachu.png", "assets/images/Jigglypuff.png", "assets/images/Caterpie.png", "assets/images/Butterfree.png", "assets/images/Beedrill.png", "assets/images/Pidgey.png", "assets/images/Raichu.png", "assets/images/Vulpix.png", "assets/images/Dragonite.png", "assets/images/Oddish.png", "assets/images/Geodude.png", "assets/images/Arcanine.png", "assets/images/Rapidash.png", "assets/images/Alakazam.png"]
const GUESS_LIMIT = 10;
//Selecting words at random
let randNum = Math.floor(Math.random() * words.length);
let numGuesses = GUESS_LIMIT;
let chosenWord = words[randNum];
let underScore = [];
let rightWord = [];
let wrongWord = [];

//Dom Manipulation
let docUnderScore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("rightGuess");
let docWrongGuess = document.getElementsByClassName("wrongGuess");
let docNumGuesses = document.getElementsByClassName("numGuesses")

//Main {
console.log(chosenWord);

//Creates underscores based on length of the words

function generateUnderscore() {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    docUnderScore[0].innerHTML = underScore.join(" "); 
    docNumGuesses[0].innerHTML = "Number of Guesses: " + numGuesses;
}

function winGame(src){
    var img = document.createElement("img");
    img.src = src;
    document.body.appendChild(img);
}

function loseGame(){
    docUnderScore[0].innerHTML="";
    docRightGuess[0].innerHTML="";
    docWrongGuess[0].innerHTML="";
    docNumGuesses[0].innerHTML="";
    underScore = [];
    rightWord = [];
    wrongWord = [];
    numGuesses = GUESS_LIMIT;
    randNum = Math.floor(Math.random() * words.length);
    chosenWord = words[randNum];
    generateUnderscore();
    /*var image = document.getElementsByTagName("img");
    if(image != null){
        image.parentNode.removeChild(image);
    }*/


}

//Gets Users guess

document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
//If the User guesses right
    if(chosenWord.indexOf(keyword) > -1 && !rightWord.includes(keyword)) {
//Add to right words array
    rightWord.push(keyword);
    for(let i = 0; i < chosenWord.length; i++){
        if(chosenWord.charAt(i) === keyword){
            underScore[i] = keyword;
            docUnderScore[0].innerHTML = underScore.join(" "); 
            docRightGuess[0].innerHTML = rightWord;
        }
    }
//Replace underscore with right letter 

//Checks to see if user word matches guesses
    if(underScore.join("") == chosenWord) {
        //Win Game
        //winGame("assets/images/pikachu.png");
        winGame(sources[words.indexOf(chosenWord)]);
    }        
}
else{
    if(numGuesses <= 1){
        //Game End
        alert("You Blacked Out! Scurry back to that Pokemon Center!")
        loseGame();
    }
    if(!rightWord.includes(keyword) && !wrongWord.includes(keyword)){
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
        numGuesses--;
        docNumGuesses[0].innerHTML = "Number of Guesses: " + numGuesses;
    }
}
   


});



document.addEventListener('DOMContentLoaded', generateUnderscore);