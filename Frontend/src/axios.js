import axios from 'axios';

// Create an axios instance with default configurations
const axiosInstance = axios.create({
  // baseURL: 'https://onsko-e-commerce-project.onrender.com/api/v1/onsko', // The base URL of your backend
  baseURL: import.env.VITE_SERVER_URL, // The base URL of your backend
  withCredentials: true,  // Automatically send credentials (cookies) with every request
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
