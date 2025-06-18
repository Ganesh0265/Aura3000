import React from "react";

// WardrobeItemCard component displays a single clothing item with its details.
const WardrobeItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {item.name}
        </h3>
        <div className="flex flex-wrap gap-1 mb-2">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-3">{item.category}</p>
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200 text-sm font-medium">
          Add To Outfit
        </button>
      </div>
    </div>
  );
};

export default WardrobeItemCard;
