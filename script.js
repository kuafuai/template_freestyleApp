// Define the map options
var mapOptions = {
    center: {lat: 30.2741, lng: 120.1551}, // Default center coordinates for Campus 1
    zoom: 15 // Default zoom level
};

// Create the map
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

// Define the food locations for each campus
var campus1FoodLocations = [
    {name: 'Restaurant 1', lat: 30.2741, lng: 120.1551},
    {name: 'Restaurant 2', lat: 30.2735, lng: 120.1559},
    {name: 'Restaurant 3', lat: 30.2739, lng: 120.1545}
];

var campus2FoodLocations = [
    {name: 'Restaurant 4', lat: 30.2751, lng: 120.1561},
    {name: 'Restaurant 5', lat: 30.2745, lng: 120.1569},
    {name: 'Restaurant 6', lat: 30.2749, lng: 120.1555}
];

var campus3FoodLocations = [
    {name: 'Restaurant 7', lat: 30.2761, lng: 120.1571},
    {name: 'Restaurant 8', lat: 30.2755, lng: 120.1579},
    {name: 'Restaurant 9', lat: 30.2759, lng: 120.1565}
];

// Display the food locations for the default campus
displayFoodLocations(campus1FoodLocations);

// Add event listeners to the campus options
document.getElementById('campus1').addEventListener('click', function() {
    map.setCenter({lat: 30.2741, lng: 120.1551});
    displayFoodLocations(campus1FoodLocations);
});

document.getElementById('campus2').addEventListener('click', function() {
    map.setCenter({lat: 30.2751, lng: 120.1561});
    displayFoodLocations(campus2FoodLocations);
});

document.getElementById('campus3').addEventListener('click', function() {
    map.setCenter({lat: 30.2761, lng: 120.1571});
    displayFoodLocations(campus3FoodLocations);
});

// Function to display the food locations on the map and in the food list
function displayFoodLocations(foodLocations) {
    // Clear existing markers
    clearMarkers();

    // Add markers for each food location
    for (var i = 0; i < foodLocations.length; i++) {
        var foodLocation = foodLocations[i];
        var marker = new google.maps.Marker({
            position: {lat: foodLocation.lat, lng: foodLocation.lng},
            map: map,
            title: foodLocation.name
        });

        // Add click event listener to show info window
        marker.addListener('click', function() {
            var infoWindow = new google.maps.InfoWindow({
                content: this.title
            });
            infoWindow.open(map, this);
        });

        // Add click event listener to center map on marker
        marker.addListener('click', function() {
            map.setCenter(this.getPosition());
        });

        // Add marker to markers array
        markers.push(marker);
    }

    // Display food locations in the food list
    var foodList = document.getElementById('foodLocations');
    foodList.innerHTML = '';
    for (var i = 0; i < foodLocations.length; i++) {
        var foodLocation = foodLocations[i];
        var listItem = document.createElement('li');
        listItem.textContent = foodLocation.name;
        listItem.addEventListener('click', function() {
            var index = Array.prototype.indexOf.call(foodList.children, this);
            map.setCenter({lat: foodLocations[index].lat, lng: foodLocations[index].lng});
        });
        foodList.appendChild(listItem);
    }
}

// Function to clear all markers from the map
function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

// Add comments to explain the purpose and functionality of each section of the code

// Define the map options
var mapOptions = {
    center: {lat: 30.2741, lng: 120.1551}, // Default center coordinates for Campus 1
    zoom: 15 // Default zoom level
};

// Create the map
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

// Define the food locations for each campus
var campus1FoodLocations = [
    {name: 'Restaurant 1', lat: 30.2741, lng: 120.1551},
    {name: 'Restaurant 2', lat: 30.2735, lng: 120.1559},
    {name: 'Restaurant 3', lat: 30.2739, lng: 120.1545}
];

var campus2FoodLocations = [
    {name: 'Restaurant 4', lat: 30.2751, lng: 120.1561},
    {name: 'Restaurant 5', lat: 30.2745, lng: 120.1569},
    {name: 'Restaurant 6', lat: 30.2749, lng: 120.1555}
];

var campus3FoodLocations = [
    {name: 'Restaurant 7', lat: 30.2761, lng: 120.1571},
    {name: 'Restaurant 8', lat: 30.2755, lng: 120.1579},
    {name: 'Restaurant 9', lat: 30.2759, lng: 120.1565}
];

// Display the food locations for the default campus
displayFoodLocations(campus1FoodLocations);

// Add event listeners to the campus options
document.getElementById('campus1').addEventListener('click', function() {
    map.setCenter({lat: 30.2741, lng: 120.1551});
    displayFoodLocations(campus1FoodLocations);
});

