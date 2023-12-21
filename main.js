// main.js
$(document).ready(function() {
  // Implement login functionality
  $('#login-button').click(function() {
    var username = $('#username-input').val();
    var password = $('#password-input').val();
    var captcha = $('#captcha-input').val();

    // Validate input fields
    if (username.trim() === '' || password.trim() === '' || captcha.trim() === '') {
      $('#login-error').text('Please fill in all fields.');
      return;
    }

    // Send login request to the backend for validation
    $.ajax({
      url: '/login',
      type: 'POST',
      data: {
        username: username,
        password: password,
        captcha: captcha
      },
      success: function(response) {
        // Redirect to the backend login page if login is successful
        window.location.href = '/backend-home';
      },
      error: function(error) {
        // Display error message if login fails
        $('#login-error').text('Login failed. Please try again.');
      }
    });
  });

  // Implement data statistics functionality
  $.ajax({
    url: '/data-statistics',
    type: 'GET',
    success: function(response) {
      // Display data statistics in the data-statistics div
      $('#data-statistics').html(response);
    },
    error: function(error) {
      // Display error message if data statistics retrieval fails
      $('#data-statistics').html('Failed to retrieve data statistics.');
    }
  });

  // Implement user management functionality
  $.ajax({
    url: '/user-management',
    type: 'GET',
    success: function(response) {
      // Display user management page with user list
      $('#user-list').html(response);

      // Implement basic operations (add, delete, edit) for user management
      $('.add-user-button').click(function() {
        // Add user logic
        var newUser = prompt('Enter the username of the new user:');
        if (newUser) {
          // Send request to backend to add the new user
          $.ajax({
            url: '/add-user',
            type: 'POST',
            data: {
              username: newUser
            },
            success: function(response) {
              // Refresh user list after adding the new user
              $('#user-list').html(response);
            },
            error: function(error) {
              // Display error message if adding user fails
              alert('Failed to add user. Please try again.');
            }
          });
        }
      });

      $('.delete-user-button').click(function() {
        // Delete user logic
        var deleteUser = confirm('Are you sure you want to delete this user?');
        if (deleteUser) {
          // Send request to backend to delete the user
          $.ajax({
            url: '/delete-user',
            type: 'POST',
            data: {
              username: $(this).data('username')
            },
            success: function(response) {
              // Refresh user list after deleting the user
              $('#user-list').html(response);
            },
            error: function(error) {
              // Display error message if deleting user fails
              alert('Failed to delete user. Please try again.');
            }
          });
        }
      });

      $('.edit-user-button').click(function() {
        // Edit user logic
        var username = $(this).data('username');
        var newUsername = prompt('Enter the new username for ' + username + ':');
        if (newUsername) {
          // Send request to backend to edit the user
          $.ajax({
            url: '/edit-user',
            type: 'POST',
            data: {
              username: username,
              newUsername: newUsername
            },
            success: function(response) {
              // Refresh user list after editing the user
              $('#user-list').html(response);
            },
            error: function(error) {
              // Display error message if editing user fails
              alert('Failed to edit user. Please try again.');
            }
          });
        }
      });
    },
    error: function(error) {
      // Display error message if user management retrieval fails
      $('#user-list').html('Failed to retrieve user management data.');
    }
  });
});
