// components/Navbar.jsx
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="text-xl font-bold">LOGO</div>
      <div className="space-x-4">
        <button className="text-sm text-gray-700">Sign in</button>
        <button className="bg-[#5e2c0d] text-white text-sm px-4 py-2 rounded">
          Sign up
        </button>
      </div>
    </nav>
  );
};
