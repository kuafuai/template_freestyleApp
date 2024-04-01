// api.js

// Import necessary modules or libraries
import axios from 'axios';

// Function to fetch news data from the backend API
export const fetchNews = async () => {
  try {
    const response = await axios.get('/api/news');
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// Function to fetch activities data from the backend API
export const fetchActivities = async () => {
  try {
    const response = await axios.get('/api/activities');
    return response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};

// Function to fetch messages data from the backend API
export const fetchMessages = async () => {
  try {
    const response = await axios.get('/api/messages');
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};
