import axios from 'axios';

// Create an axios instance with default configurations
const axiosInstance = axios.create({
  // baseURL: 'https://onsko-e-commerce-project.onrender.com/api/v1/onsko', // The base URL of your backend
  baseURL: 'http://localhost:3000/api/v1/onsko', // The base URL of your backend
  withCredentials: true,  // Automatically send credentials (cookies) with every request
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;