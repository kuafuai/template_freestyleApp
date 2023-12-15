/* script.js */
$(document).ready(function() {
    // Handle registration form submission
    $('#registrationForm').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        
        // Validate inputs
        if (validateRegistrationInputs(username, password, email, phone)) {
            // Perform registration logic
            registerUser(username, password, email, phone);
        } else {
            // Display error message
            showError('Invalid registration inputs');
        }
    });
    
    // Handle login form submission
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        var username = $('#loginUsername').val();
        var password = $('#loginPassword').val();
        
        // Validate inputs
        if (validateLoginInputs(username, password)) {
            // Perform login logic
            loginUser(username, password);
        } else {
            // Display error message
            showError('Invalid login inputs');
        }
    });
});

function validateRegistrationInputs(username, password, email, phone) {
    // Validate inputs here
    if (username.length === 0 || password.length === 0 || email.length === 0 || phone.length === 0) {
        return false;
    }
    return true;
}

function registerUser(username, password, email, phone) {
    // Perform registration logic here
    // Display success message or error message
    // Assuming an API call is made to register the user
    $.ajax({
        url: '/api/register',
        method: 'POST',
        data: {
            username: username,
            password: password,
            email: email,
            phone: phone
        },
        success: function(response) {
            // Display success message
            showSuccess('User registered successfully');
        },
        error: function(error) {
            // Display error message
            showError('Failed to register user');
        }
    });
}

function validateLoginInputs(username, password) {
    // Validate inputs here
    if (username.length === 0 || password.length === 0) {
        return false;
    }
    return true;
}

function loginUser(username, password) {
    // Perform login logic here
    // Display success message or error message
    // Assuming an API call is made to authenticate the user
    $.ajax({
        url: '/api/login',
        method: 'POST',
        data: {
            username: username,
            password: password
        },
        success: function(response) {
            // Display success message
            showSuccess('User logged in successfully');
        },
        error: function(error) {
            // Display error message
            showError('Failed to login');
        }
    });
}

function showError(message) {
    // Display error message to the user
    $('#errorMessage').text(message);
    $('#errorMessage').show();
}

function showSuccess(message) {
    // Display success message to the user
    $('#successMessage').text(message);
    $('#successMessage').show();
}
