// main.js
// Game state variables
let snake = []; // Array to store snake's body positions
let direction = ""; // Current direction of the snake
let food = {}; // Object to store food position
let score = 0; // Current score

// Initialize game state
function initializeGame() {
    // Initialize snake's initial position, length, and direction
    snake = [{row: 0, column: 0}];
    direction = "right";

    // Generate initial food position
    food = generateFood();

    // Display initial game state
    displayGameState();
}

// Listen for keyboard events
document.addEventListener("keydown", function(event) {
    // Change snake's direction based on keyboard input
    changeDirection(event.keyCode);
});

// Update game state
function updateGameState() {
    // Move snake based on current direction
    moveSnake();

    // Check if snake has eaten the food
    if (hasEatenFood()) {
        // Increase snake's length and generate new food
        increaseSnakeLength();
        food = generateFood();

        // Increase score
        score++;
    }

    // Check if snake has collided with itself or the wall
    if (hasCollided()) {
        // End the game
        endGame();
    }

    // Display updated game state
    displayGameState();
}

// Generate random food position
function generateFood() {
    // Generate random row and column coordinates within the game area
    const row = Math.floor(Math.random() * gameAreaWidth);
    const column = Math.floor(Math.random() * gameAreaHeight);

    // Return food object with the generated position
    return {row, column};
}

// Increase snake's length
function increaseSnakeLength() {
    // Get the last position of the snake
    const lastPosition = snake[snake.length - 1];

    // Add a new position to the snake's body based on the last position and current direction
    switch (direction) {
        case "up":
            snake.push({row: lastPosition.row, column: lastPosition.column - 1});
            break;
        case "down":
            snake.push({row: lastPosition.row, column: lastPosition.column + 1});
            break;
        case "left":
            snake.push({row: lastPosition.row - 1, column: lastPosition.column});
            break;
        case "right":
            snake.push({row: lastPosition.row + 1, column: lastPosition.column});
            break;
    }
}

// Move snake based on current direction
function moveSnake() {
    // Get the head position of the snake
    const head = snake[0];

    // Create a new position for the head based on the current direction
    let newHead;
    switch (direction) {
        case "up":
            newHead = {row: head.row, column: head.column - 1};
            break;
        case "down":
            newHead = {row: head.row, column: head.column + 1};
            break;
        case "left":
            newHead = {row: head.row - 1, column: head.column};
            break;
        case "right":
            newHead = {row: head.row + 1, column: head.column};
            break;
    }

    // Add the new head position to the beginning of the snake array
    snake.unshift(newHead);

    // Remove the last position of the snake if it hasn't eaten food
    if (!hasEatenFood()) {
        snake.pop();
    }
}

// Check if snake has eaten the food
function hasEatenFood() {
    // Get the head position of the snake
    const head = snake[0];

    // Check if the head position matches the food position
    return head.row === food.row && head.column === food.column;
}

// Check if snake has collided with itself or the wall
function hasCollided() {
    // Get the head position of the snake
    const head = snake[0];

    // Check if the head position is outside the game area or collides with the snake's body
    return (
        head.row < 0 ||
        head.row >= gameAreaWidth ||
        head.column < 0 ||
        head.column >= gameAreaHeight ||
        snake.slice(1).some(position => position.row === head.row && position.column === head.column)
    );
}

// Change snake's direction based on keyboard input
function changeDirection(keyCode) {
    switch (keyCode) {
        case 37: // Left arrow key
            if (direction !== "right") {
                direction = "left";
            }
            break;
        case 38: // Up arrow key
            if (direction !== "down") {
                direction = "up";
            }
            break;
        case 39: // Right arrow key
            if (direction !== "left") {
                direction = "right";
            }
            break;
        case 40: // Down arrow key
            if (direction !== "up") {
                direction = "down";
            }
            break;
    }
}

// Display game state
function displayGameState() {
    // Clear game area
    clearGameArea();

    // Display snake
    displaySnake();

    // Display food
    displayFood();

    // Display score
    displayScore();
}

// Clear game area
function clearGameArea() {
    // Get the game area element
    const gameArea = document.getElementById("game-area");

    // Remove all child elements from the game area
    while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild);
    }
}

// Display snake
function displaySnake() {
    // Get the game area element
    const gameArea = document.getElementById("game-area");

    // Create a div element for each position of the snake and add it to the game area
    snake.forEach(position => {
        const snakePart = document.createElement("div");
        snakePart.className = "snake-part";
        snakePart.style.left = position.column * snakePartSize + "px";
        snakePart.style.top = position.row * snakePartSize + "px";
        gameArea.appendChild(snakePart);
    });
}

// Display food
function displayFood() {
    // Get the game area element
    const gameArea = document.getElementById("game-area");

    // Create a div element for the food and add it to the game area
    const foodElement = document.createElement("div");
    foodElement.className = "food";
    foodElement.style.left = food.column * snakePartSize + "px";
    foodElement.style.top = food.row * snakePartSize + "px";
    gameArea.appendChild(foodElement);
}

// Display score
function displayScore() {
    // Get the score area element
    const scoreArea = document.getElementById("score-area");

    // Update the score text
    scoreArea.textContent = "Score: " + score;
}

// End the game
function endGame() {
    // Display game over message
    alert("Game Over! Your score is " + score);

    // Reset game state
    initializeGame();
}

// Start the game
initializeGame();
