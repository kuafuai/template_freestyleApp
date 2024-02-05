// This file contains the JavaScript logic for the main page

// Import modules or classes for the APIs
import ChatGPT from './ChatGPT';
import WeChatBot from './WeChatBot';
import Database from './Database';

// Create instances of the APIs
const chatGPT = new ChatGPT();
const wechatBot = new WeChatBot();
const database = new Database();

// Function to generate meeting summary
function generateSummary() {
  // Get meeting record and date from input fields
  const meetingRecord = document.getElementById("meetingRecord").value;
  const meetingDate = document.getElementById("meetingDate").value;

  // Call ChatGPT API to generate summary
  try {
    const summary = chatGPT.generateSummary(meetingRecord);

    // Display summary in the textarea
    document.getElementById("summary").value = summary;
  } catch (error) {
    console.error("Error generating summary:", error);
    // Handle error here, e.g. display an error message to the user
  }
}

// Function to send meeting summary to WeChat group
function sendSummary() {
  // Get WeChat group ID from input field
  const wechatGroupId = document.getElementById("wechatGroupId").value;

  // Get summary from textarea
  const summary = document.getElementById("summary").value;

  // Call WeChatBot API to send summary to group
  try {
    wechatBot.sendSummary(wechatGroupId, summary);
  } catch (error) {
    console.error("Error sending summary:", error);
    // Handle error here, e.g. display an error message to the user
  }
}

// Function to save meeting summary
function saveSummary() {
  // Get summary from textarea
  const summary = document.getElementById("summary").value;

  // Call Database API to save summary
  try {
    database.saveSummary(summary);
  } catch (error) {
    console.error("Error saving summary:", error);
    // Handle error here, e.g. display an error message to the user
  }
}

// Validate input fields
function validateInput() {
  const meetingRecord = document.getElementById("meetingRecord").value;
  const meetingDate = document.getElementById("meetingDate").value;
  const wechatGroupId = document.getElementById("wechatGroupId").value;

  if (meetingRecord.trim() === "") {
    alert("Please enter a meeting record.");
    return false;
  }

  if (meetingDate.trim() === "") {
    alert("Please enter a meeting date.");
    return false;
  }

  if (wechatGroupId.trim() === "") {
    alert("Please enter a WeChat group ID.");
    return false;
  }

  return true;
}

// Event listener for generate button
document.getElementById("generateButton").addEventListener("click", function() {
  if (validateInput()) {
    generateSummary();
  }
});

// Event listener for send button
document.getElementById("sendButton").addEventListener("click", function() {
  if (validateInput()) {
    sendSummary();
  }
});

// Event listener for save button
document.getElementById("saveButton").addEventListener("click", function() {
  if (validateInput()) {
    saveSummary();
  }
});
