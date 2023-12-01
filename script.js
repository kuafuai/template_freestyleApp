// Initialize game variables
let snake = [];
let food = null;
let direction = "right";
let score = 0;
let difficulty = 1;

// Initialize game area
const gameArea = document.getElementById("game-area");

// Initialize control panel elements
const scoreDisplay = document.getElementById("score");
const difficultyDisplay = document.getElementById("difficulty");
const restartButton = document.getElementById("restart-button");
const exitButton = document.getElementById("exit-button");

// Initialize game
function initGame() {
    // Initialize snake position
    snake = [{ x: 0, y: 0 }];

    // Generate initial food
    generateFood();

    // Start game loop
    setInterval(gameLoop, 1000 / difficulty);
}

// Generate food at a random position
function generateFood() {
    // Generate random x and y coordinates within the game area
    const maxX = gameArea.offsetWidth / 10;
    const maxY = gameArea.offsetHeight / 10;
    const foodX = Math.floor(Math.random() * maxX);
    const foodY = Math.floor(Math.random() * maxY);

    // Create food element
    food = document.createElement("div");
    food.classList.add("food");
    food.style.left = foodX * 10 + "px";
    food.style.top = foodY * 10 + "px";

    // Append food to game area
    gameArea.appendChild(food);
}

// Game loop
function gameLoop() {
    // Move snake
    moveSnake();

    // Check for collision with food
    if (checkCollision(snake[0], food)) {
        // Increase score
        score++;
        scoreDisplay.textContent = "Score: " + score;

        // Increase difficulty
        if (score % 5 === 0) {
            difficulty++;
            difficultyDisplay.textContent = "Difficulty: " + difficulty;
        }

        // Remove food
        gameArea.removeChild(food);

        // Generate new food
        generateFood();
    }

    // Check for collision with self or game boundaries
    if (checkCollisionWithSelf() || checkCollisionWithBoundaries()) {
        // Game over
        gameOver();
    }
}

// Move snake
function moveSnake() {
    // Get current head position
    const head = { ...snake[0] };

    // Update head position based on direction
    if (direction === "up") {
        head.y -= 1;
    } else if (direction === "down") {
        head.y += 1;
    } else if (direction === "left") {
        head.x -= 1;
    } else if (direction === "right") {
        head.x += 1;
    }

    // Add new head to snake
    snake.unshift(head);

    // Remove tail
    snake.pop();

    // Update snake position on game area
    updateSnakePosition();
}

// Update snake position on game area
function updateSnakePosition() {
    // Remove existing snake elements from game area
    const snakeElements = document.getElementsByClassName("snake");
    while (snakeElements.length > 0) {
        gameArea.removeChild(snakeElements[0]);
    }

    // Add snake elements to game area
    for (let i = 0; i < snake.length; i++) {
        const snakeElement = document.createElement("div");
        snakeElement.classList.add("snake");
        snakeElement.style.left = snake[i].x * 10 + "px";
        snakeElement.style.top = snake[i].y * 10 + "px";
        gameArea.appendChild(snakeElement);
    }
}

// Check for collision between two objects
function checkCollision(obj1, obj2) {
    return obj1.x === obj2.offsetLeft / 10 && obj1.y === obj2.offsetTop / 10;
}

// Check for collision with self
function checkCollisionWithSelf() {
    for (let i = 1; i < snake.length; i++) {
        if (checkCollision(snake[0], snake[i])) {
            return true;
        }
    }
    return false;
}

// Check for collision with game boundaries
function checkCollisionWithBoundaries() {
    const maxX = gameArea.offsetWidth / 10;
    const maxY = gameArea.offsetHeight / 10;
    return snake[0].x < 0 || snake[0].x >= maxX || snake[0].y < 0 || snake[0].y >= maxY;
}

// Game over
function gameOver() {
    // Stop game loop
    clearInterval(gameLoop);

    // Display game over message
    alert("Game Over!");

    // Reset game variables
    snake = [];
    food = null;
    direction = "right";
    score = 0;
    difficulty = 1;

    // Reset display
    scoreDisplay.textContent = "Score: " + score;
    difficultyDisplay.textContent = "Difficulty: " + difficulty;

    // Remove existing snake elements from game area
    const snakeElements = document.getElementsByClassName("snake");
    while (snakeElements.length > 0) {
        gameArea.removeChild(snakeElements[0]);
    }

    // Remove existing food element from game area
    if (food) {
        gameArea.removeChild(food);
    }

    // Restart game
    initGame();
}

// Event listeners for keyboard input
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp" && direction !== "down") {
        direction = "up";
    } else if (event.key === "ArrowDown" && direction !== "up") {
        direction = "down";
    } else if (event.key === "ArrowLeft" && direction !== "right") {
        direction = "left";
    } else if (event.key === "ArrowRight" && direction !== "left") {
        direction = "right";
    }
});

// Event listener for restart button
restartButton.addEventListener("click", function() {
    gameOver();
});

// Event listener for exit button
exitButton.addEventListener("click", function() {
    // Close the game window or redirect to another page
});

// Start the game
initGame();
