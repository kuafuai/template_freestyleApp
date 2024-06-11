// script.js

// Game configuration
const levels = {
    easy: { rows: 9, cols: 9, mines: 10 },
    medium: { rows: 13, cols: 13, mines: 20 },
    hard: { rows: 19, cols: 19, mines: 30 }
};

let currentLevel = levels.easy;
let grid = [];
let minePositions = [];
let flaggedCells = [];
let clickedCells = [];
let startTime;
let timerInterval;

// Initialize the game
function initializeGame() {
    createGrid();
    generateMines();
    calculateAdjacentMines();
    renderGrid();
    startTimer();
}

// Create the grid
function createGrid() {
    const { rows, cols } = currentLevel;
    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < cols; j++) {
            grid[i][j] = {
                row: i,
                col: j,
                isMine: false,
                isClicked: false,
                isFlagged: false,
                adjacentMines: 0
            };
        }
    }
}

// Generate random mine positions
function generateMines() {
    const { rows, cols, mines } = currentLevel;
    let totalCells = rows * cols;
    let mineCount = 0;
    while (mineCount < mines) {
        let randomCell = Math.floor(Math.random() * totalCells);
        let row = Math.floor(randomCell / cols);
        let col = randomCell % cols;
        if (!grid[row][col].isMine) {
            grid[row][col].isMine = true;
            minePositions.push({ row, col });
            mineCount++;
        }
    }
}

// Calculate the number of adjacent mines for each cell
function calculateAdjacentMines() {
    const { rows, cols } = currentLevel;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!grid[i][j].isMine) {
                let count = 0;
                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
                        let newRow = i + dx;
                        let newCol = j + dy;
                        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                            if (grid[newRow][newCol].isMine) {
                                count++;
                            }
                        }
                    }
                }
                grid[i][j].adjacentMines = count;
            }
        }
    }
}

// Render the grid
function renderGrid() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    const { rows, cols } = currentLevel;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = grid[i][j];
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.dataset.row = cell.row;
            cellElement.dataset.col = cell.col;
            cellElement.addEventListener('click', handleCellClick);
            cellElement.addEventListener('contextmenu', handleCellRightClick);
            gridElement.appendChild(cellElement);
        }
    }
}

// Handle cell click event
function handleCellClick(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    const cell = grid[row][col];
    if (!cell.isClicked && !cell.isFlagged) {
        cell.isClicked = true;
        clickedCells.push({ row, col });
        if (cell.isMine) {
            gameOver();
        } else {
            if (cell.adjacentMines === 0) {
                openAdjacentCells(row, col);
            }
            checkGameWin();
        }
        renderGrid();
    }
}

// Handle cell right click event
function handleCellRightClick(event) {
    event.preventDefault();
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    const cell = grid[row][col];
    if (!cell.isClicked) {
        if (cell.isFlagged) {
            cell.isFlagged = false;
            flaggedCells = flaggedCells.filter(({ row: r, col: c }) => r !== row || c !== col);
        } else {
            cell.isFlagged = true;
            flaggedCells.push({ row, col });
        }
        renderGrid();
    }
}

// Open adjacent cells recursively
function openAdjacentCells(row, col) {
    const { rows, cols } = currentLevel;
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            let newRow = row + dx;
            let newCol = col + dy;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                const cell = grid[newRow][newCol];
                if (!cell.isClicked && !cell.isFlagged) {
                    cell.isClicked = true;
                    clickedCells.push({ row: newRow, col: newCol });
                    if (cell.adjacentMines === 0) {
                        openAdjacentCells(newRow, newCol);
                    }
                }
            }
        }
    }
}

// Check if the game is won
function checkGameWin() {
    const { rows, cols, mines } = currentLevel;
    const totalCells = rows * cols;
    const clickedCount = clickedCells.length;
    if (clickedCount === totalCells - mines) {
        gameWin();
    }
}

// Game over
function gameOver() {
    stopTimer();
    revealMines();
    renderGrid();
    alert('Game Over!');
}

// Game win
function gameWin() {
    stopTimer();
    revealMines();
    renderGrid();
    alert('Congratulations! You Win!');
}

// Start the timer
function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Update the timer
function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Initialize the game
initializeGame();