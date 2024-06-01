// main.js
// Import necessary modules
import database from './database.js';
import api from './api.js';

// Define global variables
let currentDevice = null;

// Function to render device list
function renderDeviceList(devices) {
    const deviceList = document.querySelector('.device-list');
    deviceList.innerHTML = '';

    devices.forEach(device => {
        const deviceCard = document.createElement('div');
        deviceCard.classList.add('device-card');
        deviceCard.innerHTML = `
            <img src="${device.image}" alt="${device.name}">
            <h3>${device.name}</h3>
            <p>${device.specs}</p>
            <p>Intended Price: $${device.intendedPrice}</p>
        `;
        deviceCard.addEventListener('click', () => {
            currentDevice = device;
            renderDeviceDetails(device);
        });

        deviceList.appendChild(deviceCard);
    });
}

// Function to render device details
function renderDeviceDetails(device) {
    const deviceDetails = document.querySelector('.device-details');
    deviceDetails.innerHTML = '';

    const deviceCard = document.createElement('div');
    deviceCard.classList.add('device-card');
    deviceCard.innerHTML = `
        <img src="${device.image}" alt="${device.name}">
        <h3>${device.name}</h3>
        <p>${device.specs}</p>
        <p>Purchase Date: ${device.purchaseDate}</p>
        <p>Purchase Price: $${device.purchasePrice}</p>
        <button class="buy-button">Buy</button>
    `;
    deviceCard.querySelector('.buy-button').addEventListener('click', () => {
        buyDevice(device);
    });

    deviceDetails.appendChild(deviceCard);
}

// Function to handle device purchase
function buyDevice(device) {
    api.buyDevice(device.id)
        .then(response => {
            alert(response);
        })
        .catch(error => {
            displayErrorMessage(error);
        });
}

// Function to display error message
function displayErrorMessage(message) {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.textContent = message;
}

// Function to initialize the application
function initializeApp() {
    const devices = database.getDevices();
    renderDeviceList(devices);
}

// Initialize the application
initializeApp();