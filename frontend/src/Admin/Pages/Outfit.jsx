import React from "react";
import AdminSidebar from "../adminComponents/AdminSidebar";
import WardrobeHeader from "../adminComponents/WardrobeHeader";
import OutfitCard from "../adminComponents/OutfitCard";

const Outfit = () => {
  const outfits = [
    {
      id: 1,
      name: "Business Casual Pro",
      tags: ["Business", "Formal", "Work"],
      description: "Perfect for office meetings or smart-casual events.",
      itemImages: [
        "https://placehold.co/300x400/DDC1FF/8C00FF?text=White+Shirt",
        "https://placehold.co/300x400/C1FFDD/00FF8C?text=Grey+Trousers",
        "https://placehold.co/300x400/FFFEDC/DAA520?text=Navy+Blazer",
      ],
    },
    {
      id: 2,
      name: "Weekend Explorer",
      tags: ["Casual", "Comfort", "Outdoor"],
      description: "Ideal for a relaxed weekend stroll or a casual outing.",
      itemImages: [
        "https://placehold.co/300x400/FFDDC1/FF8C00?text=Denim+Jacket",
        "https://placehold.co/300x400/E1F5FE/2196F3?text=Graphic+Tee",
        "https://placehold.co/300x400/FFCCCC/FF0000?text=Khaki+Shorts",
      ],
    },
    {
      id: 3,
      name: "Evening Elegance",
      tags: ["Party", "Chic", "Evening"],
      description: "A sophisticated choice for dinners and special occasions.",
      itemImages: [
        "https://placehold.co/300x400/FFCCEE/AA00FF?text=Black+Dress",
        "https://placehold.co/300x400/F5F5DC/8B4513?text=Heels",
        "https://placehold.co/300x400/FFF0F5/C71585?text=Clutch",
      ],
    },
    {
      id: 4,
      name: "Cozy Home Vibes",
      tags: ["Lounge", "Relax", "Home"],
      description: "Comfortable and stylish for a relaxed day at home.",
      itemImages: [
        "https://placehold.co/300x400/DDA0DD/800080?text=Sweater",
        "https://placehold.co/300x400/ADD8E6/6A5ACD?text=Joggers",
      ],
    },
    {
      id: 5,
      name: "Gym Ready",
      tags: ["Workout", "Performance"],
      description: "All you need for a productive session at the gym.",
      itemImages: [
        "https://placehold.co/300x400/FFB6C1/FF1493?text=Sports+Bra",
        "https://placehold.co/300x400/D8BFD8/9932CC?text=Leggings",
        "https://placehold.co/300x400/BA55D3/4B0082?text=Trainers",
      ],
    },
    {
      id: 6,
      name: "Summer Breeze",
      tags: ["Summer", "Light", "Vacation"],
      description: "Light and airy for hot summer days.",
      itemImages: [
        "https://placehold.co/300x400/F0E68C/B8860B?text=Linen+Shirt",
        "https://placehold.co/300x400/FFE4E1/8B0000?text=Linen+Shorts",
        "https://placehold.co/300x400/FAFAD2/808000?text=Sandals",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-inter text-gray-800">
      <AdminSidebar />

      <main className="flex-1 p-6 md:p-8 lg:p-10 ml-64 ">
        <div className="bg-white p-6  mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-900 font-manrope whitespace-nowrap">
            Outfits
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

            <a href="/addoutfit">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {outfits.map((outfit) => (
            <OutfitCard key={outfit.id} outfit={outfit} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Outfit;