document.getElementById('campus2').addEventListener('click', function() {
    map.setCenter({lat: 30.2751, lng: 120.1561});
    displayFoodLocations(campus2FoodLocations);
});

document.getElementById('campus3').addEventListener('click', function() {
    map.setCenter({lat: 30.2761, lng: 120.1571});
    displayFoodLocations(campus3FoodLocations);
});

// Function to display the food locations on the map and in the food list
function displayFoodLocations(foodLocations) {
    // Clear existing markers
    clearMarkers();

    // Add markers for each food location
    for (var i = 0; i < foodLocations.length; i++) {
        var foodLocation = foodLocations[i];
        var marker = new google.maps.Marker({
            position: {lat: foodLocation.lat, lng: foodLocation.lng},
            map: map,
            title: foodLocation.name
        });

        // Add click event listener to show info window
        marker.addListener('click', function() {
            var infoWindow = new google.maps.InfoWindow({
                content: this.title
            });
            infoWindow.open(map, this);
        });

        // Add click event listener to center map on marker
        marker.addListener('click', function() {
            map.setCenter(this.getPosition());
        });

        // Add marker to markers array
        markers.push(marker);
    }

    // Display food locations in the food list
    var foodList = document.getElementById('foodLocations');
    foodList.innerHTML = '';
    for (var i = 0; i < foodLocations.length; i++) {
        var foodLocation = foodLocations[i];
        var listItem = document.createElement('li');
        listItem.textContent = foodLocation.name;
        listItem.addEventListener('click', function() {
            var index = Array.prototype.indexOf.call(foodList.children, this);
            map.setCenter({lat: foodLocations[index].lat, lng: foodLocations[index].lng});
        });
        foodList.appendChild(listItem);
    }
}

// Function to clear all markers from the map
function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

// Implement error handling and validation for user input

// Create the map only if the 'map' element exists
if (document.getElementById('map')) {
    var mapOptions = {
        center: {lat: 30.2741, lng: 120.1551}, // Default center coordinates for Campus 1
        zoom: 15 // Default zoom level
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Display the food locations for the default campus only if the 'foodLocations' element exists
if (document.getElementById('foodLocations')) {
    displayFoodLocations(campus1FoodLocations);
}

// Add event listeners to the campus options only if the 'campus1', 'campus2', and 'campus3' elements exist
if (document.getElementById('campus1') && document.getElementById('campus2') && document.getElementById('campus3')) {
    document.getElementById('campus1').addEventListener('click', function() {
        map.setCenter({lat: 30.2741, lng: 120.1551});
        displayFoodLocations(campus1FoodLocations);
    });

    document.getElementById('campus2').addEventListener('click', function() {
        map.setCenter({lat: 30.2751, lng: 120.1561});
        displayFoodLocations(campus2FoodLocations);
    });

    document.getElementById('campus3').addEventListener('click', function() {
        map.setCenter({lat: 30.2761, lng: 120.1571});
        displayFoodLocations(campus3FoodLocations);
    });
}

// Function to display the food locations on the map and in the food list
function displayFoodLocations(foodLocations) {
    // Clear existing markers
    clearMarkers();

    // Add markers for each food location only if the 'map' element exists
    if (document.getElementById('map')) {
        for (var i = 0; i < foodLocations.length; i++) {
            var foodLocation = foodLocations[i];
            var marker = new google.maps.Marker({
                position: {lat: foodLocation.lat, lng: foodLocation.lng},
                map: map,
                title: foodLocation.name
            });

            // Add click event listener to show info window
            marker.addListener('click', function() {
                var infoWindow = new google.maps.InfoWindow({
                    content: this.title
                });
                infoWindow.open(map, this);
            });

            // Add click event listener to center map on marker
            marker.addListener('click', function() {
                map.setCenter(this.getPosition());
            });

            // Add marker to markers array
            markers.push(marker);
        }
    }

    // Display food locations in the food list only if the 'foodLocations' element exists
    if (document.getElementById('foodLocations')) {
        var foodList = document.getElementById('foodLocations');
        foodList.innerHTML = '';
        for (var i = 0; i < foodLocations.length; i++) {
            var foodLocation = foodLocations[i];
            var listItem = document.createElement('li');
            listItem.textContent = foodLocation.name;
            listItem.addEventListener('click', function() {
                var index = Array.prototype.indexOf.call(foodList.children, this);
                map.setCenter({lat: foodLocations[index].lat, lng: foodLocations[index].lng});
            });
            foodList.appendChild(listItem);
        }
    }
}

// Function to clear all markers from the map
function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}
