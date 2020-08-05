// Elements
var letterBtns = document.querySelectorAll('.letter');

for (let i = 0; i < letterBtns.length; i++) {
    letterBtns[i].addEventListener('click', guessLetter);
}

//Variables
let availableWords = allKnownWords;
let gameWord = pickRandomWord();

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
        }
    }

    if (guessTrue) {
        //RUN IF MATCH
    }
    else {
        //RUN IF NO MATCH
    }

    // Disable button for guessed letter
    e.target.disabled = true;
}

// AI guess mode

// Two player guess mode

// Head to head mode