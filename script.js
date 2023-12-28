// script.js
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const gridSize = 20;
    const gridWidth = canvas.width / gridSize;
    const gridHeight = canvas.height / gridSize;

    let snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];
    let food = { x: 15, y: 10 };
    let direction = "right";

    /**
     * Draws the snake on the canvas
     */
    function drawSnake() {
        ctx.fillStyle = "green";
        snake.forEach(function(segment) {
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        });
    }

    /**
     * Draws the food on the canvas
     */
    function drawFood() {
        ctx.fillStyle = "red";
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }

    /**
     * Clears the canvas
     */
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    /**
     * Updates the game state and renders the canvas
     */
    function update() {
        clearCanvas();
        drawSnake();
        drawFood();
        moveSnake();
        checkCollision();
    }

    /**
     * Moves the snake in the current direction
     */
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
        snake.pop();
    }

    /**
     * Checks for collision with walls, snake body, and food
     */
    function checkCollision() {
        const head = snake[0];

        if (head.x < 0 || head.x >= gridWidth || head.y < 0 || head.y >= gridHeight) {
            gameOver();
        }

        for (let i = 1; i < snake.length; i++) {
            if (snake[i].x === head.x && snake[i].y === head.y) {
                gameOver();
            }
        }

        if (head.x === food.x && head.y === food.y) {
            eatFood();
        }
    }

    /**
     * Increases the length of the snake and generates new food
     */
    function eatFood() {
        const tail = { x: snake[snake.length - 1].x, y: snake[snake.length - 1].y };
        snake.push(tail);
        generateFood();
    }

    /**
     * Generates new food at a random position on the grid
     */
    function generateFood() {
        food.x = Math.floor(Math.random() * gridWidth);
        food.y = Math.floor(Math.random() * gridHeight);
    }

    /**
     * Ends the game and displays a game over message
     */
    function gameOver() {
        clearInterval(gameLoop);
        alert("Game Over");
    }

    /**
     * Handles key press events to change the direction of the snake
     * @param {Event} event - The key press event
     */
    function handleKeyPress(event) {
        if (event.key === "ArrowRight" && direction !== "left") {
            direction = "right";
        } else if (event.key === "ArrowLeft" && direction !== "right") {
            direction = "left";
        } else if (event.key === "ArrowUp" && direction !== "down") {
            direction = "up";
        } else if (event.key === "ArrowDown" && direction !== "up") {
            direction = "down";
        }
    }

    document.addEventListener("keydown", handleKeyPress);

    const gameLoop = setInterval(update, 100);
});