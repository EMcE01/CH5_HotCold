"use strict";

// global variables 
let randomNum = 0;
let tries = 0;
const history = [];

// helper function
const getRandomInt = (max = 100) => {
    let num = Math.random() * max;  // get a random number between 0 and max
    num = Math.ceil(num);           // round up to nearest integer
    return num;
};

// event handler functions
const guessClick = () => {
    const guess = parseInt(document.querySelector("#number").value);
    let distance = Math.abs(randomNum - guess);


    let message = "";
    if (isNaN(guess)) {
        message = "Not a valid number. Please enter a valid number."
    } else if (guess < 1 || guess > 100) {
        message = "Invalid number. Enter a number between 1 and 100.";
    }
    switch (true) {
        case (distance === 0):
            const lastWord = (tries === 1) ? "try" : "tries";
            message = `Fire! You guessed it in ${tries} ${lastWord}!`;
            //color = "green";
            //updateBestScore();
            break;
        case (distance <= 5):
            message = "Hot! (Within 5)";
            //color = red;
            break;
        case (distance <= 10 && distance >= 5):
            message = "Hot! (Within 5)";
            //color = orange;
            break;
        case (distance <= 20 && distance >= 10):
            message = "Hot! (Within 5)";
            // color = red;
            break;
        case (distance <= 30 && distance >= 20):
            message = "Hot! (Within 5)";
            // color = red;
            break;
        case (distance <= 40 && distance >= 30):
            message = "Hot! (Within 5)";
            // color = red;
            break;
        default:
            message = "Freezing cold"
    }
    document.querySelector("#message").textContent = message;
    messageLabel.style.color = color;
}
const playAgainClick = () => {
    randomNum = getRandomInt(10);
    tries = 0;
    console.log(randomNum);
    document.querySelector("#number").value = "";
    document.querySelector("#message").textContent = "";
    quessInput.focus();
};

document.addEventListener("DOMContentLoaded", () => {
    playAgainClick(); // initial a new game

    document.querySelector("#guess").addEventListener("click", guessClick);
    document.querySelector("#play_again").addEventListener("click", playAgainClick);

    //enable "enter" key
    document.querySelector("#number").addEventListener("keydown", (event) => {
        if (event.key === "Enter")
            guessClick();
    });
});