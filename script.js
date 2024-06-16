function startGame() {
    try {
        window.location.href = "game.html";
    } catch (error) {
        console.error("Error starting the game:", error);
    }
}

document.addEventListener("keydown", function(event) {
    // Handle keyboard controls for game character movement
    if (event.keyCode === 37) {
        // Left arrow key
        moveLeft();
    } else if (event.keyCode === 38) {
        // Up arrow key
        moveUp();
    } else if (event.keyCode === 39) {
        // Right arrow key
        moveRight();
    } else if (event.keyCode === 40) {
        // Down arrow key
        moveDown();
    }
});

function moveLeft() {
    // Logic for moving game character left
    console.log("Moving game character left");
}

function moveUp() {
    // Logic for moving game character up
    console.log("Moving game character up");
}

function moveRight() {
    // Logic for moving game character right
    console.log("Moving game character right");
}

function moveDown() {
    // Logic for moving game character down
    console.log("Moving game character down");
}

function showAnimalInfo(animal) {
    // Logic for displaying animal video and information
    console.log("Displaying animal video and information for", animal);
}

function showPoem(animal) {
    // Logic for displaying poem related to the animal
    console.log("Displaying poem related to", animal);
}
