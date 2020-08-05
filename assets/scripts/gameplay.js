// Elements
var letterBtns = document.querySelectorAll('.letter');

for (let i = 0; i < letterBtns.length; i++) {
    letterBtns[i].addEventListener('click', guessLetter);
}

//Variables
let availableWords = allKnownWords;
let gameWord = pickRandomWord();
let gameLetters = new Array(gameWord.length);
let lives = 6;

console.log(gameWord);

// Word is chosen randomly ftom available word array
function pickRandomWord() {
    let wordIndex = Math.floor(Math.random() * availableWords.length) + 1;
    return availableWords[wordIndex];
}

//Check if guessed letter is in gameWord
function guessLetter(e) {
    let guessLetter = e.target.textContent;
    let guessTrue = false;

    for (let i = 0; i < gameWord.length; i++) {
        if (guessLetter.toLowerCase() == gameWord[i].toLowerCase()) {
            guessTrue = true;
            gameLetters[i] = guessLetter.toLowerCase();
        }
    }

    if (guessTrue) {
        correctGuess();
    }
    else {
        incorrectGuess();
    }

    // Disable button for guessed letter
    e.target.disabled = true;
}

function correctGuess() {
    let foundAllLetters = true;

    for (let i = 0; i < gameLetters.length; i++) {
        if (gameLetters[i] == undefined) {
            foundAllLetters = false;
        }
    }

    if (foundAllLetters == true) {
        console.log("You Win!");
    }
}

function incorrectGuess() {
    lives--;
    if (lives <= 0) {
        console.log('Game Over');
    }
}

// AI guess mode

// Two player guess mode

// Head to head mode