// FUTURE IMPROVEMENTS:
// *I would like for the var answerDisplay to reset to the original after a win or loss 
//  - Maybe put in a button where it says "Try It Again" that would reset the guessesLeft, guessesSoFar and answerDisplay
//  ...And pick a new random letter

// created an array to hold all the possible letters
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// variables for the status of the game
var wins = 0;           //To increase as player guesses correct letter
var losses = 0;         //To decrease if player runs out of guesses and has not matched the letter
var guessesLeft = 10;   //To decrease as player presses incorrect keys
var guessesSoFar = [];  //Should populate a list of keys alreay pressed (use .push)
var userGuess = null;   //What the user picks by pressing a key

// Randomly chooses a letter. This is the Computer's letter.
var randomLetter = letters[Math.floor(Math.random()* letters.length)];  
console.log (randomLetter);
//Displays the starting text for the game with a placeholder for the letter
var answerDisplay = document.getElementById("answerDisplay")
answerDisplay.innerHTML = "<p>Are you psychic? Guess the letter I'm thinking of: <h1> ______ </h1></p>";

//used for testing along the way
console.log("Wins: " + wins + ", Losses: " + losses + ", GuessesLeft: " + guessesLeft + ", Guesses so far: " + guessesSoFar + ", User_Guess: " + userGuess + ", Computer_picked: " + randomLetter );


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    
    // When user presses a key, it is changed toUpperCase & saved as userGuess
	userGuess = event.key.toUpperCase();


    // Determines if user wins/loses
    if (userGuess === randomLetter) {
        wins ++;
        guessesLeft = 10;
        guessesSoFar = [];
        //display winning message
        answerDisplay.style.color = "#00cc00";
        answerDisplay.innerHTML = "<p>Wow! You must be psychic! The letter I was thinking of was: <h1>" + randomLetter + "</h1>Try It Again!</p>";
        //reset random letter for new game
        randomLetter = letters[Math.floor(Math.random()* letters.length)];
    } else if (guessesLeft < 2) {
        losses ++;
        guessesLeft = 10;
        guessesSoFar = [];
        //display losing message
        answerDisplay.style.color = "red";
        answerDisplay.innerHTML = "<p>Sorry, you are not psychic! The letter I was thinking of was: <h1>" + randomLetter + "</h1>Try It Again!</p>";
        //reset random letter for new game
        randomLetter = letters[Math.floor(Math.random()* letters.length)];        
    } else if (guessesSoFar.includes(userGuess)){  // *Typing a duplicate letter shouldn't count as a turn taken and shouldn't display in the string of guessesSoFar
        // guessesLeft = guessesLeft;       // I just want it to do NOTHING... turns out you don't have to input anything here.
        // guessesSoFar = guessesSoFar;
    } else if (letters.includes(userGuess)) {   //using .includes checks user input agains specific content included in var letters (eliminates spaces, tabs, alt, ctrl keys, etc.)
        guessesSoFar.push(userGuess);   //Updates the "Your Guesses So Far:" to include user's keystroke
        guessesLeft --;                 //decreases guessesLeft
    }
    
    console.log("Wins: " + wins + ", Losses: " + losses + ", GuessesLeft: " + guessesLeft + ", Guesses so far: " + guessesSoFar + ", User_Guess: " + userGuess + ", Computer_picked: " + randomLetter );

    

    var html = "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your Guesses So Far: " + guessesSoFar + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;
}

 
    // ***** A list of my id's and corresponding vars  *****
    //    id="displayWins"          var wins = 0;           
    //    id="displayLosses"        var losses = 0;         
    //    id="displayGuessLeft"     var guessesLeft = 0;    
    //    id="displaysoFar"         var guessesSoFar = "";  
    //    id="displayTheLetter"     var randomLetter        
