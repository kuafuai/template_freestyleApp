// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Game variables
    let snake = [{x: 10, y: 10}];
    let food = {x: 5, y: 5};
    let direction = "right";
    let score = 0;
    let highScore = 0;
    let interval;
    let level = "easy";

    // Game elements
    const gameContainer = document.getElementById("game-container");
    const snakeElement = document.getElementById("snake");
    const foodElement = document.getElementById("food");
    const currentScoreElement = document.getElementById("current-score");
    const highScoreElement = document.getElementById("high-score");
    const levelSelect = document.getElementById("level-select");
    const leaderboardButton = document.getElementById("leaderboard-button");

    // Game initialization
    initializeGame();

    // Event listeners
    levelSelect.addEventListener("change", function() {
        level = levelSelect.value;
        clearInterval(interval);
        initializeGame();
    });

    leaderboardButton.addEventListener("click", function() {
        showLeaderboard();
    });

    document.addEventListener("keydown", function(event) {
        changeDirection(event.keyCode);
    });

    // Game functions
    function initializeGame() {
        snake = [{x: 10, y: 10}];
        direction = "right";
        score = 0;
        currentScoreElement.textContent = "Current Score: " + score;
        highScoreElement.textContent = "High Score: " + highScore;
        generateFood();
        drawSnake();
        startGame();
    }

    function generateFood() {
        // Generate random coordinates for food within game container
        food.x = Math.floor(Math.random() * 20);
        food.y = Math.floor(Math.random() * 20);
    }

    function drawSnake() {
        // Clear previous snake
        snakeElement.innerHTML = "";

        // Draw snake
        snake.forEach(function(segment) {
            const segmentElement = document.createElement("div");
            segmentElement.style.left = segment.x * 20 + "px";
            segmentElement.style.top = segment.y * 20 + "px";
            snakeElement.appendChild(segmentElement);
        });
    }

    function startGame() {
        interval = setInterval(moveSnake, getIntervalTime());
    }

    function moveSnake() {
        const head = {x: snake[0].x, y: snake[0].y};

        // Move snake based on direction
        if (direction === "right") {
            head.x++;
        } else if (direction === "left") {
            head.x--;
        } else if (direction === "up") {
            head.y--;
        } else if (direction === "down") {
            head.y++;
        }

        // Check if snake has collided with itself or game boundaries
        if (isCollision(head) || isBoundaryCollision(head)) {
            endGame();
            return;
        }

        // Check if snake has eaten food
        if (head.x === food.x && head.y === food.y) {
            score++;
            currentScoreElement.textContent = "Current Score: " + score;
            if (score > highScore) {
                highScore = score;
                highScoreElement.textContent = "High Score: " + highScore;
            }
            generateFood();
        } else {
            // Remove tail segment if snake hasn't eaten food
            snake.pop();
        }

        // Add new head segment
        snake.unshift(head);

        // Redraw snake
        drawSnake();
    }

    function isCollision(head) {
        // Check if snake has collided with itself
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }
        return false;
    }

    function isBoundaryCollision(head) {
        // Check if snake has collided with game boundaries
        if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
            return true;
        }
        return false;
    }

    function endGame() {
        clearInterval(interval);
        alert("Game Over");
        initializeGame();
    }

    function changeDirection(keyCode) {
        // Change snake direction based on arrow key input
        if (keyCode === 37 && direction !== "right") {
            direction = "left";
        } else if (keyCode === 38 && direction !== "down") {
            direction = "up";
        } else if (keyCode === 39 && direction !== "left") {
            direction = "right";
        } else if (keyCode === 40 && direction !== "up") {
            direction = "down";
        }
    }

    function getIntervalTime() {
        // Get interval time based on selected level
        if (level === "easy") {
            return 200;
        } else if (level === "medium") {
            return 150;
        } else if (level === "hard") {
            return 100;
        }
    }

    function showLeaderboard() {
        // Show leaderboard
        alert("Leaderboard");
    }
});
