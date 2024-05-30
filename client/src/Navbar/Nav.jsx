import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <NavLink
            to="/"
            className="text-2xl cursor-pointer flex items-center font-[Poppins] text-white font-semibold"
          >
            <span className="text-3xl text-white mr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            JOB SEEK
          </NavLink>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className="text-white hover:text-gray-200 uppercase">
            Home
          </NavLink>
          <NavLink to="/find-jobs" className="text-white hover:text-gray-200 uppercase">
            Find Jobs
          </NavLink>
          <NavLink to="/candidate" className="text-white hover:text-gray-200 uppercase">
            Candidate
          </NavLink>
          <NavLink to="/employee" className="text-white hover:text-gray-200 uppercase">
            Employee
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-200 uppercase">
            Contact
          </NavLink>
          <button className="bg-white text-blue-600 px-6 py-2 rounded uppercase">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Items */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300`}>
        <NavLink to="/" className="block text-white px-4 py-2 uppercase">
          Home
        </NavLink>
        <NavLink to="/find-jobs" className="block text-white px-4 py-2 uppercase">
          Find Jobs
        </NavLink>
        <NavLink to="/candidate" className="block text-white px-4 py-2 uppercase">
          Candidate
        </NavLink>
        <NavLink to="/employee" className="block text-white px-4 py-2 uppercase">
          Employee
        </NavLink>
        <NavLink to="/contact" className="block text-white px-4 py-2 uppercase">
          Contact
        </NavLink>
        <button className="block bg-white text-blue-600 px-6 py-2 rounded mx-4 my-2 uppercase">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
