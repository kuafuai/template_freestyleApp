// Profile Page Logic
window.addEventListener("load", function() {
    // Send request to get user profile data
    var profileRequest = new XMLHttpRequest();
    profileRequest.open("GET", "/api/profile", true);
    profileRequest.onreadystatechange = function() {
        if (profileRequest.readyState === 4 && profileRequest.status === 200) {
            var profileData = JSON.parse(profileRequest.responseText);
            // Display user profile data on the page
            displayProfile(profileData);
        }
    };
    profileRequest.send();
});

function displayProfile(profileData) {
    // Display user profile data on the page
}
