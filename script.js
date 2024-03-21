// Game area dimensions
const GAME_WIDTH = 10;
const GAME_HEIGHT = 20;

// Game area
const gameArea = document.getElementById("game-area");

// Initialize game area
function initializeGameArea() {
    for (let i = 0; i < GAME_HEIGHT; i++) {
        for (let j = 0; j < GAME_WIDTH; j++) {
            const block = document.createElement("div");
            block.className = "block";
            gameArea.appendChild(block);
        }
    }
}

// Generate a random block
function generateBlock() {
    const shapes = [
        [[1, 1, 1, 1]], // I shape
        [[1, 1], [1, 1]], // O shape
        [[1, 1, 1], [0, 1, 0]], // T shape
        [[1, 1, 1], [1, 0, 0]], // L shape
        [[1, 1, 1], [0, 0, 1]], // J shape
        [[0, 1, 1], [1, 1, 0]], // S shape
        [[1, 1, 0], [0, 1, 1]] // Z shape
    ];

    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "cyan"];

    const randomShapeIndex = Math.floor(Math.random() * shapes.length);
    const randomColorIndex = Math.floor(Math.random() * colors.length);

    const shape = shapes[randomShapeIndex];
    const color = colors[randomColorIndex];

    return {
        shape: shape,
        color: color,
        x: Math.floor(GAME_WIDTH / 2) - Math.floor(shape[0].length / 2),
        y: 0
    };
}

// Render the block
function renderBlock(block) {
    const blocks = document.getElementsByClassName("block");

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "";
    }

    for (let i = 0; i < block.shape.length; i++) {
        for (let j = 0; j < block.shape[i].length; j++) {
            if (block.shape[i][j] === 1) {
                const index = (block.y + i) * GAME_WIDTH + (block.x + j);
                blocks[index].style.backgroundColor = block.color;
            }
        }
    }
}

// Move the block
function moveBlock(block, direction) {
    const newBlock = {
        shape: block.shape,
        color: block.color,
        x: block.x,
        y: block.y
    };

    if (direction === "left") {
        newBlock.x -= 1;
    } else if (direction === "right") {
        newBlock.x += 1;
    } else if (direction === "down") {
        newBlock.y += 1;
    }

    if (isValidPosition(newBlock)) {
        return newBlock;
    }

    return block;
}

// Rotate the block
function rotateBlock(block) {
    const newBlock = {
        shape: block.shape[0].map((_, i) => block.shape.map(row => row[i])).reverse(),
        color: block.color,
        x: block.x,
        y: block.y
    };

    if (isValidPosition(newBlock)) {
        return newBlock;
    }

    return block;
}

// Check if the block is in a valid position
function isValidPosition(block) {
    for (let i = 0; i < block.shape.length; i++) {
        for (let j = 0; j < block.shape[i].length; j++) {
            if (block.shape[i][j] === 1) {
                const x = block.x + j;
                const y = block.y + i;

                if (x < 0 || x >= GAME_WIDTH || y >= GAME_HEIGHT) {
                    return false;
                }

                const index = y * GAME_WIDTH + x;
                const existingBlock = gameArea.getElementsByClassName("block")[index];

                if (existingBlock.style.backgroundColor !== "") {
                    return false;
                }
            }
        }
    }

    return true;
}

// Fix the block in place
function fixBlock(block) {
    for (let i = 0; i < block.shape.length; i++) {
        for (let j = 0; j < block.shape[i].length; j++) {
            if (block.shape[i][j] === 1) {
                const x = block.x + j;
                const y = block.y + i;
                const index = y * GAME_WIDTH + x;
                const existingBlock = gameArea.getElementsByClassName("block")[index];
                existingBlock.style.backgroundColor = block.color;
            }
        }
    }
}

// Check if any rows are completed
function checkCompletedRows() {
    const blocks = gameArea.getElementsByClassName("block");
    const completedRows = [];

    for (let i = 0; i < GAME_HEIGHT; i++) {
        let isRowCompleted = true;

        for (let j = 0; j < GAME_WIDTH; j++) {
            const index = i * GAME_WIDTH + j;
            const block = blocks[index];

            if (block.style.backgroundColor === "") {
                isRowCompleted = false;
                break;
            }
        }

        if (isRowCompleted) {
            completedRows.push(i);
        }
    }

    return completedRows;
}

// Remove completed rows
function removeCompletedRows(completedRows) {
    const blocks = gameArea.getElementsByClassName("block");

    for (let i = 0; i < completedRows.length; i++) {
        const rowIndex = completedRows[i];

        for (let j = 0; j < GAME_WIDTH; j++) {
            const index = rowIndex * GAME_WIDTH + j;
            const block = blocks[index];
            block.style.backgroundColor = "";
        }

        for (let k = rowIndex - 1; k >= 0; k--) {
            for (let j = 0; j < GAME_WIDTH; j++) {
                const currentIndex = k * GAME_WIDTH + j;
                const newIndex = (k + 1) * GAME_WIDTH + j;
                const currentBlock = blocks[currentIndex];
                const newBlock = blocks[newIndex];
                newBlock.style.backgroundColor = currentBlock.style.backgroundColor;
                currentBlock.style.backgroundColor = "";
            }
        }
    }
}

// Game loop
function gameLoop() {
    if (currentBlock === null) {
        currentBlock = generateBlock();
    }

    const newBlock = moveBlock(currentBlock, "down");

    if (isValidPosition(newBlock)) {
        currentBlock = newBlock;
    } else {
        fixBlock(currentBlock);
        const completedRows = checkCompletedRows();

        if (completedRows.length > 0) {
            removeCompletedRows(completedRows);
        }

        currentBlock = null;
    }

    renderBlock(currentBlock);
}

// Handle keydown event
function handleKeyDown(event) {
    if (currentBlock === null) {
        return;
    }

    if (event.key === "ArrowLeft") {
        const newBlock = moveBlock(currentBlock, "left");

        if (isValidPosition(newBlock)) {
            currentBlock = newBlock;
        }
    } else if (event.key === "ArrowRight") {
        const newBlock = moveBlock(currentBlock, "right");

        if (isValidPosition(newBlock)) {
            currentBlock = newBlock;
        }
    } else if (event.key === "ArrowDown") {
        const newBlock = moveBlock(currentBlock, "down");

        if (isValidPosition(newBlock)) {
            currentBlock = newBlock;
        }
    } else if (event.key === "ArrowUp") {
        const newBlock = rotateBlock(currentBlock);

        if (isValidPosition(newBlock)) {
            currentBlock = newBlock;
        }
    }

    renderBlock(currentBlock);
}

// Initialize game
initializeGameArea();

// Game state
let currentBlock = null;

// Start game loop
setInterval(gameLoop, 500);

// Event listeners
document.addEventListener("keydown", handleKeyDown);
