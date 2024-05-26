// main.js
$(document).ready(function() {
  // Load all stories on page load
  loadAllStories();

  // Search button click event
  $("#searchButton").click(function() {
    var keyword = $("#searchInput").val();
    searchStories(keyword);
  });

  // Story title click event
  $(document).on("click", ".storyTitle", function() {
    var storyId = $(this).data("id");
    showStoryDetail(storyId);
  });

  // Back button click event
  $("#backButton").click(function() {
    showStoryList();
  });
});

// Load all stories
function loadAllStories() {
  // Call API to get all stories data
  // Replace API_ENDPOINT with the actual API endpoint
  $.get(API_ENDPOINT + "/stories")
    .done(function(data) {
      // Generate HTML for story list
      var html = "";
      for (var i = 0; i < data.length; i++) {
        html += '<div class="item">';
        html += '<div class="content">';
        html += '<a class="header storyTitle" data-id="' + data[i].id + '">' + data[i].title + '</a>';
        html += '</div>';
        html += '</div>';
      }
      $("#storyList").html(html);
    })
    .fail(function(error) {
      console.error("Error loading stories:", error);
      // Handle error here, e.g. show an error message to the user
    });
}

// Search stories
function searchStories(keyword) {
  // Call API to search stories data
  // Replace API_ENDPOINT with the actual API endpoint
  $.get(API_ENDPOINT + "/stories?keyword=" + keyword)
    .done(function(data) {
      // Generate HTML for story list
      var html = "";
      for (var i = 0; i < data.length; i++) {
        html += '<div class="item">';
        html += '<div class="content">';
        html += '<a class="header storyTitle" data-id="' + data[i].id + '">' + data[i].title + '</a>';
        html += '</div>';
        html += '</div>';
      }
      $("#storyList").html(html);
    })
    .fail(function(error) {
      console.error("Error searching stories:", error);
      // Handle error here, e.g. show an error message to the user
    });
}

// Show story detail
function showStoryDetail(storyId) {
  // Call API to get story detail data
  // Replace API_ENDPOINT with the actual API endpoint
  $.get(API_ENDPOINT + "/stories/" + storyId)
    .done(function(data) {
      // Generate HTML for story detail
      var html = '<h2>' + data.title + '</h2>';
      html += '<p>' + data.content + '</p>';
      $("#storyDetail").html(html);
    })
    .fail(function(error) {
      console.error("Error loading story detail:", error);
      // Handle error here, e.g. show an error message to the user
    });
}

// Show story list
function showStoryList() {
  $("#storyDetail").empty();
}
