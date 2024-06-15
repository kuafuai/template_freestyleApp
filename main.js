// main.js

// Function to randomly select a study activity
function randomStudyActivity() {
  var activities = ["奥数", "TOEFL", "古文", "科学"];
  var randomIndex = Math.floor(Math.random() * activities.length);
  displayResult(activities[randomIndex]);
}

// Function to randomly select an exercise activity
function randomExerciseActivity() {
  var activities = ["三步杀", "引离", "引入", "防守"];
  var randomIndex = Math.floor(Math.random() * activities.length);
  displayResult(activities[randomIndex]);
}

// Function to randomly select an eat activity
function randomEatActivity() {
  var activities = ["银泉", "留食", "玉湖", "大食堂"];
  var randomIndex = Math.floor(Math.random() * activities.length);
  displayResult(activities[randomIndex]);
}

// Function to show the custom input field
function showCustomInput() {
  document.getElementById("custom-input").style.display = "block";
}

// Function to randomly select a custom activity
function randomCustomActivity() {
  var customInput = document.getElementById("custom-activity").value;
  var activities = customInput.split(",");
  
  if (customInput.trim() === "" || activities.length === 0) {
    displayResult("Please enter at least one activity.");
    return;
  }
  
  var randomIndex = Math.floor(Math.random() * activities.length);
  displayResult(activities[randomIndex]);
}

// Function to display the selected activity
function displayResult(activity) {
  document.getElementById("activity-result").innerHTML = activity;
  document.getElementById("result").style.display = "block";
}
