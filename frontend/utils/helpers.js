// Helper function to get the current date and time
function getCurrentDateTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Helper function to format a number with commas
function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Helper function to calculate the average of an array of numbers
function calculateAverage(numbers) {
  const sum = numbers.reduce((total, number) => total + number, 0);
  return sum / numbers.length;
}

// Helper function to check if a string is a palindrome
function isPalindrome(string) {
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Helper function to convert a string to title case
function convertToTitleCase(string) {
  return string.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}

// Helper function to get the factorial of a number
function getFactorial(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

// Helper function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Helper function to generate a random number between a minimum and maximum value
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Helper function to get the current location of the user
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

// Helper function to get the weather information for a given location
function getWeatherInformation(location) {
  return new Promise((resolve, reject) => {
    // Make an API call to get the weather information
    // Replace the API_KEY with your actual API key
    const API_KEY = "YOUR_API_KEY";
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;
        resolve({ temperature, condition });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Export the helper functions
export {
  getCurrentDateTime,
  formatNumberWithCommas,
  calculateAverage,
  isPalindrome,
  capitalizeFirstLetter,
  convertToTitleCase,
  getFactorial,
  isPrime,
  generateRandomNumber,
  shuffleArray,
  getCurrentLocation,
  getWeatherInformation,
};
