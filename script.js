// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Game variables
    var gameArea = document.getElementById("game-area");
    var scoreArea = document.getElementById("score-area");
    var upButton = document.getElementById("up-button");
    var downButton = document.getElementById("down-button");
    var leftButton = document.getElementById("left-button");
    var rightButton = document.getElementById("right-button");
    var snake = [{x: 0, y: 0}];
    var food = {x: 0, y: 0};
    var direction = "right";
    var score = 0;

    // Initialize game
    initializeGame();

    // Event listeners for direction buttons
    upButton.addEventListener("click", function() {
        changeDirection("up");
    });

    downButton.addEventListener("click", function() {
        changeDirection("down");
    });

    leftButton.addEventListener("click", function() {
        changeDirection("left");
    });

    rightButton.addEventListener("click", function() {
        changeDirection("right");
    });

    // Function to initialize the game
    function initializeGame() {
        createSnake();
        createFood();
        updateScore();
        startGame();
    }

    // Function to create the snake
    function createSnake() {
        var snakeElement = document.createElement("div");
        snakeElement.classList.add("snake");
        gameArea.appendChild(snakeElement);
        positionElement(snakeElement, snake[0]);
    }

    // Function to create the food
    function createFood() {
        var foodElement = document.createElement("div");
        foodElement.classList.add("food");
        gameArea.appendChild(foodElement);
        positionElement(foodElement, food);
    }

    // Function to position an element on the game area
    function positionElement(element, coordinates) {
        element.style.left = coordinates.x + "px";
        element.style.top = coordinates.y + "px";
    }

    // Function to update the score
    function updateScore() {
        scoreArea.innerHTML = "Score: " + score;
    }

    // Function to start the game
    function startGame() {
        setInterval(function() {
            moveSnake();
            checkCollisions();
        }, 200);
    }

    // Function to change the direction of the snake
    function changeDirection(newDirection) {
        direction = newDirection;
    }

    // Function to move the snake
    function moveSnake() {
        var head = Object.assign({}, snake[0]);
        switch (direction) {
            case "up":
                head.y -= 20;
                break;
            case "down":
                head.y += 20;
                break;
            case "left":
                head.x -= 20;
                break;
            case "right":
                head.x += 20;
                break;
        }
        snake.unshift(head);
        var snakeElement = document.getElementsByClassName("snake")[0];
        positionElement(snakeElement, head);
        if (!checkFoodCollision()) {
            snake.pop();
        }
    }

    // Function to check for collisions
    function checkCollisions() {
        var head = snake[0];
        if (head.x < 0 || head.x >= gameArea.offsetWidth || head.y < 0 || head.y >= gameArea.offsetHeight) {
            endGame();
        }
        for (var i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                endGame();
            }
        }
    }

    // Function to check for food collision
    function checkFoodCollision() {
        var head = snake[0];
        if (head.x === food.x && head.y === food.y) {
            consumeFood();
            return true;
        }
        return false;
    }

    // Function to handle food consumption
    function consumeFood() {
        score++;
        updateScore();
        createFood();
    }

    // Function to end the game
    function endGame() {
        clearInterval(startGame);
        alert("Game Over! Final Score: " + score);
        var restart = confirm("Do you want to restart the game?");
        if (restart) {
            gameArea.innerHTML = "";
            snake = [{x: 0, y: 0}];
            direction = "right";
            score = 0;
            initializeGame();
        }
    }
});
