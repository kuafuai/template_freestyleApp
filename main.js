// Define global variables for game character position and current area
let characterPositionX = 0;
let characterPositionY = 0;
let currentArea = null;

// Add event listeners for keyboard and mouse controls
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("click", handleClick);

// Function to handle keyboard controls
function handleKeyDown(event) {
    // Check the key code and update character position accordingly
    if (event.keyCode === 37) { // Left arrow key
        characterPositionX--;
    } else if (event.keyCode === 38) { // Up arrow key
        characterPositionY--;
    } else if (event.keyCode === 39) { // Right arrow key
        characterPositionX++;
    } else if (event.keyCode === 40) { // Down arrow key
        characterPositionY++;
    }
    
    // Update the game layout based on the new character position
    updateGameLayout();
}

// Function to handle mouse click on animal icons
function handleClick(event) {
    // Check if the clicked element is an animal icon
    if (event.target.classList.contains("animal-icon")) {
        // Get the animal information and display it in a popup window
        const animalName = event.target.dataset.animalName;
        const animalVideo = event.target.dataset.animalVideo;
        const animalDescription = event.target.dataset.animalDescription;
        
        // Display the animal information in a popup window
        displayAnimalPopup(animalName, animalVideo, animalDescription);
    }
}

// Function to update the game layout based on the character position
function updateGameLayout() {
    // Get the current area based on the character position
    currentArea = getAreaByPosition(characterPositionX, characterPositionY);
    
    // Update the game layout to display the current area and animals
    displayCurrentArea();
    displayAnimalsInArea(currentArea);
}

// Function to get the area based on the character position
function getAreaByPosition(positionX, positionY) {
    // Calculate the area index based on the character position
    const areaIndex = positionY * 4 + positionX;
    
    // Get the area object from the list of areas
    return areas[areaIndex];
}

// Function to display the current area in the game layout
function displayCurrentArea() {
    // Clear the game container
    document.getElementById("game-container").innerHTML = "";
    
    // Create a new element for the current area and append it to the game container
    const areaElement = document.createElement("div");
    areaElement.classList.add("area");
    areaElement.innerText = currentArea.name;
    document.getElementById("game-container").appendChild(areaElement);
}

// Function to display the animals in the current area
function displayAnimalsInArea(area) {
    // Clear the controls container
    document.getElementById("controls").innerHTML = "";
    
    // Loop through the animals in the area and create an icon for each animal
    area.animals.forEach(animal => {
        const animalIcon = document.createElement("div");
        animalIcon.classList.add("animal-icon");
        animalIcon.dataset.animalName = animal.name;
        animalIcon.dataset.animalVideo = animal.video;
        animalIcon.dataset.animalDescription = animal.description;
        animalIcon.innerText = animal.name;
        document.getElementById("controls").appendChild(animalIcon);
    });
}

// Function to display the animal information in a popup window
function displayAnimalPopup(name, video, description) {
    // Create a popup window element
    const popupWindow = document.createElement("div");
    popupWindow.classList.add("popup-window");
    
    // Create elements for the animal information and append them to the popup window
    const animalNameElement = document.createElement("h2");
    animalNameElement.innerText = name;
    popupWindow.appendChild(animalNameElement);
    
    const animalVideoElement = document.createElement("video");
    animalVideoElement.src = video;
    popupWindow.appendChild(animalVideoElement);
    
    const animalDescriptionElement = document.createElement("p");
    animalDescriptionElement.innerText = description;
    popupWindow.appendChild(animalDescriptionElement);
    
    // Append the popup window to the game container
    document.getElementById("game-container").appendChild(popupWindow);
}
