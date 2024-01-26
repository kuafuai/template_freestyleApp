// Define global variables
var gameArea = document.getElementById("game-area");
var scoreboard = document.getElementById("scoreboard");
var startButton = document.getElementById("start-button");
var snake = [];
var food = {};
var direction = "";
var score = 0;
var gameInterval;

// Define game constants
var GAME_WIDTH = 400;
var GAME_HEIGHT = 400;
var SNAKE_SIZE = 20;
var FOOD_SIZE = 20;
var GAME_SPEED = 200;

// Initialize the game
function initGame() {
    createSnake();
    createFood();
    direction = "right";
    score = 0;
    scoreboard.innerHTML = "Score: " + score;
    gameInterval = setInterval(updateGame, GAME_SPEED);
}

// Create the initial snake
function createSnake() {
    var snakeHead = { x: 0, y: 0 };
    snake.push(snakeHead);
}

// Create food at a random position
function createFood() {
    var foodX = Math.floor(Math.random() * (GAME_WIDTH / FOOD_SIZE)) * FOOD_SIZE;
    var foodY = Math.floor(Math.random() * (GAME_HEIGHT / FOOD_SIZE)) * FOOD_SIZE;
    food = { x: foodX, y: foodY };
}

// Update the game state
function updateGame() {
    moveSnake();
    if (checkCollision()) {
        endGame();
    } else {
        if (checkFoodCollision()) {
            eatFood();
        }
        drawGame();
    }
}

// Move the snake
function moveSnake() {
    var snakeHead = { x: snake[0].x, y: snake[0].y };
    if (direction === "up") {
        snakeHead.y -= SNAKE_SIZE;
    } else if (direction === "down") {
        snakeHead.y += SNAKE_SIZE;
    } else if (direction === "left") {
        snakeHead.x -= SNAKE_SIZE;
    } else if (direction === "right") {
        snakeHead.x += SNAKE_SIZE;
    }
    snake.unshift(snakeHead);
    snake.pop();
}

// Check for collision with the snake's body or game boundaries
function checkCollision() {
    var snakeHead = snake[0];
    if (snakeHead.x < 0 || snakeHead.x >= GAME_WIDTH || snakeHead.y < 0 || snakeHead.y >= GAME_HEIGHT) {
        return true;
    }
    for (var i = 1; i < snake.length; i++) {
        if (snake[i].x === snakeHead.x && snake[i].y === snakeHead.y) {
            return true;
        }
    }
    return false;
}

// Check for collision with food
function checkFoodCollision() {
    var snakeHead = snake[0];
    if (snakeHead.x === food.x && snakeHead.y === food.y) {
        return true;
    }
    return false;
}

// Eat the food and update the score
function eatFood() {
    score++;
    scoreboard.innerHTML = "Score: " + score;
    createFood();
}

// Draw the game on the game area
function drawGame() {
    gameArea.innerHTML = "";
    drawSnake();
    drawFood();
}

// Draw the snake on the game area
function drawSnake() {
    for (var i = 0; i < snake.length; i++) {
        var snakePart = document.createElement("div");
        snakePart.style.width = SNAKE_SIZE + "px";
        snakePart.style.height = SNAKE_SIZE + "px";
        snakePart.style.backgroundColor = "green";
        snakePart.style.position = "absolute";
        snakePart.style.left = snake[i].x + "px";
        snakePart.style.top = snake[i].y + "px";
        gameArea.appendChild(snakePart);
    }
}

// Draw the food on the game area
function drawFood() {
    var foodElement = document.createElement("div");
    foodElement.style.width = FOOD_SIZE + "px";
    foodElement.style.height = FOOD_SIZE + "px";
    foodElement.style.backgroundColor = "red";
    foodElement.style.position = "absolute";
    foodElement.style.left = food.x + "px";
    foodElement.style.top = food.y + "px";
    gameArea.appendChild(foodElement);
}

// End the game and display the final score
function endGame() {
    clearInterval(gameInterval);
    alert("Game Over! Your score is " + score);
}

// Event listener for keydown events to change the snake's direction
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

// Event listener for start button click event to start the game
startButton.addEventListener("click", function() {
    initGame();
});
