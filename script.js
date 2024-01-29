// Game constants
const MAP_SIZE = 20;
const SNAKE_SPEED = 200; // in milliseconds

// Game variables
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let direction = "right";
let gameStatus = "start";
let intervalId;

// Game initialization
function initGame() {
    drawSnake();
    drawFood();
    intervalId = setInterval(moveSnake, SNAKE_SPEED);
}

// Draw the snake on the map
function drawSnake() {
    const map = document.getElementById("map");
    map.innerHTML = "";

    snake.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add("snake");
        map.appendChild(snakeElement);
    });
}

// Draw the food on the map
function drawFood() {
    const map = document.getElementById("map");
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    map.appendChild(foodElement);
}

// Move the snake
function moveSnake() {
    const head = { x: snake[0].x, y: snake[0].y };

    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "left":
            head.x--;
            break;
        case "right":
            head.x++;
            break;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        // Snake ate the food
        generateFood();
    } else {
        snake.pop();
    }

    if (isCollision()) {
        // Game over
        clearInterval(intervalId);
        gameStatus = "over";
        showGameOver();
    }

    drawSnake();
}

// Generate new food position
function generateFood() {
    food.x = Math.floor(Math.random() * MAP_SIZE) + 1;
    food.y = Math.floor(Math.random() * MAP_SIZE) + 1;
}

// Check for collision with walls or snake's body
function isCollision() {
    const head = snake[0];

    if (
        head.x < 1 ||
        head.x > MAP_SIZE ||
        head.y < 1 ||
        head.y > MAP_SIZE ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        return true;
    }

    return false;
}

// Handle user input
document.addEventListener("keydown", event => {
    if (gameStatus === "start") {
        gameStatus = "play";
        initGame();
    } else if (gameStatus === "play") {
        switch (event.key) {
            case "ArrowUp":
                if (direction !== "down") {
                    direction = "up";
                }
                break;
            case "ArrowDown":
                if (direction !== "up") {
                    direction = "down";
                }
                break;
            case "ArrowLeft":
                if (direction !== "right") {
                    direction = "left";
                }
                break;
            case "ArrowRight":
                if (direction !== "left") {
                    direction = "right";
                }
                break;
        }
    }
});

// Show game over message
function showGameOver() {
    const map = document.getElementById("map");
    const gameOverElement = document.createElement("div");
    gameOverElement.classList.add("game-over");
    gameOverElement.textContent = "Game Over";
    map.appendChild(gameOverElement);
}

// Check if the game is over
function isGameOver() {
    return gameStatus === "over";
}

// Initialize the game
initGame();

// Export the necessary functions for testing
module.exports = {
    drawSnake,
    drawFood,
    moveSnake,
    generateFood,
    isCollision,
    showGameOver,
    isGameOver
};
