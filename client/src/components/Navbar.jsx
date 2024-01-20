import React from 'react';
import '../index.css';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <a href="/" className="font-bold text-xl">RouteRevive</a>
      <ul className="hidden md:flex space-x-4">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">Features</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>
      <button className="md:hidden rounded-lg bg-gray-700 p-2 hover:bg-gray-600">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </nav>
  );
}

export default Navbar;
