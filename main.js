// Import snake.js and food.js
import Snake from './snake.js';
import Food from './food.js';

// Initialize game variables
let scene, camera, renderer;
let snake, food;
let gameover = false;

// Initialize game scene, camera, and renderer
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

// Create snake and food objects
function createObjects() {
  snake = new Snake(scene);
  food = new Food(scene);
}

// Handle keyboard events to control snake's movement
function handleKeyboardEvents() {
  document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    if (keyCode === 37 && snake.direction !== 'right') {
      snake.direction = 'left';
    } else if (keyCode === 38 && snake.direction !== 'down') {
      snake.direction = 'up';
    } else if (keyCode === 39 && snake.direction !== 'left') {
      snake.direction = 'right';
    } else if (keyCode === 40 && snake.direction !== 'up') {
      snake.direction = 'down';
    }
  });
}

// Update snake and food positions
function updatePositions() {
  if (!gameover) {
    snake.update();
    food.update();
    checkCollision();
  }
}

// Check if snake has collided with itself or the wall
function checkCollision() {
  if (snake.selfCollision() || snake.wallCollision()) {
    gameover = true;
    showGameOver();
  }
}

// Show game over message
function showGameOver() {
  const gameOverMessage = document.createElement('div');
  gameOverMessage.innerHTML = 'Game Over';
  gameOverMessage.style.position = 'absolute';
  gameOverMessage.style.top = '50%';
  gameOverMessage.style.left = '50%';
  gameOverMessage.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(gameOverMessage);
}

// Game loop
function animate() {
  requestAnimationFrame(animate);
  updatePositions();
  renderer.render(scene, camera);
}

// Initialize the game
init();
createObjects();
handleKeyboardEvents();
animate();
