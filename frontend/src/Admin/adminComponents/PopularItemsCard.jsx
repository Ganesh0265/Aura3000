import React from "react";

const PopularOutfitsCard = () => {
  const popularOutfits = [
    { name: "Executive Power Suit", tags: ["Business", "Formal"] },
    { name: "Relaxed Weekend Look", tags: ["Casual", "Comfort"] },
    { name: "Elegant Evening Wear", tags: ["Party", "Chic"] },
    { name: "Elegant Evening Wear", tags: ["Party", "Chic"] },
    { name: "Elegant Evening Wear", tags: ["Party", "Chic"] },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in-slide-up transform hover:translate-y-[-4px] transition duration-300">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 flex justify-between items-center">
        Popular Outfits
        <button className="text-orange-500 hover:underline text-sm">
          View All
        </button>
      </h3>
      <div className="space-y-3">
        {popularOutfits.map((outfit, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition duration-200 cursor-pointer"
          >
            <span className="font-medium text-gray-800 text-sm">
              {outfit.name}
            </span>
            <div className="flex flex-wrap justify-end gap-1.5">
              {outfit.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2.5 py-0.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularOutfitsCard;
