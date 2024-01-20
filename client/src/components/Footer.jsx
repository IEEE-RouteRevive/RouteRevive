import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <a href="#" className="hover:text-gray-300 mr-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </a>
        <a href="#" className="hover:text-gray-300 mr-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </a>
        <a href="#" className="hover:text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
        </a>
      </div>
      <p className="text-sm">&copy; 2024 RouteRevive</p>
    </footer>
  );
}
