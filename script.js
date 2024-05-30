// Constants
const gameArea = document.getElementById("gameArea");
const scoreElement = document.getElementById("score");
const lengthElement = document.getElementById("length");
const gameOverElement = document.getElementById("gameOver");

// Variables
let score = 0;
let length = 1;
let snake = [{ x: 0, y: 0 }];
let food = { x: 0, y: 0 };
let direction = "right";
let intervalId = null;

// Initialize game
function initializeGame() {
    createSnake();
    createFood();
    intervalId = setInterval(moveSnake, 200);
}

// Create initial snake
function createSnake() {
    const snakeElement = document.createElement("div");
    snakeElement.classList.add("snake");
    gameArea.appendChild(snakeElement);
}

// Create food at random position
function createFood() {
    const foodElement = document.createElement("div");
    foodElement.classList.add("food");
    gameArea.appendChild(foodElement);
}

// Move snake
function moveSnake() {
    const head = { x: snake[0].x, y: snake[0].y };
  
    if (direction === "right") {
        head.x++;
    } else if (direction === "left") {
        head.x--;
    } else if (direction === "up") {
        head.y--;
    } else if (direction === "down") {
        head.y++;
    }
  
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        eatFood();
    } else {
        snake.pop();
    }
  
    checkCollision();
    updateScoreAndLength();
}

// Increase score and length when snake eats food
function eatFood() {
    score += 10;
    length++;
    createFood();
}

// Check if snake hits the boundary or itself
function checkCollision() {
    const head = snake[0];
  
    if (head.x < 0 || head.x >= gameArea.offsetWidth / 20 || head.y < 0 || head.y >= gameArea.offsetHeight / 20) {
        gameOver();
    }
  
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            break;
        }
    }
}

// Update score and length elements
function updateScoreAndLength() {
    scoreElement.innerText = "Score: " + score;
    lengthElement.innerText = "Length: " + length;
}

// Game over
function gameOver() {
    clearInterval(intervalId);
    gameOverElement.innerText = "Game Over";
}

// Event listener for keydown event
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight" && direction !== "left") {
        direction = "right";
    } else if (event.key === "ArrowLeft" && direction !== "right") {
        direction = "left";
    } else if (event.key === "ArrowUp" && direction !== "down") {
        direction = "up";
    } else if (event.key === "ArrowDown" && direction !== "up") {
        direction = "down";
    }
});

// Initialize game
initializeGame();