import React from "react";

const Topbar = () => (
  <header className="w-full bg-white shadow h-16 flex justify-between items-center px-6 fixed left-64 top-0 right-0 z-10">
    <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
    <div className="flex space-x-4">
      <button className="p-2 rounded-full bg-orange-500 text-white">N</button>
      <button className="p-2 rounded-full bg-gray-200">U</button>
    </div>
  </header>
);

export default Topbar;
