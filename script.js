// script.js

// Define game variables
var score = 0;
var time = 60;
var numberOfFish = 0;
var gameInterval;
var gameOver = false;

// Get game elements
var currentFishElement = document.getElementById("fish");
var scoreElement = document.getElementById("score");
var timeElement = document.getElementById("time");
var gameOverElement = document.getElementById("game-over");

// Set event listener for mouse movement
document.addEventListener("mousemove", moveFish);

// Start game
startGame();

// Function to start the game
function startGame() {
    // Generate fish
    generateFish();

    // Start game interval
    gameInterval = setInterval(updateGame, 1000);
}

// Function to generate fish
function generateFish() {
    // Generate random position for fish
    var randomX = Math.floor(Math.random() * 550) + 25;
    var randomY = Math.floor(Math.random() * 350) + 25;

    // Create fish element
    var fish = document.createElement("div");
    fish.className = "fish";
    fish.style.top = randomY + "px";
    fish.style.left = randomX + "px";

    // Add fish to pool
    var poolElement = document.getElementById("pool");
    if (poolElement) {
        poolElement.appendChild(fish);
    } else {
        console.error("Pool element not found");
    }

    // Increment fish count
    numberOfFish++;
}

// Function to move the fish based on mouse movement
function moveFish(event) {
    // Get mouse position
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Set fish position
    currentFishElement.style.top = mouseY - 25 + "px";
    currentFishElement.style.left = mouseX - 25 + "px";
}

// Function to update the game
function updateGame() {
    // Update time
    time--;
    timeElement.innerHTML = "Time: " + time;

    // Check if game over
    if (time <= 0) {
        endGame();
    }
}

// Function to handle fish being eaten
function eatFish() {
    // Remove fish from pool
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    } else {
        console.error("Parent node not found");
    }

    // Increment score
    score++;
    scoreElement.innerHTML = "Score: " + score;

    // Generate new fish
    generateFish();
}

// Function to end the game
function endGame() {
    // Stop game interval
    clearInterval(gameInterval);

    // Set game over flag
    gameOver = true;

    // Show game over message
    if (gameOverElement) {
        gameOverElement.innerHTML = "Game Over";
        gameOverElement.style.display = "block";
    } else {
        console.error("Game over element not found");
    }
}