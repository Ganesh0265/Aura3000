import React from "react";

// OutfitCard component displays a single outfit composed of multiple items.
// It takes an 'outfit' object as a prop, which includes details like name,
// tags, and an array of image URLs for the items in the outfit.
const OutfitCard = ({ outfit }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      {/* Display up to 3 images of the items in the outfit for a quick visual */}
      <div className="grid grid-cols-3 gap-1 p-2 bg-gray-100 h-32">
        {outfit.itemImages.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Outfit item ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
        ))}
        {/* If there are more than 3 items, show a count overlay on the last image slot */}
        {outfit.itemImages.length > 3 && (
          <div className="relative w-full h-full flex items-center justify-center bg-gray-200 rounded-md">
            <img
              src={outfit.itemImages[2]} // Use the third image for the background of the count
              alt={`Outfit item count`}
              className="w-full h-full object-cover rounded-md opacity-50"
            />
            <span className="absolute text-xl font-bold text-gray-700">
              +{outfit.itemImages.length - 3}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {outfit.name}
        </h3>
        <div className="flex flex-wrap gap-1 mb-2">
          {outfit.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-3">{outfit.description}</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 text-sm font-medium">
          View Outfit
        </button>
      </div>
    </div>
  );
};

export default OutfitCard;
