// JavaScript file for the snake game

// Variables to store game state
let gameBoard;
let snakePosition;
let foodPosition;
let score;

// Function to initialize the game board
function initializeGameBoard() {
  // create the grid for the game board
  gameBoard = document.getElementById("game-board");
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      gameBoard.appendChild(cell);
    }
  }

  // place the snake and food elements on the board
  snakePosition = [{ x: 10, y: 10 }];
  foodPosition = { x: getRandomPosition(), y: getRandomPosition() };
  score = 0;
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
  // update the snake's direction based on the key pressed
  const direction = event.key.replace("Arrow", "");
  moveSnake(direction);
}

// Function to move the snake
function moveSnake(direction) {
  const head = { ...snakePosition[0] };
  switch (direction) {
    case "Up":
      head.y--;
      break;
    case "Down":
      head.y++;
      break;
    case "Left":
      head.x--;
      break;
    case "Right":
      head.x++;
      break;
  }
  snakePosition.unshift(head);
  if (!checkFoodEaten()) {
    snakePosition.pop();
  }
  checkCollisions();
  updateGameBoard();
}

// Function to check for collisions
function checkCollisions() {
  const head = snakePosition[0];
  if (
    head.x < 0 ||
    head.x >= 20 ||
    head.y < 0 ||
    head.y >= 20 ||
    snakePosition.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
  ) {
    endGame();
  }
}

// Function to check if the snake has eaten the food
function checkFoodEaten() {
  const head = snakePosition[0];
  if (head.x === foodPosition.x && head.y === foodPosition.y) {
    score++;
    foodPosition = { x: getRandomPosition(), y: getRandomPosition() };
    updateScoreDisplay();
    return true;
  }
  return false;
}

// Function to update the game board
function updateGameBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("snake", "food");
  });

  snakePosition.forEach((segment) => {
    const cellIndex = segment.y * 20 + segment.x;
    cells[cellIndex].classList.add("snake");
  });

  const foodCellIndex = foodPosition.y * 20 + foodPosition.x;
  cells[foodCellIndex].classList.add("food");
}

// Function to update the score display
function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("score");
  scoreDisplay.textContent = score;
}

// Function to generate random position
function getRandomPosition() {
  return Math.floor(Math.random() * 20);
}

// Function to end the game
function endGame() {
  clearInterval(gameLoop);
  alert("Game Over!");
}

// Event listeners for keyboard input
document.addEventListener("keydown", handleKeyboardInput);

// Function to start the game
function startGame() {
  // initialize the game board
  initializeGameBoard();

  // start the game loop
  const gameLoop = setInterval(() => {
    moveSnake();
  }, 200);
}

// Call the function to start the game
startGame();
