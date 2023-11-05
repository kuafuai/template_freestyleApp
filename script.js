// Define game variables
let snake = [{x: 0, y: 0}];
let food = {x: 100, y: 100};
let direction = "right";
let score = 0;

// Function to handle keyboard input
function handleKeyPress(event) {
    if (event.key === "ArrowUp" && direction !== "down") {
        direction = "up";
    } else if (event.key === "ArrowDown" && direction !== "up") {
        direction = "down";
    } else if (event.key === "ArrowLeft" && direction !== "right") {
        direction = "left";
    } else if (event.key === "ArrowRight" && direction !== "left") {
        direction = "right";
    }
}

// Function to move the snake
function moveSnake() {
    let head = {x: snake[0].x, y: snake[0].y};

    if (direction === "up") {
        head.y -= 20;
    } else if (direction === "down") {
        head.y += 20;
    } else if (direction === "left") {
        head.x -= 20;
    } else if (direction === "right") {
        head.x += 20;
    }

    snake.unshift(head);
    snake.pop();
}

// Function to check if the snake has collided with the boundaries or itself
function checkCollision() {
    let head = snake[0];

    if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400) {
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

// Function to check if the snake has eaten the food
function checkFood() {
    let head = snake[0];

    if (head.x === food.x && head.y === food.y) {
        // Generate new food position
        food.x = Math.floor(Math.random() * 20) * 20;
        food.y = Math.floor(Math.random() * 20) * 20;

        // Increase snake length
        let tail = {x: snake[snake.length - 1].x, y: snake[snake.length - 1].y};
        snake.push(tail);

        // Increase score
        score++;

        return true;
    }

    return false;
}

// Function to update the game state
function updateGame() {
    moveSnake();

    if (checkCollision()) {
        // Game over
        clearInterval(gameInterval);
        alert("Game over!");
    }

    if (checkFood()) {
        // Food eaten
        // Update game interface
        updateGameInterface();
    }

    // Update game interface
    updateGameInterface();
}

// Function to update the game interface
function updateGameInterface() {
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, 20, 20);
    }

    // Draw food
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, 20, 20);

    // Display score
    document.getElementById("score").innerHTML = "Score: " + score;
}

// Start the game
document.addEventListener("keydown", handleKeyPress);
let gameInterval = setInterval(updateGame, 200);