// Define variables
var gameArea = document.getElementById("game-area");
var scoreDisplay = document.getElementById("score-display");
var gameOverDisplay = document.getElementById("game-over");
var snake = [];
var direction = "right";
var speed = 200;
var food = { x: 0, y: 0 };
var score = 0;
var gameInterval;

// Create game area grid
function createGrid() {
    // Clear previous grid
    gameArea.innerHTML = "";

    // Calculate number of rows and columns based on game area size
    var numRows = gameArea.offsetHeight / 20;
    var numCols = gameArea.offsetWidth / 20;

    // Create grid cells
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < numCols; j++) {
            var cell = document.createElement("div");
            cell.className = "cell";
            cell.id = "cell-" + i + "-" + j;
            gameArea.appendChild(cell);
        }
    }
}

// Create snake
function createSnake() {
    // Clear previous snake
    snake.forEach(function (segment) {
        var segmentElement = document.getElementById(segment.id);
        if (segmentElement) {
            segmentElement.classList.remove("snake");
        }
    });

    // Clear snake array
    snake = [];

    // Calculate initial snake position
    var startX = Math.floor(gameArea.offsetWidth / 40);
    var startY = Math.floor(gameArea.offsetHeight / 40);

    // Create snake segments
    for (var i = 0; i < 3; i++) {
        var segment = { x: startX - i, y: startY, id: "segment-" + i };
        snake.push(segment);
        var segmentElement = document.getElementById(segment.id);
        if (segmentElement) {
            segmentElement.classList.add("snake");
        }
    }
}

// Move snake
function moveSnake() {
    // Get head segment
    var head = snake[0];

    // Calculate new head position based on current direction
    var newHead;
    switch (direction) {
        case "up":
            newHead = { x: head.x, y: head.y - 1 };
            break;
        case "down":
            newHead = { x: head.x, y: head.y + 1 };
            break;
        case "left":
            newHead = { x: head.x - 1, y: head.y };
            break;
        case "right":
            newHead = { x: head.x + 1, y: head.y };
            break;
    }

    // Check collision with self or game boundaries
    if (checkCollision(newHead)) {
        gameOver();
        return;
    }

    // Check collision with food
    if (checkFoodCollision(newHead)) {
        // Increase score
        score++;
        updateScore();

        // Generate new food
        generateFood();
    } else {
        // Remove tail segment
        var tail = snake.pop();
        var tailElement = document.getElementById(tail.id);
        if (tailElement) {
            tailElement.classList.remove("snake");
        }
    }

    // Add new head segment
    snake.unshift(newHead);
    var newHeadElement = document.getElementById("segment-0");
    if (newHeadElement) {
        newHeadElement.classList.add("snake");
    }
}

// Change snake direction
function changeDirection(event) {
    // Get key code from event
    var keyCode = event.keyCode;

    // Change direction based on key code
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

// Generate food
function generateFood() {
    // Calculate number of rows and columns based on game area size
    var numRows = gameArea.offsetHeight / 20;
    var numCols = gameArea.offsetWidth / 20;

    // Generate random food position
    var foodX = Math.floor(Math.random() * numCols);
    var foodY = Math.floor(Math.random() * numRows);

    // Check if food position is occupied by snake
    var occupied = snake.some(function (segment) {
        return segment.x === foodX && segment.y === foodY;
    });

    // If occupied, generate new food position
    if (occupied) {
        generateFood();
        return;
    }

    // Set food position
    food.x = foodX;
    food.y = foodY;

    // Update food element
    var foodElement = document.getElementById("food");
    if (foodElement) {
        foodElement.style.left = foodX * 20 + "px";
        foodElement.style.top = foodY * 20 + "px";
    }
}

// Check collision with food
function checkFoodCollision(newHead) {
    return newHead.x === food.x && newHead.y === food.y;
}

// Check collision with self or game boundaries
function checkCollision(newHead) {
    // Check collision with self
    var selfCollision = snake.some(function (segment, index) {
        return index !== 0 && segment.x === newHead.x && segment.y === newHead.y;
    });

    // Check collision with game boundaries
    var boundaryCollision =
        newHead.x < 0 ||
        newHead.x >= gameArea.offsetWidth / 20 ||
        newHead.y < 0 ||
        newHead.y >= gameArea.offsetHeight / 20;

    return selfCollision || boundaryCollision;
}

// Update score
function updateScore() {
    scoreDisplay.textContent = "Score: " + score;
}

// Game over
function gameOver() {
    // Stop game interval
    clearInterval(gameInterval);

    // Show game over message
    gameOverDisplay.style.display = "block";
}

// Restart game
function restartGame() {
    // Clear game over message
    gameOverDisplay.style.display = "none";

    // Reset score
    score = 0;
    updateScore();

    // Create grid and snake
    createGrid();
    createSnake();

    // Generate initial food
    generateFood();

    // Start game interval
    gameInterval = setInterval(function () {
        moveSnake();
    }, speed);
}

// Start game
function startGame() {
    // Add event listener for arrow key presses
    document.addEventListener("keydown", changeDirection);

    // Restart game
    restartGame();
}

// Initialize game
function initializeGame() {
    // Create grid and snake
    createGrid();
    createSnake();

    // Start game
    startGame();
}

// Initialize game
initializeGame();
