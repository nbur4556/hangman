// Elements
var letterBtns = document.querySelectorAll('.letter');
// var livesSec = document.querySelector('#lives');
var hangmanDiag = document.querySelector('#hangman-diagram');
var lettersCont = document.querySelector('#letters-container');
var endMessage = document.querySelector('#end-message');

//Variables
let availableWords = allKnownWords;
let diagramImgs = [
    './assets/images/slice7.png',
    './assets/images/slice6.png',
    './assets/images/slice5.png',
    './assets/images/slice4.png',
    './assets/images/slice3.png',
    './assets/images/slice2.png',
    './assets/images/slice1.png'
];
let gameWord;
let gameLetters;
let lives;

initGame();

//New Game
function initGame() {
    //Reset Variables
    gameWord = pickRandomWord();
    gameLetters = new Array(gameWord.length);
    lives = 6;

    //Setup UI
    for (let i = 0; i < letterBtns.length; i++) {
        letterBtns[i].addEventListener('click', guessLetter);
    }

    for (let i = 0; i < gameLetters.length; i++) {
        //Create empty slot for letters and append to letters container
        let letterBox = document.createElement('div');
        letterBox.setAttribute('class', 'text-box');

        lettersCont.appendChild(letterBox);
    }

    hangmanDiag.setAttribute('src', diagramImgs[0]);
}

// Word is chosen randomly ftom available word array
function pickRandomWord() {
    let wordIndex = Math.floor(Math.random() * availableWords.length) + 1;
    return availableWords[wordIndex];
}

//Check if guessed letter is in gameWord
function guessLetter(e) {
    let guessLetter = e.target.textContent;
    let guessTrue = false;

    //Loop through gameword and check if letter matches
    for (let i = 0; i < gameWord.length; i++) {
        if (guessLetter.toLowerCase() == gameWord[i].toLowerCase()) {
            guessTrue = true;

            gameLetters[i] = guessLetter.toLowerCase();
            lettersCont.children[i].textContent = guessLetter;
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

//When guess is correct
function correctGuess() {
    let foundAllLetters = true;

    for (let i = 0; i < gameLetters.length; i++) {
        if (gameLetters[i] == undefined) {
            foundAllLetters = false;
        }
    }

    //Winner
    if (foundAllLetters == true) {
        endMessage.textContent = 'You Win!';
    }
}

//When guess is incorrect
function incorrectGuess() {
    if (lives <= 1) {
        //Gameover
        endMessage.textContent = 'Game Over';
        hangmanDiag.setAttribute('src', diagramImgs[6]);
    }
    else {
        lives--;
        hangmanDiag.setAttribute('src', diagramImgs[6 - lives]);
    }
}

// AI guess mode

// Two player guess mode

// Head to head mode