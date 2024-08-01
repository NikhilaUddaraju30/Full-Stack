let score = 0;

let answer1 = prompt("What is jasprit bumrah jersey number?");
    if (answer1.toLowerCase() === "93") {
    alert("correct!");
    score++;
    } else {
        alert("Incorrect. The correct answer is 93.");
    }

let answer2 = prompt("What is 8-5");
    if (answer2 === "3") {
        alert("correct!");
        score++;
    } else {
        alert("Incorrect. The correct answer is 3.");
    }

let answer3 = prompt("What is the character name of prabhas in darling movie?");
    if (answer3.trim().toLowerCase() === "prabha") {
        alert("Correct! ");
        score++;
    } else {
        alert("Incorect. The correct answer is prabha.");
}

alert("You scored " + score + " out of 3!");