// This file is responsible for handling game logic and interactions

// Constants
const BOARD_SIZE = 8;
const TARGET_SCORE = 100;
const MAX_MOVES = 20;

// Variables
let score = 0;
let moves = 0;
let target = TARGET_SCORE;

// Game initialization
initializeGame();

// Function to initialize the game
function initializeGame() {
    createGameBoard();
    generatePokemon();
    updateScore();
    updateMoves();
    updateTarget();
    addEventListeners();
}

// Function to create the game board
function createGameBoard() {
    const gameBoard = document.getElementById('game-board');
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            const pokemon = document.createElement('div');
            pokemon.classList.add('pokemon');
            pokemon.setAttribute('data-row', i);
            pokemon.setAttribute('data-col', j);
            gameBoard.appendChild(pokemon);
        }
    }
}

// Function to generate random Pokemon on the game board
function generatePokemon() {
    const pokemons = ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur'];
    const gameBoard = document.getElementById('game-board');
    const pokemonElements = gameBoard.getElementsByClassName('pokemon');
    for (let i = 0; i < pokemonElements.length; i++) {
        const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
        pokemonElements[i].innerText = randomPokemon;
    }
}

// Function to update the score
function updateScore() {
    const scoreValue = document.getElementById('score-value');
    scoreValue.innerText = score;
}

// Function to update the moves
function updateMoves() {
    const movesValue = document.getElementById('moves-value');
    movesValue.innerText = moves;
}

// Function to update the target
function updateTarget() {
    const targetValue = document.getElementById('target-value');
    targetValue.innerText = target;
}

// Function to add event listeners
function addEventListeners() {
    const pokemonElements = document.getElementsByClassName('pokemon');
    for (let i = 0; i < pokemonElements.length; i++) {
        pokemonElements[i].addEventListener('click', handlePokemonClick);
    }
    const restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', restartGame);
}

// Function to handle Pokemon click event
function handlePokemonClick(event) {
    const clickedPokemon = event.target;
    const targetPokemon = document.getElementById('target-pokemon').innerText;
    const clickedPokemonName = clickedPokemon.innerText;
    
    if (clickedPokemonName === targetPokemon) {
        score += 10;
        moves++;
        updateScore();
        updateMoves();
        generatePokemon();
        checkGameStatus();
    } else {
        moves++;
        updateMoves();
        checkGameStatus();
    }
}

// Function to check the game status
function checkGameStatus() {
    if (score >= target) {
        alert('Congratulations! You have reached the target score.');
        restartGame();
    } else if (moves >= MAX_MOVES) {
        alert('Game over! You have reached the maximum number of moves.');
        restartGame();
    }
}

// Function to restart the game
function restartGame() {
    score = 0;
    moves = 0;
    target = TARGET_SCORE;
    updateScore();
    updateMoves();
    updateTarget();
    generatePokemon();
}
