/* script.js */
// Function to add a new task
function addTask() {
    var taskInput = prompt("Enter task:");
    if (taskInput !== null && taskInput !== "") {
        var taskList = document.getElementById("task-list");
        var taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = '<input type="checkbox">' + taskInput + '<button onclick="editTask(this)">Edit</button><button onclick="deleteTask(this)">Delete</button>';
        taskList.appendChild(taskElement);
    }
}

// Function to edit a task
function editTask(button) {
    var taskInput = prompt("Enter new task:");
    if (taskInput !== null && taskInput !== "") {
        var taskElement = button.parentNode;
        taskElement.childNodes[1].nodeValue = taskInput;
    }
}

// Function to delete a task
function deleteTask(button) {
    var taskElement = button.parentNode;
    taskElement.parentNode.removeChild(taskElement);
}

// Function to set a reminder
function setReminder() {
    var reminderTime = prompt("Enter reminder time:");
    if (reminderTime !== null && reminderTime !== "") {
        alert("Reminder set for " + reminderTime);
    }
}
