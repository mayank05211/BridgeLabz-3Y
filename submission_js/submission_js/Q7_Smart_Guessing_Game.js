// Q7: Smart Guessing Game
// Generate a secret integer from 1 through 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value: change this number to try different guesses.
const userGuess = 25;

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within three numbers of the secret.
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber && userGuess >= 1 && userGuess <= 50) {
        console.log("Too high");
    } else if (userGuess < secretNumber && userGuess >= 1 && userGuess <= 50) {
        console.log("Too low");
    } else {
        console.log("Please enter a number between 1 and 50.");
    }
}

console.log(`(Testing) Secret number: ${secretNumber}`);
