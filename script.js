"use strict";

// Selecting Elements
// Header
const againBtn = document.querySelector(".again");
const number = document.querySelector(".number");

// Main Section Left
const inputField = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");

// Main Section Right
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

// Generate Random Number
const generateRandomIntegerBetween1and = stop =>
    Math.trunc(Math.random() * stop + 1);

// Handling Button Clicks
const checkNumber = () => {
    const guessedNumber = Number(inputField.value);
    let currScore = Number(score.textContent);

    if (guessedNumber > 20 || guessedNumber < 1 || currScore <= 0) {
        message.textContent = "🛑 Number Must Lie Between 1 and 20";
    } else {
        if (secretNumber === guessedNumber) {
            message.textContent = "🤟 Correct!!!";
            number.textContent = secretNumber;
            if (currScore > highscore.textContent) {
                highscore.textContent = currScore;
                document.body.style.backgroundColor = "#60b347";
            }
        } else {
            message.textContent =
                secretNumber > guessedNumber
                    ? "󠁟📉 Too Low..."
                    : "📈 Too High...";
            score.textContent = currScore - 1;
            currScore--;
        }
    }
    if (currScore === 0) {
        message.textContent = "🤭 Oops Better Luck Next Time.";
        document.body.style.backgroundColor = "#cf0000";
    }

    return;
};

const newGame = () => {
    secretNumber = generateRandomIntegerBetween1and(20);
    score.textContent = 20;
    message.textContent = "🤨 Start guessing...";
    document.body.style.backgroundColor = "#222";
    number.textContent = "?";
    inputField.value = " ";
};

checkBtn.addEventListener("click", checkNumber);
againBtn.addEventListener("click", newGame);

//Handling Key Press
document.addEventListener("keypress", event => {
    // Enter
    if (event.keyCode === 13) {
        checkNumber();
    }
    // R
    else if (event.keyCode === 114) {
        newGame();
    }
});

// Driver Code
let secretNumber;
newGame();
