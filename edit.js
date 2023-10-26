// Function to get the note data from the URL parameters
function getNoteData() {
    const urlParams = new URLSearchParams(window.location.search);
    const noteData = urlParams.get('noteData');
    return noteData;
}

// Function to display the note data in the input fields
function displayNoteData() {
    const noteData = getNoteData();
    const inputField = document.getElementById("noteInput");
    inputField.value = noteData;
}

// Function to save the edited note
function saveNote() {
    const editedNoteData = document.getElementById("noteInput").value;
    // TODO: Implement save note functionality (e.g., send the edited note data to the server or store it locally)
    console.log("Note saved:", editedNoteData);
}

// Display the note data in the input fields
displayNoteData();

// Event listener for save button
document.getElementById("saveButton").addEventListener("click", saveNote);
