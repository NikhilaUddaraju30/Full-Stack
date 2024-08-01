const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNumber); 

let attempts = 0;
const maxAttempts = 4; 

function guessNumberGame() {
    while (attempts < maxAttempts) {
        let userGuess = prompt(`Guess the number (between 1 and 100). You have ${maxAttempts - attempts} attempts left.`);
        userGuess = parseInt(userGuess);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert("Enter the valid number between 1 and 100.");
            continue; 
        }
        attempts++;
        if (userGuess === randomNumber) {
            alert("Congratulations! You guessed the number: " + randomNumber + " correctly in " + attempts + " attempts.");
            break; 
        } else if (userGuess < randomNumber) {
            alert("Number is too low! Please try again.");
        } else {
            alert("Number is too high! Please try again.");
        }
    }
    if (attempts === maxAttempts) {
        alert("Sorry, your attempts are completed. The number is: " + randomNumber);
    }
}
guessNumberGame();