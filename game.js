/* This file contains the game logic for the snake game */

// Constants
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const gridWidth = canvas.width / gridSize;
const gridHeight = canvas.height / gridSize;

// Variables
let snake = [{ x: 0, y: 0 }];
let food = { x: 0, y: 0 };
let score = 0;
let direction = 'right';
let gameLoopInterval;

// Functions
function drawSnake() {
  // Code to draw the snake on the canvas
  ctx.fillStyle = '#000';
  snake.forEach(segment => {
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  });
}

function drawFood() {
  // Code to draw the food on the canvas
  ctx.fillStyle = '#f00';
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function updateSnake() {
  // Code to update the snake's position based on the direction
  const head = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case 'up':
      head.y -= 1;
      break;
    case 'down':
      head.y += 1;
      break;
    case 'left':
      head.x -= 1;
      break;
    case 'right':
      head.x += 1;
      break;
  }
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score += 1;
    updateScore();
    generateFood();
  } else {
    snake.pop();
  }
}

function checkCollision() {
  // Code to check if the snake has collided with the wall or itself
  const head = snake[0];
  if (
    head.x < 0 ||
    head.x >= gridWidth ||
    head.y < 0 ||
    head.y >= gridHeight ||
    snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    endGame();
  }
}

function checkFoodCollision() {
  // Code to check if the snake has collided with the food
  const head = snake[0];
  if (head.x === food.x && head.y === food.y) {
    score += 1;
    updateScore();
    generateFood();
  }
}

function handleInput(event) {
  // Code to handle user input from the keyboard
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
  }
}

function updateScore() {
  // Code to update the score when the snake eats the food
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Score: ${score}`;
}

function generateFood() {
  // Code to generate a new food position
  food.x = Math.floor(Math.random() * gridWidth);
  food.y = Math.floor(Math.random() * gridHeight);
}

function endGame() {
  // Code to end the game when the snake collides with the wall or itself
  clearInterval(gameLoopInterval);
  alert(`Game Over! Your score is ${score}`);
  resetGame();
}

function resetGame() {
  // Code to reset the game state
  snake = [{ x: 0, y: 0 }];
  score = 0;
  direction = 'right';
  updateScore();
  generateFood();
  gameLoopInterval = setInterval(gameLoop, 100);
}

function gameLoop() {
  // Code for the main game loop
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawFood();
  updateSnake();
  checkCollision();
}

// Event listeners
document.addEventListener('keydown', handleInput);

// Game initialization
generateFood();
gameLoopInterval = setInterval(gameLoop, 100);