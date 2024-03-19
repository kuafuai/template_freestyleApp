// Game constants
const GRID_WIDTH = 30;
const GRID_HEIGHT = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE_LENGTH = 1;
const INITIAL_SNAKE_SPEED = 200; // in milliseconds
const FOOD_SCORE = 10;
const MAX_LIVES = 3;

// Game variables
let gameArea;
let snake;
let food;
let score;
let lives;
let timer;
let gameInterval;

// Initialize the game
function initializeGame() {
  gameArea = document.getElementById('game-area');
  score = 0;
  lives = MAX_LIVES;
  timer = 0;
  createGrid();
  createSnake();
  generateFood();
  updateScoreboard();
  addEventListeners();
}

// Create the game grid
function createGrid() {
  gameArea.innerHTML = '';
  gameArea.style.width = `${GRID_WIDTH * CELL_SIZE}px`;
  gameArea.style.height = `${GRID_HEIGHT * CELL_SIZE}px`;
  for (let row = 0; row < GRID_HEIGHT; row++) {
    for (let col = 0; col < GRID_WIDTH; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.style.width = `${CELL_SIZE}px`;
      cell.style.height = `${CELL_SIZE}px`;
      gameArea.appendChild(cell);
    }
  }
}

// Create the snake
function createSnake() {
  const startRow = Math.floor(GRID_HEIGHT / 2);
  const startCol = Math.floor(GRID_WIDTH / 2);
  snake = [
    { row: startRow, col: startCol }
  ];
  drawSnake();
}

// Draw the snake on the game grid
function drawSnake() {
  const cells = gameArea.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove('snake');
  }
  for (let i = 0; i < snake.length; i++) {
    const { row, col } = snake[i];
    const cellIndex = row * GRID_WIDTH + col;
    cells[cellIndex].classList.add('snake');
  }
}

// Generate food at a random position
function generateFood() {
  const cells = gameArea.getElementsByClassName('cell');
  const emptyCells = [];
  for (let i = 0; i < cells.length; i++) {
    if (!cells[i].classList.contains('snake')) {
      emptyCells.push(i);
    }
  }
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const randomCell = emptyCells[randomIndex];
  const row = Math.floor(randomCell / GRID_WIDTH);
  const col = randomCell % GRID_WIDTH;
  food = { row, col };
  const foodCell = cells[randomCell];
  foodCell.classList.add('food');
}

// Handle keyboard input
function handleKeyPress(event) {
  const key = event.key;
  if (key === 'ArrowUp' && snake[0].row > 0) {
    moveSnake(-1, 0);
  } else if (key === 'ArrowDown' && snake[0].row < GRID_HEIGHT - 1) {
    moveSnake(1, 0);
  } else if (key === 'ArrowLeft' && snake[0].col > 0) {
    moveSnake(0, -1);
  } else if (key === 'ArrowRight' && snake[0].col < GRID_WIDTH - 1) {
    moveSnake(0, 1);
  }
}

// Move the snake
function moveSnake(rowOffset, colOffset) {
  const head = { row: snake[0].row + rowOffset, col: snake[0].col + colOffset };
  snake.unshift(head);
  if (head.row === food.row && head.col === food.col) {
    score += FOOD_SCORE;
    generateFood();
  } else {
    snake.pop();
  }
  if (checkCollision()) {
    handleCollision();
  }
  drawSnake();
}

// Check for collisions with walls or snake's body
function checkCollision() {
  const head = snake[0];
  if (head.row < 0 || head.row >= GRID_HEIGHT || head.col < 0 || head.col >= GRID_WIDTH) {
    return true; // Collision with walls
  }
  for (let i = 1; i < snake.length; i++) {
    if (head.row === snake[i].row && head.col === snake[i].col) {
      return true; // Collision with snake's body
    }
  }
  return false;
}

// Handle collisions
function handleCollision() {
  lives--;
  if (lives === 0) {
    endGame();
  } else {
    resetSnake();
  }
  updateScoreboard();
}

// Reset the snake to its initial position and length
function resetSnake() {
  const startRow = Math.floor(GRID_HEIGHT / 2);
  const startCol = Math.floor(GRID_WIDTH / 2);
  snake = [
    { row: startRow, col: startCol }
  ];
}

// Update the scoreboard
function updateScoreboard() {
  const scoreElement = document.getElementById('score');
  const livesElement = document.getElementById('lives');
  const timerElement = document.getElementById('timer');
  scoreElement.textContent = `Score: ${score}`;
  livesElement.textContent = `Lives: ${lives}`;
  timerElement.textContent = `Time: ${timer}s`;
}

// Start the game
function startGame() {
  gameInterval = setInterval(updateTimer, 1000);
  addEventListeners();
}

// Update the game timer
function updateTimer() {
  timer++;
  updateScoreboard();
}

// End the game
function endGame() {
  clearInterval(gameInterval);
  removeEventListeners();
  alert(`Game Over! Your score is ${score}`);
}

// Restart the game
function restartGame() {
  clearInterval(gameInterval);
  removeEventListeners();
  initializeGame();
  startGame();
}

// Add event listeners
function addEventListeners() {
  document.addEventListener('keydown', handleKeyPress);
  document.getElementById('start-button').addEventListener('click', startGame);
}

// Remove event listeners
function removeEventListeners() {
  document.removeEventListener('keydown', handleKeyPress);
  document.getElementById('start-button').removeEventListener('click', startGame);
}

// Initialize the game
initializeGame();

// Game variables
let score = 0;
let lives = 3;
let highScore = 0;
let gamePaused = false;
let soundEnabled = true;

// Game elements
const gameMap = document.getElementById('game-map');
const scoreValue = document.getElementById('score-value');
const livesValue = document.getElementById('lives-value');
const highScoreValue = document.getElementById('high-score-value');
const pauseButton = document.getElementById('pause-button');
const soundButton = document.getElementById('sound-button');

// Initialize game
function initializeGame() {
    // Set initial values
    score = 0;
    lives = 3;
    highScore = getHighScoreFromLocalStorage();

    // Update game elements
    updateScore();
    updateLives();
    updateHighScore();

    // Add event listeners
    pauseButton.addEventListener('click', togglePause);
    soundButton.addEventListener('click', toggleSound);

    // Start game loop
    gameLoop();
}

// Game loop
function gameLoop() {
    if (!gamePaused) {
        // Update game logic
        // ...

        // Update game elements
        // ...
    }

    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Update score
function updateScore() {
    scoreValue.textContent = score;
}

// Update lives
function updateLives() {
    livesValue.textContent = lives;
}

// Update high score
function updateHighScore() {
    highScoreValue.textContent = highScore;
}

// Toggle pause
function togglePause() {
    gamePaused = !gamePaused;
}

// Toggle sound
function toggleSound() {
    soundEnabled = !soundEnabled;
}

// Get high score from local storage
function getHighScoreFromLocalStorage() {
    const storedHighScore = localStorage.getItem('highScore');
    return storedHighScore ? parseInt(storedHighScore) : 0;
}

// Save high score to local storage
function saveHighScoreToLocalStorage() {
    localStorage.setItem('highScore', highScore);
}

// Game over
function gameOver() {
    // Update high score if necessary
    if (score > highScore) {
        highScore = score;
        saveHighScoreToLocalStorage();
        updateHighScore();
    }

    // Reset game
    initializeGame();
}

// Initialize game
initializeGame();