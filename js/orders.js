// Orders Page Logic
window.addEventListener("load", function() {
    // Send request to get orders data
    var ordersRequest = new XMLHttpRequest();
    ordersRequest.open("GET", "/api/orders", true);
    ordersRequest.onreadystatechange = function() {
        if (ordersRequest.readyState === 4 && ordersRequest.status === 200) {
            var ordersData = JSON.parse(ordersRequest.responseText);
            // Display orders data on the page
            displayOrders(ordersData);
        }
    };
    ordersRequest.send();
});

function displayOrders(ordersData) {
    // Display orders data on the page
}

document.getElementById("createOrderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var orderData = {
        // Get order data from form inputs
    };
    // Send request to create order
    var createOrderRequest = new XMLHttpRequest();
    createOrderRequest.open("POST", "/api/orders", true);
    createOrderRequest.setRequestHeader("Content-Type", "application/json");
    createOrderRequest.onreadystatechange = function() {
        if (createOrderRequest.readyState === 4) {
            if (createOrderRequest.status === 201) {
                // Order created successfully
                var response = JSON.parse(createOrderRequest.responseText);
                // Display success message
                alert("Order created successfully.");
                // Refresh orders data
                // displayOrders(ordersData);
            } else {
                // Order creation failed
                alert("Failed to create order. Please try again.");
            }
        }
    };
    createOrderRequest.send(JSON.stringify(orderData));
});

// Add logic for editing and deleting orders
