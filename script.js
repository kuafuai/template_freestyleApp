// script.js
// Define initial game variables
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var snakeSize = 20;
var snake = [
    { x: canvas.width / 2, y: canvas.height / 2 }
];
var food = { x: 0, y: 0 };
var score = 0;
var length = 1;
var direction = "right";

// Generate random food position
function generateFood() {
    food.x = Math.floor(Math.random() * (canvas.width / snakeSize)) * snakeSize;
    food.y = Math.floor(Math.random() * (canvas.height / snakeSize)) * snakeSize;
}

// Move snake based on direction
function moveSnake(dir) {
    if (dir === "up" && direction !== "down") {
        direction = "up";
    } else if (dir === "left" && direction !== "right") {
        direction = "left";
    } else if (dir === "down" && direction !== "up") {
        direction = "down";
    } else if (dir === "right" && direction !== "left") {
        direction = "right";
    }
}

// Check if snake collides with food
function checkFoodCollision() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        // Increase score and length
        score++;
        length++;
        // Generate new food
        generateFood();
    }
}

// Check if snake collides with boundaries or itself
function checkCollision() {
    if (
        snake[0].x < 0 ||
        snake[0].x >= canvas.width ||
        snake[0].y < 0 ||
        snake[0].y >= canvas.height
    ) {
        // Game over
        gameOver();
    }
    for (var i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            // Game over
            gameOver();
        }
    }
}

// Game over logic
function gameOver() {
    // Display game over message
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
    // Stop game loop
    clearInterval(gameLoop);
}

// Update game canvas
function updateCanvas() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Move snake
    var head = { x: snake[0].x, y: snake[0].y };
    if (direction === "up") {
        head.y -= snakeSize;
    } else if (direction === "left") {
        head.x -= snakeSize;
    } else if (direction === "down") {
        head.y += snakeSize;
    } else if (direction === "right") {
        head.x += snakeSize;
    }
    snake.unshift(head);
    
    // Check food collision
    checkFoodCollision();
    
    // Check collision
    checkCollision();
    
    // Remove tail if length exceeds snake length
    if (snake.length > length) {
        snake.pop();
    }
    
    // Draw snake
    for (var i = 0; i < snake.length; i++) {
        ctx.fillStyle = "#0f0";
        ctx.fillRect(snake[i].x, snake[i].y, snakeSize, snakeSize);
    }
    
    // Draw food
    ctx.fillStyle = "#f00";
    ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
    
    // Update score and length
    document.getElementById("score").textContent = score;
    document.getElementById("length").textContent = length;
}

// Generate initial food
generateFood();

// Start game loop
var gameLoop = setInterval(updateCanvas, 100);
