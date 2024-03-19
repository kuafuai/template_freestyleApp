// script.js

// Game variables
let score = 0;
let lives = 3;
let highScore = 0;
let gamePaused = false;
let soundEnabled = true;

// Game elements
const gameMap = document.getElementById('game-map');
const scoreValue = document.getElementById('score-value');
const livesValue = document.getElementById('lives-value');
const highScoreValue = document.getElementById('high-score-value');
const pauseButton = document.getElementById('pause-button');
const soundButton = document.getElementById('sound-button');

// Initialize game
function initializeGame() {
    // Set initial values
    score = 0;
    lives = 3;
    highScore = getHighScoreFromLocalStorage();

    // Update game elements
    updateScore();
    updateLives();
    updateHighScore();

    // Add event listeners
    pauseButton.addEventListener('click', togglePause);
    soundButton.addEventListener('click', toggleSound);

    // Start game loop
    gameLoop();
}

// Game loop
function gameLoop() {
    if (!gamePaused) {
        // Update game logic
        // ...

        // Update game elements
        // ...
    }

    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Update score
function updateScore() {
    scoreValue.textContent = score;
}

// Update lives
function updateLives() {
    livesValue.textContent = lives;
}

// Update high score
function updateHighScore() {
    highScoreValue.textContent = highScore;
}

// Toggle pause
function togglePause() {
    gamePaused = !gamePaused;
}

// Toggle sound
function toggleSound() {
    soundEnabled = !soundEnabled;
}

// Get high score from local storage
function getHighScoreFromLocalStorage() {
    const storedHighScore = localStorage.getItem('highScore');
    return storedHighScore ? parseInt(storedHighScore) : 0;
}

// Save high score to local storage
function saveHighScoreToLocalStorage() {
    localStorage.setItem('highScore', highScore);
}

// Game over
function gameOver() {
    // Update high score if necessary
    if (score > highScore) {
        highScore = score;
        saveHighScoreToLocalStorage();
        updateHighScore();
    }

    // Reset game
    initializeGame();
}

// Initialize game
initializeGame();
