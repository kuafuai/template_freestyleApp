// This file is responsible for providing utility functions

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to calculate the score based on the number of eliminated Pokemon
function calculateScore(numEliminatedPokemon) {
    return numEliminatedPokemon * 10;
}

module.exports = {
    getRandomNumber,
    calculateScore
};