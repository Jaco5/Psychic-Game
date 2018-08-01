var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var guessed=[]
var wins=0
var losses=0
var guesses=9

console.log("sdfasdf");

document.onkeyup = function(event) {

    var userGuess = event.key; 

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

if (userGuess === computerGuess) {
    wins++; guesses = 9; guessed = []
}
else if (userGuess != computerGuess){
     guesses--; guessed.push(userGuess); 
}
if (guesses === 0) {
    losses++; guesses = 9; guessed = []
}
document.getElementById("pGuess").innerHTML = " "+userGuess;
document.getElementById("winCount").innerHTML = " "+wins;
document.getElementById("lossCount").innerHTML = " "+losses;
document.getElementById("remaining").innerHTML = " "+guesses;
document.getElementById("soFar").innerHTML = " "+guessed;
}

