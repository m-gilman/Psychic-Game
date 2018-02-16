// create an array to hold all the possible letters
var letters = ["A" "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // variables for the status of the game
var wins = "";
var losses = "";
var guessesLeft = 10;
var guessesSoFar = "";
//    var correct = false; 

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    var guess = event.key;
    // Make the user's guess uppercase to match the letters in the Array. There is probably a better way to do this...
    var userGuess = guess.toUpperCase();
console.log(userGuess);


    // Randomly chooses a letter. This is the Computer's letter.
    var randomLetter = letters[Math.floor(Math.random()* letters.length)];

    console.log (randomLetter); //works

    // Determines if user wins/loses
    if (userGuess === randomLetter) {
        wins ++;
    } else {
        losses ++;
    }
    
    console.log("wins: " + wins);
    console.log("losses: " + losses);
            
    // latch onto the "displayWins" id using the JavaScript ".getElementById" selector.
        var winsDisplay = document.getElementById("displayWins")
    // We then use the JavaScript method ".innerHTML" to change the content
            winsDisplay.innerHTML = "Wins: " + wins;

        var lossDisplay = document.getElementById("displayLosses")
            lossDisplay.innerHTML = "Losses: " + losses;

        var guessLeftDisplay = document.getElementById("displayGuessLeft")
            guessLeftDisplay.innerHTML = "Guesses Left: " + guessesLeft;

        var guessSoFarDisplay = document.getElementById("displaysoFar")
            guessSoFarDisplay.innerHTML = "Your Guesses so far: " + guessesSoFar;
}

 