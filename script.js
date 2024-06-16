// script.js
var currentLanguage = "Chinese";

document.addEventListener("mousemove", moveCharacter);
document.addEventListener("click", showAnimalPopup);

function moveCharacter(event) {
    // Handle character movement
    // CODE
    console.log("Character moved");
}

function showAnimalPopup(event) {
    // Show animal popup
    // CODE
    console.log("Animal popup shown");
}

function switchLanguage() {
    // Switch language
    // CODE
    if (currentLanguage === "Chinese") {
        currentLanguage = "English";
    } else {
        currentLanguage = "Chinese";
    }
    console.log("Language switched to " + currentLanguage);
}

function addStoryAndPoem() {
    // Add story and poem to animal introduction
    // CODE
    console.log("Story and poem added to animal introduction");
}