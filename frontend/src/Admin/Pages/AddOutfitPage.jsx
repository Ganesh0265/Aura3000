import React, { useState, useEffect } from "react";
// This import path assumes:
// 1. AddOutfitPage.jsx is located in 'src/Admin/' (or any folder directly under 'src').
// 2. AdminSidebar.jsx is located in 'src/adminComponents/AdminSidebar.jsx'.
// The '../' goes up one level from 'src/Admin/' to 'src/', then 'adminComponents/' is entered.
import AdminSidebar from "../adminComponents/AdminSidebar";

const AddOutfitPage = () => {
  // State to manage form inputs for the new outfit
  const [outfitName, setOutfitName] = useState("");
  const [outfitDescription, setOutfitDescription] = useState("");
  const [outfitTags, setOutfitTags] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  // State for available wardrobe items and selected items
  const [availableWardrobeItems, setAvailableWardrobeItems] = useState([]);
  const [selectedWardrobeItems, setSelectedWardrobeItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  // Simulate fetching wardrobe items on component mount
  useEffect(() => {
    // In a real application, you would make an API call here:
    // fetch('/api/wardrobe-items')
    //   .then(response => response.json())
    //   .then(data => setAvailableWardrobeItems(data))
    //   .catch(error => console.error('Error fetching wardrobe items:', error));

    // For now, use dummy data
    const dummyItems = [
      {
        id: "item1",
        name: "Blue Denim Jeans",
        image: "https://placehold.co/100x100/A7D9FC/2196F3?text=Jeans",
        category: "Bottoms",
      },
      {
        id: "item2",
        name: "White Cotton T-Shirt",
        image: "https://placehold.co/100x100/F0F0F0/888888?text=T-Shirt",
        category: "Tops",
      },
      {
        id: "item3",
        name: "Navy Blazer",
        image: "https://placehold.co/100x100/B0C4DE/4682B4?text=Blazer",
        category: "Outerwear",
      },
      {
        id: "item4",
        name: "Striped Button-Up",
        image: "https://placehold.co/100x100/E0FFFF/6495ED?text=Shirt",
        category: "Tops",
      },
      {
        id: "item5",
        name: "Brown Leather Boots",
        image: "https://placehold.co/100x100/D2B48C/8B4513?text=Boots",
        category: "Footwear",
      },
      {
        id: "item6",
        name: "Black Scarf",
        image: "https://placehold.co/100x100/333333/FFFFFF?text=Scarf",
        category: "Accessories",
      },
      {
        id: "item7",
        name: "Formal Dress",
        image: "https://placehold.co/100x100/F8BBBB/F44336?text=Dress",
        category: "Dresses",
      },
      {
        id: "item8",
        name: "Sneakers",
        image: "https://placehold.co/100x100/ADD8E6/6A5ACD?text=Sneakers",
        category: "Footwear",
      },
      {
        id: "item9",
        name: "Sun Hat",
        image: "https://placehold.co/100x100/FFDDC1/FF8C00?text=Hat",
        category: "Accessories",
      },
      {
        id: "item10",
        name: "Leather Bag",
        image: "https://placehold.co/100x100/D8BFD8/9932CC?text=Bag",
        category: "Accessories",
      },
    ];
    setAvailableWardrobeItems(dummyItems);
  }, []);

  // Handle item selection/deselection
  const handleItemSelect = (itemId) => {
    setSelectedWardrobeItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        // Item is already selected, remove it
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        // Item is not selected, add it
        return [...prevSelectedItems, itemId];
      }
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!outfitName || !outfitDescription) {
      setMessage("Please fill in Outfit Name and Description.");
      setMessageType("error");
      return;
    }
    if (selectedWardrobeItems.length === 0) {
      setMessage("Please select at least one wardrobe item for the outfit.");
      setMessageType("error");
      return;
    }

    // In a real application, you would send this data to a backend API
    const newOutfit = {
      name: outfitName,
      description: outfitDescription,
      tags: outfitTags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
      items: selectedWardrobeItems, // Array of selected item IDs
      // You might add a unique ID, user ID, and timestamp here in a real app
    };

    console.log("New outfit to add:", newOutfit);
    setMessage("Outfit added successfully! (Data logged to console)");
    setMessageType("success");

    // Reset form fields
    setOutfitName("");
    setOutfitDescription("");
    setOutfitTags("");
    setSelectedWardrobeItems([]); // Reset selected items
    setIsDropdownOpen(false); // Close dropdown after submission

    // Clear message after a few seconds
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8 ml-64 lg:p-10 overflow-y-auto">
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-3xl font-bold text-gray-900 font-manrope mb-6">
            Create New Outfit
          </h2>

          {message && (
            <div
              className={`p-3 mb-4 rounded-lg text-sm ${
                messageType === "success"
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-red-100 text-red-700 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Outfit Name */}
            <div>
              <label
                htmlFor="outfitName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Outfit Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="outfitName"
                value={outfitName}
                onChange={(e) => setOutfitName(e.target.value)}
                placeholder="e.g., Summer Casual Look"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-200 text-gray-800"
                required
              />
            </div>

            {/* Outfit Description */}
            <div>
              <label
                htmlFor="outfitDescription"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="outfitDescription"
                value={outfitDescription}
                onChange={(e) => setOutfitDescription(e.target.value)}
                placeholder="A light and airy outfit perfect for warm weather."
                rows="3"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-200 resize-y text-gray-800"
                required
              ></textarea>
            </div>

            {/* Outfit Tags (comma-separated) */}
            <div>
              <label
                htmlFor="outfitTags"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="outfitTags"
                value={outfitTags}
                onChange={(e) => setOutfitTags(e.target.value)}
                placeholder="e.g., summer, casual, evening"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-200 text-gray-800"
              />
              <p className="mt-1 text-xs text-gray-500">
                Separate multiple tags with commas (e.g., elegant, party,
                business).
              </p>
            </div>

            {/* Wardrobe Item Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Wardrobe Items <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                {/* Display selected items as chips/small images */}
                {selectedWardrobeItems.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2 p-2 border border-gray-200 rounded-lg bg-white min-h-[40px] items-center">
                    {selectedWardrobeItems.map((itemId) => {
                      const item = availableWardrobeItems.find(
                        (i) => i.id === itemId
                      );
                      return item ? (
                        <div
                          key={item.id}
                          className="flex items-center bg-purple-100 text-purple-800 text-sm font-medium px-2 py-1 rounded-full border border-purple-300"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-5 h-5 object-cover rounded-full mr-1"
                          />
                          {item.name}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleItemSelect(item.id);
                            }}
                            className="ml-1 text-purple-600 hover:text-purple-800 focus:outline-none"
                            aria-label={`Remove ${item.name}`}
                          >
                            &times;
                          </button>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}

                {/* Dropdown Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2.5 text-left text-gray-700 flex items-center justify-between hover:border-purple-500 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition duration-200"
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  {selectedWardrobeItems.length > 0
                    ? `${selectedWardrobeItems.length} item(s) selected`
                    : "Click to select items from your wardrobe"}
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {/* Dropdown Content */}
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {availableWardrobeItems.length > 0 ? (
                      availableWardrobeItems.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-150 ${
                            selectedWardrobeItems.includes(item.id)
                              ? "bg-purple-50"
                              : ""
                          }`}
                          onClick={() => handleItemSelect(item.id)}
                        >
                          <input
                            type="checkbox"
                            checked={selectedWardrobeItems.includes(item.id)}
                            onChange={() => handleItemSelect(item.id)} // For accessibility, also trigger on checkbox change
                            className="form-checkbox h-4 w-4 text-purple-600 mr-3 rounded"
                          />
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded-md mr-3"
                          />
                          <span className="text-sm font-medium text-gray-800">
                            {item.name}
                          </span>
                          <span className="ml-auto text-xs text-gray-500">
                            ({item.category})
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="p-4 text-gray-500 text-sm text-center">
                        No wardrobe items available.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Create Outfit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddOutfitPage;
