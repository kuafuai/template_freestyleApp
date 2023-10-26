// Function to create a new note
function createNote() {
    // Get user input for note content
    var noteContent = prompt("Enter note content:");

    // Create a new note object
    var note = {
        content: noteContent
    };

    // Add the new note to the list of notes
    notes.push(note);

    // Display the updated note list
    displayNoteList();
}

// Function to display the list of notes
function displayNoteList() {
    // Get the note list element
    var noteList = document.getElementById("noteList");

    // Clear the note list
    noteList.innerHTML = "";

    // Loop through the notes and create list items for each note
    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];

        // Create a list item for the note
        var listItem = document.createElement("li");

        // Create a span element for the note content
        var contentSpan = document.createElement("span");
        contentSpan.textContent = note.content;

        // Create buttons for editing, deleting, and forwarding the note
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("editButton");

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton");

        var forwardButton = document.createElement("button");
        forwardButton.textContent = "Forward";
        forwardButton.classList.add("forwardButton");

        // Append the note content and buttons to the list item
        listItem.appendChild(contentSpan);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        listItem.appendChild(forwardButton);

        // Append the list item to the note list
        noteList.appendChild(listItem);
    }
}

// Function to edit a note
function editNote() {
    // Get the selected note index
    var selectedIndex = getSelectedNoteIndex();

    // Get the selected note
    var selectedNote = notes[selectedIndex];

    // Get user input for the edited note content
    var editedContent = prompt("Enter edited note content:", selectedNote.content);

    // Update the note content
    selectedNote.content = editedContent;

    // Display the updated note list
    displayNoteList();
}

// Function to save the edited note
function saveNote() {
    // Get the selected note index
    var selectedIndex = getSelectedNoteIndex();

    // Get the selected note
    var selectedNote = notes[selectedIndex];

    // Get the edited note content from the input field
    var editedContent = document.getElementById("editedNoteContent").value;

    // Update the note content
    selectedNote.content = editedContent;

    // Display the updated note list
    displayNoteList();
}

// Function to delete a note
function deleteNote() {
    // Get the selected note index
    var selectedIndex = getSelectedNoteIndex();

    // Remove the selected note from the list of notes
    notes.splice(selectedIndex, 1);

    // Display the updated note list
    displayNoteList();
}

// Function to forward a note
function forwardNote() {
    // Get the selected note index
    var selectedIndex = getSelectedNoteIndex();

    // Get the selected note
    var selectedNote = notes[selectedIndex];

    // Get user input for the recipient's email address
    var recipientEmail = prompt("Enter recipient's email address:");

    // Send the note to the recipient's email address
    sendEmail(selectedNote.content, recipientEmail);
}

// Function to get the index of the selected note
function getSelectedNoteIndex() {
    // Get the note list element
    var noteList = document.getElementById("noteList");

    // Get the selected note index
    var selectedIndex = Array.from(noteList.children).indexOf(event.target.parentNode);

    return selectedIndex;
}

// Event listener for create note button
document.getElementById("createNoteButton").addEventListener("click", createNote);

// Event listener for note list items
document.getElementById("noteList").addEventListener("click", function(event) {
    if (event.target.classList.contains("editButton")) {
        editNote();
    } else if (event.target.classList.contains("deleteButton")) {
        deleteNote();
    } else if (event.target.classList.contains("forwardButton")) {
        forwardNote();
    }
});

// Array to store the notes
var notes = [];

// Display the initial note list
displayNoteList();
