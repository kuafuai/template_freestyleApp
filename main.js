// main.js

// Get the canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game state
let gameRunning = true;

// Snake initial position and length
let snake = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 }
];

// Snake movement direction
let direction = 'right';

// Food position
let food = { x: 5, y: 5 };

// Game loop
function gameLoop() {
  if (!gameRunning) {
    return;
  }

  update();
  draw();

  setTimeout(gameLoop, 100);
}

// Update game state
function update() {
  // Update snake position based on the movement direction
  const head = { x: snake[0].x, y: snake[0].y };
  switch (direction) {
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
    case 'left':
      head.x--;
      break;
    case 'right':
      head.x++;
      break;
  }

  // Check if snake has eaten the food
  if (head.x === food.x && head.y === food.y) {
    // Increase snake length
    snake.push({});
    // Generate new food position
    generateFood();
  }

  // Check if snake has collided with obstacles or itself
  if (isCollision(head) || isSelfCollision(head)) {
    gameRunning = false;
    alert('Game Over');
    return;
  }

  // Update snake position
  snake.unshift(head);
  snake.pop();
}

// Render the game on the canvas
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  ctx.fillStyle = 'green';
  snake.forEach(segment => {
    ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
  });

  // Draw the food
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * 10, food.y * 10, 10, 10);
}

// Handle keyboard events
document.addEventListener('keydown', event => {
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
});

// Generate food position
function generateFood() {
  food.x = Math.floor(Math.random() * canvas.width / 10);
  food.y = Math.floor(Math.random() * canvas.height / 10);
}

// Check if snake has collided with obstacles
function isCollision(head) {
  // TODO: Implement obstacle collision detection logic
  return false;
}

// Check if snake has collided with itself
function isSelfCollision(head) {
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

// Start the game loop
gameLoop();
