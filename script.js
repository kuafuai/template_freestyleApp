// Snake class to represent the snake in the game
class Snake {
    constructor() {
        // Initialize snake properties
        this.direction = "right";
        this.body = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 }
        ];
    }

    move() {
        // Move the snake in the current direction
        const head = { ...this.body[0] };
        switch (this.direction) {
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
        this.body.unshift(head);
        this.body.pop();
    }

    changeDirection(direction) {
        // Change the direction of the snake
        if (
            (direction === "up" && this.direction !== "down") ||
            (direction === "down" && this.direction !== "up") ||
            (direction === "left" && this.direction !== "right") ||
            (direction === "right" && this.direction !== "left")
        ) {
            this.direction = direction;
        }
    }
}

// Food class to represent the food in the game
class Food {
    constructor() {
        // Initialize food properties
        this.position = { x: 5, y: 5 };
    }

    generatePosition() {
        // Generate a new random position for the food
        this.position = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20)
        };
    }
}

// Game class to manage the game state
class Game {
    constructor() {
        // Initialize game properties
        this.canvas = document.getElementById("gameCanvas");
        this.context = this.canvas.getContext("2d");
        this.snake = new Snake();
        this.food = new Food();
        this.score = 0;
        this.gameOver = false;
        this.interval = null;
    }

    start() {
        // Start the game
        this.interval = setInterval(() => {
            this.update();
            this.render();
        }, 200);
    }

    end() {
        // End the game
        clearInterval(this.interval);
        this.gameOver = true;
        alert("Game Over");
    }

    update() {
        // Update the game state
        this.snake.move();

        // Check if the snake has collided with the wall
        const head = this.snake.body[0];
        if (
            head.x < 0 ||
            head.x >= this.canvas.width / 10 ||
            head.y < 0 ||
            head.y >= this.canvas.height / 10
        ) {
            this.end();
            return;
        }

        // Check if the snake has collided with itself
        for (let i = 1; i < this.snake.body.length; i++) {
            if (head.x === this.snake.body[i].x && head.y === this.snake.body[i].y) {
                this.end();
                return;
            }
        }

        // Check if the snake has eaten the food
        if (head.x === this.food.position.x && head.y === this.food.position.y) {
            this.snake.body.push({});
            this.food.generatePosition();
            this.score++;
        }
    }

    render() {
        // Render the game on the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render the snake
        this.context.fillStyle = "green";
        for (let i = 0; i < this.snake.body.length; i++) {
            const { x, y } = this.snake.body[i];
            this.context.fillRect(x * 10, y * 10, 10, 10);
        }

        // Render the food
        this.context.fillStyle = "red";
        const { x, y } = this.food.position;
        this.context.fillRect(x * 10, y * 10, 10, 10);

        // Render the score
        this.context.fillStyle = "black";
        this.context.font = "20px Arial";
        this.context.fillText(`Score: ${this.score}`, 10, 20);
    }
}

// Event listeners to handle keyboard input
document.addEventListener("keydown", function(event) {
    const direction = getDirection(event.keyCode);
    if (direction) {
        game.snake.changeDirection(direction);
    }
});

function getDirection(keyCode) {
    switch (keyCode) {
        case 37:
            return "left";
        case 38:
            return "up";
        case 39:
            return "right";
        case 40:
            return "down";
        default:
            return null;
    }
}

// Create an instance of the Game class
const game = new Game();

// Start the game
game.start();