// PROBLEMS:
// ***Losses counts up as guesses left hits zero, however, it stays on the selected random letter until that letter is guessed. I need it to reset after letter is NOT guessed after 10 tries.
// **"Your Guesses so far" only shows the last typed letter. I would like for it to list all of the inputs until the game is lost. 
// *"Your Guesses so far" includes every letter/keystroke imaginable... including "tab","control", etc.



// create an array to hold all the possible letters
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// variables for the status of the game
var wins = "";
var losses = "";
var guessesLeft = 10;
var guessesSoFar = "";

// Randomly chooses a letter. This is the Computer's letter.
var randomLetter = letters[Math.floor(Math.random()* letters.length)];


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    var guess = event.key;
    // Make the user's guess uppercase to match the letters in the Array. There is probably a better way to do this...
    var userGuess = guess.toUpperCase();

    // Determines if user wins/loses
    if (userGuess === randomLetter) {
        wins ++;
        resetGame = true;
    } else if (guessesLeft<2) {
        losses ++;
        guessesLeft = 10
        resetGame = true;
    } 
        else {
        guessesLeft --;
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
            guessSoFarDisplay.innerHTML = "Your Guesses so far: " + userGuess;
}

 