// main.js

// Add logic and event handlers for index.html, my.html, news.html, activities.html, and message_board.html

// Logic and event handlers for index.html
function handleIndexPage() {
  // Add logic and event handlers for index.html here
}

// Logic and event handlers for my.html
function handleMyPage() {
  // Add logic and event handlers for my.html here
}

// Logic and event handlers for news.html
function handleNewsPage() {
  // Add logic and event handlers for news.html here
}

// Logic and event handlers for activities.html
function handleActivitiesPage() {
  // Add logic and event handlers for activities.html here
}

// Logic and event handlers for message_board.html
function handleMessageBoardPage() {
  // Add logic and event handlers for message_board.html here
}

// Call the respective functions based on the current page
if (window.location.pathname.includes("index.html")) {
  handleIndexPage();
} else if (window.location.pathname.includes("my.html")) {
  handleMyPage();
} else if (window.location.pathname.includes("news.html")) {
  handleNewsPage();
} else if (window.location.pathname.includes("activities.html")) {
  handleActivitiesPage();
} else if (window.location.pathname.includes("message_board.html")) {
  handleMessageBoardPage();
}
