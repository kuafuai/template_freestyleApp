$(document).ready(function() {
    // Send GET request to server to get data
    $.ajax({
        url: '/data',
        type: 'GET',
        success: function(response) {
            // Display data on the page
            $('#name').text('Name: ' + response.name);
            $('#age').text('Age: ' + response.age);
            $('#oxygen').text('Blood Oxygen: ' + response.oxygen + '%');
            $('#blood-pressure').text('Blood Pressure: ' + response.blood_pressure);
            $('#emergency-contact-name').text('Emergency Contact Name: ' + response.emergency_contact.name);
            $('#emergency-contact-phone').text('Emergency Contact Phone: ' + response.emergency_contact.phone);
        },
        error: function(error) {
            console.log(error);
        }
    });

    // Handle click event of emergency contact button
    $('#emergency-contact-button').click(function() {
        // Call system's phone functionality
        // CODE TO CALL SYSTEM'S PHONE FUNCTIONALITY
    });
});
