// Snake class to represent the snake's properties and behaviors
class Snake {
    constructor() {
        // Initialize snake properties
        this.direction = "right";
        this.body = [{ x: 10, y: 10 }];
    }

    move() {
        // Move the snake based on the current direction
        const headPosition = { ...this.body[0] };

        switch (this.direction) {
            case "up":
                headPosition.y--;
                break;
            case "down":
                headPosition.y++;
                break;
            case "left":
                headPosition.x--;
                break;
            case "right":
                headPosition.x++;
                break;
        }

        this.body.unshift(headPosition);
        this.body.pop();
    }

    eatFood() {
        // Increase the snake's length and update the score
        const tailPosition = { ...this.body[this.body.length - 1] };
        this.body.push(tailPosition);
        updateScore(this.body.length - 1);
    }

    checkCollision() {
        // Check if the snake has collided with the wall or itself
        const headPosition = this.body[0];

        if (
            headPosition.x < 0 ||
            headPosition.x >= canvas.width / gridSize ||
            headPosition.y < 0 ||
            headPosition.y >= canvas.height / gridSize ||
            this.body.slice(1).some(segment => segment.x === headPosition.x && segment.y === headPosition.y)
        ) {
            return true;
        }

        return false;
    }
}

// Food class to represent the food's properties and behaviors
class Food {
    constructor() {
        // Initialize food properties
        this.position = { x: 0, y: 0 };
    }

    generatePosition() {
        // Generate a random position for the food
        this.position = {
            x: Math.floor(Math.random() * (canvas.width / gridSize)),
            y: Math.floor(Math.random() * (canvas.height / gridSize))
        };
    }
}

// Game class to control the overall game logic
class Game {
    constructor() {
        // Initialize game properties
        this.snake = new Snake();
        this.food = new Food();
        this.score = 0;
        this.isGameOver = false;
    }

    start() {
        // Start the game loop and handle user input
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.gridSize = 20;
        this.frameRate = 8;
        this.frameInterval = 1000 / this.frameRate;
        this.lastFrameTime = 0;

        this.canvas.width = 400;
        this.canvas.height = 400;

        this.snake.move();
        this.food.generatePosition();

        document.addEventListener("keydown", this.handleKeyPress.bind(this));

        this.gameLoop();
    }

    update() {
        // Update the game state (snake movement, food generation, collision detection)
        const currentTime = performance.now();
        const elapsedTime = currentTime - this.lastFrameTime;

        if (elapsedTime > this.frameInterval) {
            this.lastFrameTime = currentTime;

            if (!this.isGameOver) {
                this.snake.move();

                if (this.snake.checkCollision()) {
                    this.isGameOver = true;
                    this.end();
                    return;
                }

                const headPosition = this.snake.body[0];

                if (headPosition.x === this.food.position.x && headPosition.y === this.food.position.y) {
                    this.snake.eatFood();
                    this.food.generatePosition();
                }
            }
        }
    }

    render() {
        // Render the game objects (snake, food) on the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render snake
        this.ctx.fillStyle = "green";
        this.snake.body.forEach(segment => {
            this.ctx.fillRect(segment.x * this.gridSize, segment.y * this.gridSize, this.gridSize, this.gridSize);
        });

        // Render food
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.food.position.x * this.gridSize, this.food.position.y * this.gridSize, this.gridSize, this.gridSize);
    }

    end() {
        // End the game and display the final score
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "black";
        this.ctx.font = "30px Arial";
        this.ctx.fillText("Game Over", this.canvas.width / 2 - 80, this.canvas.height / 2);
        this.ctx.fillText("Score: " + this.score, this.canvas.width / 2 - 60, this.canvas.height / 2 + 40);
    }

    handleKeyPress(event) {
        // Handle user key press to change snake direction
        const key = event.key.toLowerCase();

        if (key === "w" && this.snake.direction !== "down") {
            this.snake.direction = "up";
        } else if (key === "s" && this.snake.direction !== "up") {
            this.snake.direction = "down";
        } else if (key === "a" && this.snake.direction !== "right") {
            this.snake.direction = "left";
        } else if (key === "d" && this.snake.direction !== "left") {
            this.snake.direction = "right";
        }
    }

    gameLoop() {
        // Main game loop
        this.update();
        this.render();

        if (!this.isGameOver) {
            requestAnimationFrame(this.gameLoop.bind(this));
        }
    }
}

// Create a new Game object and start the game when the start button is clicked
document.getElementById("startButton").addEventListener("click", function() {
    const game = new Game();
    game.start();
});

// Update the score display
function updateScore(score) {
    document.getElementById("scoreDisplay").innerText = "Score: " + score;
}
