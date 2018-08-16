//Creating an array of words
const words = ["bulbasaur", "charmander", "squirtle", "pikachu", "jigglypuff", "caterpie", "butterfree", "beedrill", "pidgey", "raichu", "vulpix", "dragonite", "oddish", "goedude", "arcanine", "rapidash", "alakazam"];

//Selecting words at random
let randNum = Math.floor(Math.random() * words.length);
let chosenWord = words[randNum];
let underScore = [];
let rightWord = [];
let wrongWord = [];

//Dom Manipulation
let docUnderScore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("rightGuess");
let docWrongGuess = document.getElementsByClassName("wrongGuess");


//Main {
console.log(chosenWord);

//Creates underscores based on length of the words

let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;

}



//Gets Users guess

document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
//If the User guesses right
    if(chosenWord.indexOf(keyword) > -1) {
//Add to right words array
    rightWord.push(keyword);
//Replace underscore with right letter 
    underScore[chosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join(" "); 
    docRightGuess[0].innerHTML = rightWord;
//Checks to see if user word matches guesses
    if(underScore.join("") == chosenWord) {
        alert("You Caught Em All!");
    }        
}
else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
}

docUnderScore.innerHTML = generateUnderscore();
});


