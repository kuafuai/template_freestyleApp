// Function to display the list of contacts
function displayContactList() {
    // TODO: Implement display contact list functionality
    // Assuming the contacts are stored in an array called "contacts"
    const contacts = ["Contact 1", "Contact 2", "Contact 3"];
    
    // Get the contact list container element
    const contactListContainer = document.getElementById("contactList");
    
    // Clear the contact list container
    contactListContainer.innerHTML = "";
    
    // Loop through the contacts array and create a list item for each contact
    contacts.forEach(contact => {
        // Create a list item element
        const listItem = document.createElement("li");
        
        // Set the text content of the list item to the contact name
        listItem.textContent = contact;
        
        // Append the list item to the contact list container
        contactListContainer.appendChild(listItem);
    });
}

// Function to get the selected contacts
function getSelectedContacts() {
    // TODO: Implement getting selected contacts functionality
    // Assuming the selected contacts are stored in an array called "selectedContacts"
    const selectedContacts = [];
    
    // Get all the list items in the contact list container
    const listItems = document.querySelectorAll("#contactList li");
    
    // Loop through the list items and check if they are selected
    listItems.forEach(listItem => {
        if (listItem.classList.contains("selected")) {
            // If the list item is selected, add the contact name to the selectedContacts array
            selectedContacts.push(listItem.textContent);
        }
    });
    
    // Return the selected contacts array
    return selectedContacts;
}

// Function to forward the note to the selected contacts
function forwardNote() {
    // TODO: Implement forward note functionality
    // Get the selected contacts
    const selectedContacts = getSelectedContacts();
    
    // Assuming the note content is stored in a variable called "noteContent"
    const noteContent = "This is the note content.";
    
    // Assuming the forward functionality is to log the note content and selected contacts to the console
    console.log("Forwarding note to contacts:", selectedContacts);
    console.log("Note content:", noteContent);
}

// Display the list of contacts
displayContactList();

// Event listener for forward button
document.getElementById("forwardButton").addEventListener("click", forwardNote);