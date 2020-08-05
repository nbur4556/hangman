// Player guess mode
var availableWords = allKnownWords;

function pickRandomWord() {
    var wordIndex = Math.floor(Math.random() * availableWords.length) + 1;
    return availableWords[wordIndex];
}

// AI guess mode

// Two player guess mode

// Head to head mode