import React from 'react';
import { NavLink } from 'react-router-dom';


const NavCandidate = () => {
  return (
    <>
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-2xl font-bold">Your Brand</NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" exact className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
              <NavLink to="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</NavLink>
              <NavLink to="/find-jobs" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Find Jobs</NavLink>
              <NavLink to="/contact-us" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <img src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Profile" className="h-12 w-12 rounded-full" />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" exact className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
          <NavLink to="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</NavLink>
          <NavLink to="/find-jobs" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Find Jobs</NavLink>
          <NavLink to="/contact-us" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</NavLink>
          <div className="flex justify-end">
            <img src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Profile" className="h-12 w-12 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavCandidate;

