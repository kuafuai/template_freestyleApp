import { createGameMap, createDefenseWall, createTowerArea, createEnemyPath } from './main.js';
import { generateEnemies as generateEnemiesFunc, moveEnemies as moveEnemiesFunc, attackEnemies as attackEnemiesFunc, upgradeTower as upgradeTowerFunc, checkGameStatus as checkGameStatusFunc } from './main.js';
import { selectTowerType, buildTower, upgradeTower as upgradeTowerFunc, attackEnemies as attackEnemiesFunc } from './tower.js';
import { generateEnemy as generateEnemyFunc, moveEnemy as moveEnemyFunc, checkEnemyCollision } from './enemy.js';

// Initialize game
function initializeGame() {
    createGameMap();
    createDefenseWall();
    createTowerArea();
    createEnemyPath();
}

// Generate enemies
function generateEnemies() {
    generateEnemiesFunc();
}

// Move enemies
function moveEnemies() {
    moveEnemiesFunc();
}

// Attack enemies
function attackEnemies() {
    attackEnemiesFunc();
}

// Upgrade tower
function upgradeTower() {
    upgradeTowerFunc();
}

// Check game status
function checkGameStatus() {
    checkGameStatusFunc();
}

// Game loop
function runGameLoop() {
    generateEnemies();
    moveEnemies();
    attackEnemies();
    upgradeTower();
    checkGameStatus();
}

// Start game
function startGame() {
    initializeGame();
    setInterval(runGameLoop, 1000); // Run game loop every second
}

// Start the game when the page is loaded
window.onload = startGame;