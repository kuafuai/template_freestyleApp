// Game variables
var gameArea = document.getElementById("game-area");
var startButton = document.getElementById("start-button");
var restartButton = document.getElementById("restart-button");
var quitButton = document.getElementById("quit-button");
var snake;
var food;
var direction;
var gameInterval;

// Game initialization
function initGame() {
    // Create snake
    snake = createSnake();

    // Create food
    food = createFood();

    // Set initial direction
    direction = "right";

    // Render game area
    renderGameArea();

    // Start game loop
    gameInterval = setInterval(moveSnake, 200);
}

// Create snake
function createSnake() {
    // CODE: Create a snake object with initial position and length
    return {
        body: [
            { x: 2, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 0 }
        ],
        length: 3
    };
}

// Create food
function createFood() {
    // CODE: Create a food object with random position
    return {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20)
    };
}

// Render game area
function renderGameArea() {
    // Clear game area
    gameArea.innerHTML = "";

    // Render snake
    snake.body.forEach(function(segment) {
        var snakeSegment = document.createElement("div");
        snakeSegment.style.gridColumn = segment.x + 1;
        snakeSegment.style.gridRow = segment.y + 1;
        snakeSegment.classList.add("snake");
        gameArea.appendChild(snakeSegment);
    });

    // Render food
    var foodElement = document.createElement("div");
    foodElement.style.gridColumn = food.x + 1;
    foodElement.style.gridRow = food.y + 1;
    foodElement.classList.add("food");
    gameArea.appendChild(foodElement);
}

// Move snake
function moveSnake() {
    // Get the head of the snake
    var head = Object.assign({}, snake.body[0]);

    // Update the head position based on the current direction
    if (direction === "up") {
        head.y -= 1;
    } else if (direction === "down") {
        head.y += 1;
    } else if (direction === "left") {
        head.x -= 1;
    } else if (direction === "right") {
        head.x += 1;
    }

    // Check if the snake has eaten the food
    if (head.x === food.x && head.y === food.y) {
        // Increase the snake length
        snake.length++;

        // Generate new food
        food = createFood();
    } else {
        // Remove the tail segment if the snake hasn't eaten the food
        snake.body.pop();
    }

    // Check if the snake has collided with the wall or itself
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || isSnakeCollision(head)) {
        gameOver();
        return;
    }

    // Add the new head segment to the snake
    snake.body.unshift(head);

    // Render the game area
    renderGameArea();
}

// Check if the snake has collided with itself
function isSnakeCollision(head) {
    for (var i = 1; i < snake.body.length; i++) {
        if (head.x === snake.body[i].x && head.y === snake.body[i].y) {
            return true;
        }
    }
    return false;
}

// Handle key press events
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

// Game over
function gameOver() {
    // Stop the game loop
    clearInterval(gameInterval);

    // Display game over message
    alert("Game Over");

    // Show restart and quit buttons
    restartButton.style.display = "inline-block";
    quitButton.style.display = "inline-block";
}

// Start button click event
startButton.addEventListener("click", function() {
    // Hide start button
    startButton.style.display = "none";

    // Initialize the game
    initGame();
});

// Restart button click event
restartButton.addEventListener("click", function() {
    // Initialize the game
    initGame();
});

// Quit button click event
quitButton.addEventListener("click", function() {
    // Quit the game
    window.close();
});
