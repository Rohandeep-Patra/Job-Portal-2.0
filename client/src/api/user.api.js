import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5050/api/users', // Adjust to match your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (formData) => {
  try {
    const response = await apiClient.post('/register', formData);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      throw new Error(error.response.data.message || 'Something went wrong');
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('No response from server');
    } else {
      // Something else caused the error
      throw new Error(error.message);
    }
  }
};


export const loginUser = async (formData) => {
  try {
    const response = await apiClient.post('/login', formData);
    return response.data;
    
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};