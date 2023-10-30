// Define constants
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const gridWidth = canvas.width / gridSize;
const gridHeight = canvas.height / gridSize;

// Define variables
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 10 };
let direction = 'right';
let score = 0;

// Handle keyboard input
document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (direction !== 'down') {
                direction = 'up';
            }
            break;
        case 'ArrowDown':
            if (direction !== 'up') {
                direction = 'down';
            }
            break;
        case 'ArrowLeft':
            if (direction !== 'right') {
                direction = 'left';
            }
            break;
        case 'ArrowRight':
            if (direction !== 'left') {
                direction = 'right';
            }
            break;
        default:
            break;
    }
}

// Update game state
function update() {
    // Move snake
    const head = { x: snake[0].x, y: snake[0].y };
    if (direction === 'up') {
        head.y -= 1;
    } else if (direction === 'down') {
        head.y += 1;
    } else if (direction === 'left') {
        head.x -= 1;
    } else if (direction === 'right') {
        head.x += 1;
    }
    snake.unshift(head);

    // Check if snake eats food
    if (head.x === food.x && head.y === food.y) {
        score += 1;
        generateFood();
    } else {
        snake.pop();
    }

    // Check if snake hits wall or itself
    if (head.x < 0 || head.x >= gridWidth || head.y < 0 || head.y >= gridHeight || checkCollision()) {
        gameOver();
    }
}

// Generate random food position
function generateFood() {
    food = {
        x: Math.floor(Math.random() * gridWidth),
        y: Math.floor(Math.random() * gridHeight)
    };
}

// Check if snake hits itself
function checkCollision() {
    const head = snake[0];
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

// Render game on canvas
function render() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    // Draw score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
}

// Game over
function gameOver() {
    alert(`Game Over! Your score is ${score}`);
    snake = [{ x: 10, y: 10 }];
    direction = 'right';
    score = 0;
    generateFood();
}

// Game loop
function gameLoop() {
    update();
    render();
    setTimeout(gameLoop, 100);
}

// Start game
generateFood();
gameLoop();
