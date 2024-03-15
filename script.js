// script.js

// Define variables
let snake = [{x: 0, y: 0}]; // Initial position of the snake
let food = {x: 0, y: 0}; // Initial position of the food
let direction = 'right'; // Initial direction of the snake
let score = 0; // Initial score

// Function to handle keyboard input
function handleInput(event) {
  // Update direction based on arrow key pressed
  if (event.key === 'ArrowUp' && direction !== 'down') {
    direction = 'up';
  } else if (event.key === 'ArrowDown' && direction !== 'up') {
    direction = 'down';
  } else if (event.key === 'ArrowLeft' && direction !== 'right') {
    direction = 'left';
  } else if (event.key === 'ArrowRight' && direction !== 'left') {
    direction = 'right';
  } else {
    return; // Ignore invalid key input
  }
}

// Function to update the game state
function updateGame() {
  // Update snake position based on direction
  let head = {x: snake[0].x, y: snake[0].y};
  if (direction === 'up') {
    head.y -= 20;
  } else if (direction === 'down') {
    head.y += 20;
  } else if (direction === 'left') {
    head.x -= 20;
  } else if (direction === 'right') {
    head.x += 20;
  }
  snake.unshift(head);

  // Check if snake has collided with the wall or itself
  if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400 || checkCollision()) {
    gameOver();
    return;
  }

  // Check if snake has eaten the food
  if (head.x === food.x && head.y === food.y) {
    score++;
    generateFood();
  } else {
    snake.pop();
  }

  // Update game area
  renderGame();
}

// Function to check if snake has collided with itself
function checkCollision() {
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }
  return false;
}

// Function to generate food at a random position
function generateFood() {
  food.x = Math.floor(Math.random() * 20) * 20;
  food.y = Math.floor(Math.random() * 20) * 20;

  // Check if food is generated on the snake's body, regenerate if true
  for (let i = 0; i < snake.length; i++) {
    if (food.x === snake[i].x && food.y === snake[i].y) {
      generateFood();
      return;
    }
  }
}

// Function to render the game area
function renderGame() {
  const gameArea = document.getElementById('game-area');
  gameArea.innerHTML = '';

  // Render snake
  for (let i = 0; i < snake.length; i++) {
    const snakeElement = document.createElement('div');
    snakeElement.className = 'snake';
    snakeElement.style.left = snake[i].x + 'px';
    snakeElement.style.top = snake[i].y + 'px';
    gameArea.appendChild(snakeElement);
  }

  // Render food
  const foodElement = document.createElement('div');
  foodElement.className = 'food';
  foodElement.style.left = food.x + 'px';
  foodElement.style.top = food.y + 'px';
  gameArea.appendChild(foodElement);
}

// Function to handle game over
function gameOver() {
  alert('Game Over! Your score: ' + score);
  snake = [{x: 0, y: 0}];
  direction = 'right';
  score = 0;
  generateFood();
  renderGame();
}

// Add event listener for keyboard input
document.addEventListener('keydown', handleInput);

// Generate initial food and render game
generateFood();
renderGame();

// Start game loop
setInterval(updateGame, 200);
