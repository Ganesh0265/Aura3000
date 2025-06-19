import React from "react";

const AdminSidebar = () => {
  return (
    <>
      <aside className="w-64 bg-white text-gray-800 flex flex-col py-8 px-6 shadow-xl z-20 transition-all duration-300 ease-in-out border-r border-gray-100 fixed h-screen">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold font-manrope text-gray-800">
            Wardrobe<span className="text-orange-500">Pro</span>
          </h1>
        </div>

        <nav className="flex flex-col space-y-3 flex-grow">
          {/* Dashboard Link - Active */}
          <a
            href="/Dashboard"
            className="flex items-center p-4 rounded-xl text-orange-600 bg-orange-50 shadow-md hover:bg-orange-100 transition duration-300 transform hover:scale-105 animate-pulse-effect"
          >
            <span className="mr-4 text-xl">🏠</span>
            <span className="font-semibold text-lg">Dashboard</span>
          </a>
          {/* My Wardrobe Link */}
          <a
            href="/wardrobe"
            className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition duration-300 transform hover:scale-105"
          >
            <span className="mr-4 text-xl">👕</span>
            <span className="font-medium text-lg">My Wardrobe</span>
          </a>
          {/* Outfits Link */}
          <a
            href="/outfit"
            className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition duration-300 transform hover:scale-105"
          >
            <span className="mr-4 text-xl">👚</span>
            <span className="font-medium text-lg">Outfits</span>
          </a>
          {/* AI Recommendation Link */}
          <a
            href="#"
            className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-orange-600 transition duration-300 transform hover:scale-105"
          >
            <span className="mr-4 text-xl">✨</span>
            <span className="font-medium text-lg">AI Suggestion</span>
          </a>
        </nav>

        <div className="mt-auto pt-8 border-t border-gray-200 w-full flex flex-col space-y-2">
          <button className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-orange-600 w-full text-left transition duration-300 transform hover:scale-105">
            <span className="mr-4 text-xl">⚙️</span>
            <span className="font-medium text-lg">Settings</span>
          </button>
          <button className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-orange-600 w-full text-left transition duration-300 transform hover:scale-105">
            <span className="mr-4 text-xl">👤</span>
            <span className="font-medium text-lg">Profile</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
