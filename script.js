// script.js
// Handle tab navigation
$('.menu .item').tab();

// Handle form submission
$('form').submit(function(event) {
    event.preventDefault();
    // Handle form submission logic
    // Add error handling and validation logic
    var form = $(this);
    var inputs = form.find('input');
    var isValid = true;

    inputs.each(function() {
        var input = $(this);
        if (input.val() === '') {
            isValid = false;
            input.addClass('error');
        } else {
            input.removeClass('error');
        }
    });

    if (isValid) {
        // Submit the form
        form.submit();
    } else {
        // Display error message
        $('.error-message').text('Please fill in all fields');
    }
});

// Handle file upload
$('input[type="file"]').change(function(event) {
    var fileInput = event.target;
    var file = fileInput.files[0];
    // Handle file upload logic
    // Add error handling and validation logic
    if (file) {
        // Upload the file
        var formData = new FormData();
        formData.append('file', file);

        $.ajax({
            url: '/upload',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                // Handle success response
            },
            error: function(xhr, status, error) {
                // Handle error response
            }
        });
    } else {
        // Display error message
        $('.error-message').text('Please select a file');
    }
});