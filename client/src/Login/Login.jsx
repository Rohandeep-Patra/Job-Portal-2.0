import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../api/user.api.js";

const Login = ({ toggleLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    userType: "candidate", // Default to candidate
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!formData.username.trim()) {
      setError("Please enter a username or email.");
      return;
    }

    if (!formData.password.trim()) {
      setError("Please enter a password.");
      return;
    }

    try {
      await loginUser(formData);
      navigate(
        formData.userType === "candidate" ? "/candidate-home" : "/employee-home"
      );
    } catch (err) {
      setError(err.message || "Invalid username or password.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Login to Job Seek!</h2>
          <button onClick={toggleLogin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-10 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="px-3 py-3 bg-slate-200/60 rounded-md focus:outline-none w-full"
              placeholder="Enter username or email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="px-3 py-3 mt-0 bg-slate-200/60 rounded-md focus:outline-none w-full"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="candidate"
                name="userType"
                value="candidate"
                checked={formData.userType === "candidate"}
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
                checked={formData.userType === "employee"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="employee">Employee</label>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <div className="mb-2">
            <button
              type="submit"
              className="bg-blue-500 text-white mt-5 w-full h-10 rounded-md"
            >
              Login
            </button>
          </div>
          <p className="text-xs text-gray-500">
            Don't have an account?{" "}
            <NavLink to="/register" className="text-blue-500 hover:underline">
              Register here
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
