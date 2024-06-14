// Function to display travel options
function displayTravelOptions(options) {
    // Clear existing options
    clearTravelOptions();

    // Loop through options and create HTML elements
    options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('travel-option');
        optionElement.innerHTML = `
            <h2>${option.title}</h2>
            <p>${option.description}</p>
            <button onclick="bookOption(${option.id})">Book Now</button>
        `;
        document.querySelector('#travel-options').appendChild(optionElement);
    });
}

// Function to clear travel options
function clearTravelOptions() {
    const travelOptionsElement = document.querySelector('#travel-options');
    while (travelOptionsElement.firstChild) {
        travelOptionsElement.removeChild(travelOptionsElement.firstChild);
    }
}

// Function to book a travel option
function bookOption(optionId) {
    // Logic to book the option
}

// Function to display promotions
function displayPromotions(promotions) {
    // Clear existing promotions
    clearPromotions();

    // Loop through promotions and create HTML elements
    promotions.forEach(promotion => {
        const promotionElement = document.createElement('div');
        promotionElement.classList.add('promotion');
        promotionElement.innerHTML = `
            <h2>${promotion.title}</h2>
            <p>${promotion.description}</p>
            <button onclick="claimPromotion(${promotion.id})">Claim Now</button>
        `;
        document.querySelector('#promotions').appendChild(promotionElement);
    });
}

// Function to clear promotions
function clearPromotions() {
    const promotionsElement = document.querySelector('#promotions');
    while (promotionsElement.firstChild) {
        promotionsElement.removeChild(promotionsElement.firstChild);
    }
}

// Function to claim a promotion
function claimPromotion(promotionId) {
    // Logic to claim the promotion
}

// Function to fetch travel options and promotions from the backend API
function fetchData() {
    // Logic to fetch data from the backend API
}

// Call the fetchData function to initialize the page
fetchData();
