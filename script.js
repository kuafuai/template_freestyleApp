```javascript
// Define variables for game elements
let birdX;
let birdY;
let birdVelocity;
let obstacleList;
let score;

// Define constants for game settings
const gravity = 0.5;
const jumpForce = -10;
const obstacleGap = 200;
const obstacleWidth = 80; // Updated obstacle width
const obstacleHeight = 300; // Updated obstacle height
const obstacleSpeed = 5;

// Define game canvas and score display elements
const canvas = document.getElementById("gameCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasContext = canvas.getContext("2d");
const scoreDisplay = document.getElementById("scoreDisplay");

// ... (remaining code)