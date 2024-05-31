// QR Code Page Logic
window.addEventListener("load", function() {
    // Send request to get QR code template data
    var qrcodeRequest = new XMLHttpRequest();
    qrcodeRequest.open("GET", "/api/qrcode", true);
    qrcodeRequest.onreadystatechange = function() {
        if (qrcodeRequest.readyState === 4 && qrcodeRequest.status === 200) {
            var qrcodeData = JSON.parse(qrcodeRequest.responseText);
            // Display QR code template data on the page
            displayQRCode(qrcodeData);
        }
    };
    qrcodeRequest.send();
});

function displayQRCode(qrcodeData) {
    // Display QR code template data on the page
}

document.getElementById("configureQRCodeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var qrcodeData = {
        // Get QR code template data from form inputs
    };
    // Send request to configure QR code template
    var configureQRCodeRequest = new XMLHttpRequest();
    configureQRCodeRequest.open("POST", "/api/qrcode", true);
    configureQRCodeRequest.setRequestHeader("Content-Type", "application/json");
    configureQRCodeRequest.onreadystatechange = function() {
        if (configureQRCodeRequest.readyState === 4) {
            if (configureQRCodeRequest.status === 200) {
                // QR code template configured successfully
                var response = JSON.parse(configureQRCodeRequest.responseText);
                // Display success message
                alert("QR code template configured successfully.");
                // Refresh QR code template data
                // displayQRCode(qrcodeData);
            } else {
                // QR code template configuration failed
                alert("Failed to configure QR code template. Please try again.");
            }
        }
    };
    configureQRCodeRequest.send(JSON.stringify(qrcodeData));
});
