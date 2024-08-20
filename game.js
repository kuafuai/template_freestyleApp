const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const playerScoreBoard = document.getElementById('playerScore');
const opponentScoreBoard = document.getElementById('opponentScore');

let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speedX: 4,
    speedY: 4,
};

let paddle = {
    width: 10,
    height: 100,
    x: 0,
    y: canvas.height / 2 - 50,
    dy: 0,
};

let opponentPaddle = {
    width: 10,
    height: 100,
    x: canvas.width - 10,
    y: canvas.height / 2 - 50,
    dy: 0,
};

let playerScore = 0;
let opponentScore = 0;
let gameInterval;

// Initialize game
function init() {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    draw();
}

// Draw game elements
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddles();
    
    // Move the ball
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    handleBallWallCollision();
    handleBallPaddleCollision();

    // Scoring logic
    handleScoring();

    playerScoreBoard.textContent = playerScore;
    opponentScoreBoard.textContent = opponentScore;

    requestAnimationFrame(draw);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawPaddles() {
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillRect(opponentPaddle.x, opponentPaddle.y, opponentPaddle.width, opponentPaddle.height);
}

function handleBallWallCollision() {
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.speedY = -ball.speedY;
    }
}

function handleBallPaddleCollision() {
    if (ball.x - ball.radius < paddle.x + paddle.width &&
        ball.y > paddle.y && ball.y < paddle.y + paddle.height) {
        ball.speedX = -ball.speedX;
    } else if (ball.x + ball.radius > opponentPaddle.x &&
               ball.y > opponentPaddle.y &&
               ball.y < opponentPaddle.y + opponentPaddle.height) {
        ball.speedX = -ball.speedX;
    }
}

function handleScoring() {
    if (ball.x + ball.radius < 0) {
        opponentScore++;
        resetBall();
    } else if (ball.x - ball.radius > canvas.width) {
        playerScore++;
        resetBall();
    }
}

// Reset ball position
function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speedX = -ball.speedX; // Change ball direction
}

// Control paddle movement
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' && paddle.y > 0) {
        paddle.dy = -10;
    } else if (event.key === 'ArrowDown' && paddle.y < canvas.height - paddle.height) {
        paddle.dy = 10;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        paddle.dy = 0;
    }
});

// Update paddle position in each frame
function updatePaddlePosition() {
    paddle.y += paddle.dy;
    if (paddle.y < 0) paddle.y = 0;
    if (paddle.y > canvas.height - paddle.height) paddle.y = canvas.height - paddle.height;
}

// Start Game
document.getElementById('startGame').addEventListener('click', function() {
    playerScore = 0;
    opponentScore = 0;
    playerScoreBoard.textContent = playerScore;
    opponentScoreBoard.textContent = opponentScore;
    init();
    draw();
});

setInterval(updatePaddlePosition, 1000 / 60); // Update paddle position at 60 FPS
init();
