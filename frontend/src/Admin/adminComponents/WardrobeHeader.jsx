import React from "react";

// WardrobeHeader component for the top section of the My Wardrobe page.
const WardrobeHeader = () => {
  return (
    <div className="bg-white p-6  mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <h2 className="text-2xl font-bold text-gray-900 font-manrope whitespace-nowrap">
        My Wardrobe
      </h2>

      <div className="flex flex-grow items-center gap-4 w-full sm:w-auto">
        {/* Search Bar */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-gray-700"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        {/* All Categories Dropdown */}
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-200 bg-white text-gray-700 whitespace-nowrap">
          <option>All categories</option>
          <option>Tops</option>
          <option>Bottoms</option>
          <option>Outerwear</option>
          <option>Footwear</option>
          <option>Accessories</option>
        </select>

        <a href="/additem">
          <button className="bg-orange-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 transition duration-200 flex items-center gap-2 whitespace-nowrap">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Add Item
          </button>
        </a>
      </div>
    </div>
  );
};

export default WardrobeHeader;
