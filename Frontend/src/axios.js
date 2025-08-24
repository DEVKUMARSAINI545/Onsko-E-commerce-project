import axios from 'axios';

// Create an axios instance with default configurations
const axiosInstance = axios.create({
  
  baseURL: import.env.VITE_SERVER_URL, // The base URL of your backend
  withCredentials: true,  // Automatically send credentials (cookies) with every request
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
