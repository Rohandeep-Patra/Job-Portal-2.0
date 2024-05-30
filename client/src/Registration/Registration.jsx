import React, { useState } from 'react';
import { registerUser } from '../api/user.api.js';
import { NavLink } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    userType: 'candidate', // Default to candidate
  });

  const [errors, setErrors] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // If the changed input is userType, update the state directly
    if (name === 'userType') {
      setFormData({
        ...formData,
        userType: value,
      });
    } else {
      // Otherwise, update the state for other form fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  
    // Clear error and API error messages
    setErrors({
      ...errors,
      [name]: '',
    });
    setApiError('');
  };
  

  const validateForm = () => {
    let errors = {};
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const data = await registerUser(formData);
      // Handle successful registration (e.g., redirect to login page or display success message)
      console.log('Registration successful:', data);
    } catch (error) {
      setApiError(error.message);
      console.error('Error during registration:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        {apiError && <p className="text-red-500 mb-4">{apiError}</p>}
        {/* Other UI elements */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Other form fields */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-indigo-500 ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter username"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-indigo-500 ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-indigo-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-indigo-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          {/* Register as candidate or employee */}
          <div>
            <label htmlFor="candidate" className="block text-sm font-medium text-gray-700">
              Register as:
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="candidate"
                name="userType"
                value="candidate"
                checked={formData.userType === 'candidate'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="candidate" className="mr-4">
                Candidate
              </label>
              <input
                type="radio"
                id="employee"
                name="userType"
                value="employee"
                checked={formData.userType === 'employee'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="employee">Employee</label>
            </div>
          </div>
          {/* Submit button */}
          <div className='mt-4'>
            <NavLink to='/' className='mb-2'>Already have an account? <span className="text-indigo-500">Login</span></NavLink>
            <button
              type="submit"
              className={`w-full mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register