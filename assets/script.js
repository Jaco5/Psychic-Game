var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0
var losses = 0
var guesses = 9

console.log("sdfasdf");

document.onkeyup = function (event) {

    var playerLetter = event.key;

    var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (computerChoices.includes(playerLetter)) {

        if (playerLetter === computerLetter) {
            wins++; guesses = 9; 
            alert('You got it!');
        }
        else if (playerLetter != computerLetter) {
            guesses--; 
        }
        if (guesses === 0) {
            losses++; guesses = 9; guessed = []
        }
    } else {
        alert('You must choose a letter!');
    }

    document.getElementById("player-guess").innerHTML = "   " + playerLetter;
    document.getElementById("win-counter").innerHTML = " " + wins;
    document.getElementById("loss-counter").innerHTML = " " + losses;
    document.getElementById("remaining").innerHTML = " " + guesses;
    
}

