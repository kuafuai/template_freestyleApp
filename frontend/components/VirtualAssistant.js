// Import necessary modules
const axios = require('axios');
const moment = require('moment');

// Function to get current date and time
function getCurrentDateTime() {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}

// Function to get weather information
async function getWeather(city) {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
    const { temp_c, humidity, wind_kph } = response.data.current;
    return `The current temperature in ${city} is ${temp_c}°C with a humidity of ${humidity}% and a wind speed of ${wind_kph} kph.`;
  } catch (error) {
    return 'Sorry, I could not retrieve the weather information.';
  }
}

// Function to get currency exchange rate
async function getExchangeRate(fromCurrency, toCurrency) {
  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const exchangeRate = response.data.rates[toCurrency];
    return `1 ${fromCurrency} is equal to ${exchangeRate} ${toCurrency}.`;
  } catch (error) {
    return 'Sorry, I could not retrieve the exchange rate information.';
  }
}

// Function to get travel recommendations
function getTravelRecommendations() {
  const recommendations = [
    'Visit the famous landmarks in the city.',
    'Try the local cuisine and street food.',
    'Explore the museums and art galleries.',
    'Take a guided tour to learn about the history and culture.',
    'Relax and enjoy the beautiful beaches.',
    'Go hiking or trekking in the nearby mountains.',
    'Experience the vibrant nightlife of the city.',
    'Shop for souvenirs and local handicrafts.',
    'Attend local festivals and events.',
    'Visit the nearby national parks and wildlife sanctuaries.'
  ];
  const randomIndex = Math.floor(Math.random() * recommendations.length);
  return recommendations[randomIndex];
}

// Function to handle user queries
async function handleQuery(query) {
  const lowerCaseQuery = query.toLowerCase();
  let response = '';

  if (lowerCaseQuery.includes('weather')) {
    const city = query.substring(query.indexOf('in') + 3);
    response = await getWeather(city);
  } else if (lowerCaseQuery.includes('exchange rate')) {
    const fromCurrency = query.substring(query.indexOf('from') + 5, query.indexOf('to') - 1);
    const toCurrency = query.substring(query.indexOf('to') + 3);
    response = await getExchangeRate(fromCurrency, toCurrency);
  } else if (lowerCaseQuery.includes('recommendations')) {
    response = getTravelRecommendations();
  } else {
    response = 'Sorry, I cannot answer that question.';
  }

  return response;
}

// Function to handle user input
async function handleUserInput(input) {
  const query = input.trim();
  const response = await handleQuery(query);
  const dateTime = getCurrentDateTime();
  return {
    query,
    response,
    dateTime
  };
}

// Export the handleUserInput function
module.exports = {
  handleUserInput
};
