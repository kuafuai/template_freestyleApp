// Define the game variables
let boardSize = 10; // The size of the game board
let mineCount = 10; // The number of mines in the game
let gameBoard = []; // The game board array
let revealedCount = 0; // The number of revealed cells
let flaggedCount = 0; // The number of flagged cells
let gameStarted = false; // Whether the game has started
let gameEnded = false; // Whether the game has ended
let timerInterval; // The interval for the timer

// Generate the game board
function generateBoard() {
  // Clear the game board
  gameBoard = [];

  // Generate the cells
  for (let i = 0; i < boardSize; i++) {
    let row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push({
        mine: false,
        revealed: false,
        flagged: false,
        count: 0
      });
    }
    gameBoard.push(row);
  }

  // Place the mines randomly
  let minesPlaced = 0;
  while (minesPlaced < mineCount) {
    let x = Math.floor(Math.random() * boardSize);
    let y = Math.floor(Math.random() * boardSize);
    if (!gameBoard[x][y].mine) {
      gameBoard[x][y].mine = true;
      minesPlaced++;
    }
  }

  // Calculate the counts for each cell
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (!gameBoard[i][j].mine) {
        let count = 0;
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (i + dx >= 0 && i + dx < boardSize && j + dy >= 0 && j + dy < boardSize) {
              if (gameBoard[i + dx][j + dy].mine) {
                count++;
              }
            }
          }
        }
        gameBoard[i][j].count = count;
      }
    }
  }
}

// Start the game
function startGame() {
  // Generate the game board
  generateBoard();

  // Reset the game variables
  revealedCount = 0;
  flaggedCount = 0;
  gameStarted = false;
  gameEnded = false;

  // Reset the timer
  clearInterval(timerInterval);
  document.getElementById("timer").textContent = "00:00";

  // Reset the remaining mines count
  document.getElementById("mines").textContent = "Mines: " + mineCount;

  // Clear the game board
  document.getElementById("board").innerHTML = "";

  // Generate the cells
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = i;
      cell.dataset.y = j;
      cell.addEventListener("click", revealCell);
      cell.addEventListener("contextmenu", flagCell);
      document.getElementById("board").appendChild(cell);
    }
  }
}

// Reveal a cell
function revealCell(event) {
  if (gameEnded) {
    return;
  }

  let x = parseInt(event.target.dataset.x);
  let y = parseInt(event.target.dataset.y);

  if (!gameStarted) {
    // Start the timer
    gameStarted = true;
    timerInterval = setInterval(updateTimer, 1000);
  }

  if (gameBoard[x][y].flagged) {
    return;
  }

  if (gameBoard[x][y].mine) {
    // Game over
    gameEnded = true;
    clearInterval(timerInterval);
    event.target.classList.add("exploded");
    revealMines();
    alert("Game over!");
  } else {
    // Reveal the cell
    reveal(x, y);
    checkWin();
  }
}

// Flag a cell
function flagCell(event) {
  event.preventDefault();

  if (gameEnded) {
    return;
  }

  let x = parseInt(event.target.dataset.x);
  let y = parseInt(event.target.dataset.y);

  if (!gameStarted) {
    // Start the timer
    gameStarted = true;
    timerInterval = setInterval(updateTimer, 1000);
  }

  if (!gameBoard[x][y].revealed) {
    if (gameBoard[x][y].flagged) {
      // Unflag the cell
      gameBoard[x][y].flagged = false;
      event.target.classList.remove("flagged");
      flaggedCount--;
    } else {
      // Flag the cell
      gameBoard[x][y].flagged = true;
      event.target.classList.add("flagged");
      flaggedCount++;
    }

    // Update the remaining mines count
    document.getElementById("mines").textContent = "Mines: " + (mineCount - flaggedCount);
  }
}

// Reveal a cell and its neighbors
function reveal(x, y) {
  if (x < 0 || x >= boardSize || y < 0 || y >= boardSize || gameBoard[x][y].revealed) {
    return;
  }

  gameBoard[x][y].revealed = true;
  revealedCount++;

  let cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  cell.classList.add("revealed");

  if (gameBoard[x][y].count > 0) {
    cell.textContent = gameBoard[x][y].count;
    return;
  }

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      reveal(x + dx, y + dy);
    }
  }
}

// Reveal all the mines
function revealMines() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (gameBoard[i][j].mine) {
        let cell = document.querySelector(`[data-x="${i}"][data-y="${j}"]`);
        cell.classList.add("revealed");
        cell.textContent = "*";
      }
    }
  }
}

// Check if the player has won the game
function checkWin() {
  if (revealedCount === (boardSize * boardSize - mineCount)) {
    gameEnded = true;
    clearInterval(timerInterval);
    revealMines();
    alert("Congratulations! You win!");
  }
}

// Update the timer
function updateTimer() {
  let timer = document.getElementById("timer");
  let time = timer.textContent.split(":");
  let minutes = parseInt(time[0]);
  let seconds = parseInt(time[1]);

  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Start the game when the page loads
window.addEventListener("load", startGame);
