/* script.js */

// Define variables for game elements
var gameContainer = document.getElementById("game-container");
var snake = document.getElementById("snake");
var food = document.getElementById("food");

// Define variables for game state
var snakeSize = 1;
var snakePosition = { x: 0, y: 0 };
var foodPosition = { x: 0, y: 0 };
var direction = "right";

// Function to generate random position for food
function generateFoodPosition() {
    foodPosition.x = Math.floor(Math.random() * (gameContainer.offsetWidth / 20)) * 20;
    foodPosition.y = Math.floor(Math.random() * (gameContainer.offsetHeight / 20)) * 20;
}

// Function to update the game state
function updateGameState() {
    // Update snake position based on direction
    if (direction === "right") {
        snakePosition.x += 20;
    } else if (direction === "left") {
        snakePosition.x -= 20;
    } else if (direction === "up") {
        snakePosition.y -= 20;
    } else if (direction === "down") {
        snakePosition.y += 20;
    }

    // Check if snake has collided with the wall or itself
    // If collision occurs, end the game

    // Check if snake has eaten the food
    // If food is eaten, increase snake size and generate new food position

    // Update snake and food positions on the game container
}

// Function to handle keyboard input
function handleKeyPress(event) {
    // Update direction based on arrow key pressed
}

// Add event listener for keyboard input
document.addEventListener("keydown", handleKeyPress);

// Generate initial food position
generateFoodPosition();

// Start the game loop
setInterval(updateGameState, 200);
