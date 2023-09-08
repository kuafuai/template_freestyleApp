/* This file is responsible for handling the game logic */
// Constants
const MIN_BOARD_SIZE = 10;
const MAX_BOARD_SIZE = 20;

// Variables
let gameBoard;
let score;

// Function to set up the game board with the specified size
function setupGameBoard(size) {
  gameBoard = [];
  for (let i = 0; i < size; i++) {
    gameBoard.push([]);
    for (let j = 0; j < size; j++) {
      gameBoard[i].push(0);
    }
  }
}

// Function to initialize the snake at a random position on the game board
function initializeSnake() {
  const snakeHeadX = Math.floor(Math.random() * gameBoard.length);
  const snakeHeadY = Math.floor(Math.random() * gameBoard.length);
  gameBoard[snakeHeadX][snakeHeadY] = 1;
}

// Function to display the game board and the initial score
function displayGameBoard() {
  console.log("Game Board:");
  for (let i = 0; i < gameBoard.length; i++) {
    let row = "";
    for (let j = 0; j < gameBoard[i].length; j++) {
      row += gameBoard[i][j] + " ";
    }
    console.log(row);
  }
  console.log("Score: " + score);
}

// Function to start the game loop
function startGame() {
  waitForUserInput();
}

// Function to wait for user input to control the snake's movement
function waitForUserInput() {
  document.addEventListener("keydown", function(event) {
    updateSnakePosition(event.keyCode);
  });
}

// Function to update the snake's position based on the user input
function updateSnakePosition(keyCode) {
  let snakeHeadX = -1;
  let snakeHeadY = -1;
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === 1) {
        snakeHeadX = i;
        snakeHeadY = j;
        gameBoard[i][j] = 0;
        break;
      }
    }
    if (snakeHeadX !== -1 && snakeHeadY !== -1) {
      break;
    }
  }
  switch (keyCode) {
    case 37: // Left arrow key
      snakeHeadY = snakeHeadY - 1 >= 0 ? snakeHeadY - 1 : gameBoard.length - 1;
      break;
    case 38: // Up arrow key
      snakeHeadX = snakeHeadX - 1 >= 0 ? snakeHeadX - 1 : gameBoard.length - 1;
      break;
    case 39: // Right arrow key
      snakeHeadY = (snakeHeadY + 1) % gameBoard.length;
      break;
    case 40: // Down arrow key
      snakeHeadX = (snakeHeadX + 1) % gameBoard.length;
      break;
  }
  gameBoard[snakeHeadX][snakeHeadY] = 1;
  checkCollision(snakeHeadX, snakeHeadY);
  checkFoodEaten(snakeHeadX, snakeHeadY);
  displayGameBoard();
}

// Function to check if the snake has collided with the walls or itself
function checkCollision(snakeHeadX, snakeHeadY) {
  if (gameBoard[snakeHeadX][snakeHeadY] === 1) {
    endGame();
  }
}

// Function to end the game and display the final score
function endGame() {
  console.log("Game Over! Final Score: " + score);
}

// Function to check if the snake has eaten food
function checkFoodEaten(snakeHeadX, snakeHeadY) {
  if (gameBoard[snakeHeadX][snakeHeadY] === 2) {
    increaseSnakeLength();
    generateFoodPosition();
  }
}

// Function to increase the snake's length and update the score
function increaseSnakeLength() {
  score++;
}

// Function to generate a new food position
function generateFoodPosition() {
  let foodX = -1;
  let foodY = -1;
  while (foodX === -1 && foodY === -1) {
    const randomX = Math.floor(Math.random() * gameBoard.length);
    const randomY = Math.floor(Math.random() * gameBoard.length);
    if (gameBoard[randomX][randomY] === 0) {
      foodX = randomX;
      foodY = randomY;
      gameBoard[foodX][foodY] = 2;
    }
  }
}

// Game initialization
function init() {
  setupGameBoard(MIN_BOARD_SIZE);
  initializeSnake();
  score = 0;
  displayGameBoard();
  startGame();
}

// Call init function to start the game
init();