// Constants
const GAME_AREA_WIDTH = 20;
const GAME_AREA_HEIGHT = 20;
const SNAKE_INITIAL_LENGTH = 1;
const SNAKE_INITIAL_POSITION = { x: 10, y: 10 };
const FOOD_SCORE = 10;

// Variables
let gameArea;
let scoreboard;
let restartButton;
let snake;
let food;
let score;
let highScore;

// Event listeners
startButton.addEventListener('click', initializeGame);

// Initialization function
function initializeGame() {
  gameArea = document.getElementById('game-area');
  scoreboard = document.getElementById('scoreboard');
  restartButton = document.getElementById('restart-button');
  score = 0;
  highScore = localStorage.getItem('highScore') || 0;
  createGameArea();
  createSnake();
  createFood();
  updateScoreboard();
  gameInterval = setInterval(gameLoop, GAME_SPEED);
}

// Game loop function
function gameLoop() {
  moveSnake();
  if (isSnakeCollidingWithFood()) {
    eatFood();
  }
  if (isSnakeCollidingWithSelf() || isSnakeCollidingWithWall()) {
    endGame();
  }
  drawGame();
}

// Snake movement function
function moveSnake() {
  var snakeHead = { x: snake[0].x, y: snake[0].y };
  if (direction === 'up') {
    snakeHead.y -= SNAKE_SIZE;
  } else if (direction === 'down') {
    snakeHead.y += SNAKE_SIZE;
  } else if (direction === 'left') {
    snakeHead.x -= SNAKE_SIZE;
  } else if (direction === 'right') {
    snakeHead.x += SNAKE_SIZE;
  }
  snake.unshift(snakeHead);
  snake.pop();
}

// Food creation function
function createFood() {
  var foodX = Math.floor(Math.random() * (GAME_AREA_WIDTH / FOOD_SIZE)) * FOOD_SIZE;
  var foodY = Math.floor(Math.random() * (GAME_AREA_HEIGHT / FOOD_SIZE)) * FOOD_SIZE;
  food = { x: foodX, y: foodY };
}

// Food collision detection function
function isSnakeCollidingWithFood() {
  var snakeHead = snake[0];
  if (snakeHead.x === food.x && snakeHead.y === food.y) {
    return true;
  }
  return false;
}

// Food consumption function
function eatFood() {
  score += FOOD_SCORE;
  updateScoreboard();
  createFood();
}

// Self collision detection function
function isSnakeCollidingWithSelf() {
  var snakeHead = snake[0];
  for (var i = 1; i < snake.length; i++) {
    if (snake[i].x === snakeHead.x && snake[i].y === snakeHead.y) {
      return true;
    }
  }
  return false;
}

// Wall collision detection function
function isSnakeCollidingWithWall() {
  var snakeHead = snake[0];
  if (snakeHead.x < 0 || snakeHead.x >= GAME_AREA_WIDTH || snakeHead.y < 0 || snakeHead.y >= GAME_AREA_HEIGHT) {
    return true;
  }
  return false;
}

// Scoreboard update function
function updateScoreboard() {
  scoreboard.innerHTML = 'Score: ' + score;
}

// Game end function
function endGame() {
  clearInterval(gameInterval);
  alert('Game Over! Your score is ' + score);
}

// Keydown event handler
function handleKeyDown(event) {
  if (event.key === 'ArrowUp' && direction !== 'down') {
    direction = 'up';
  } else if (event.key === 'ArrowDown' && direction !== 'up') {
    direction = 'down';
  } else if (event.key === 'ArrowLeft' && direction !== 'right') {
    direction = 'left';
  } else if (event.key === 'ArrowRight' && direction !== 'left') {
    direction = 'right';
  }
}

// Restart game function
function restartGame() {
  clearInterval(gameInterval);
  snake = [];
  food = {};
  direction = '';
  score = 0;
  initializeGame();
}

// Start the game
initializeGame();