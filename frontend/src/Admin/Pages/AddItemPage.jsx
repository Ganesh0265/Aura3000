import React, { useState } from "react";
import AdminSidebar from "../adminComponents/AdminSidebar";

const AddItemPage = () => {
  // State to manage form inputs
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemTags, setItemTags] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!itemName || !itemCategory || !itemImage) {
      setMessage(
        "Please fill in all required fields: Item Name, Category, and Image URL."
      );
      setMessageType("error");
      return;
    }

    // In a real application, you would send this data to a backend API
    // For now, we'll just log it and show a success message.
    const newItem = {
      name: itemName,
      category: itemCategory,
      image: itemImage,
      tags: itemTags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
      // You might add a unique ID, user ID, and timestamp here in a real app
    };

    console.log("New item to add:", newItem);
    setMessage("Item added successfully! (Data logged to console)");
    setMessageType("success");

    // Reset form fields
    setItemName("");
    setItemCategory("");
    setItemImage("");
    setItemTags("");

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
      <main className="flex-1 p-6 md:p-8 lg:p-10 ml-64 overflow-y-auto">
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-3xl font-bold text-gray-900 font-manrope mb-6">
            Add New Wardrobe Item
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
            {/* Item Name */}
            <div>
              <label
                htmlFor="itemName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Item Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="e.g., Blue Denim Jeans"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-gray-800"
                required
              />
            </div>

            {/* Item Category */}
            <div>
              <label
                htmlFor="itemCategory"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="itemCategory"
                value={itemCategory}
                onChange={(e) => setItemCategory(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-200 bg-white text-gray-800"
                required
              >
                <option value="">Select a category</option>
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Outerwear">Outerwear</option>
                <option value="Dresses">Dresses</option>
                <option value="Footwear">Footwear</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            {/* Item Image URL */}
            <div>
              <label
                htmlFor="itemImage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="itemImage"
                value={itemImage}
                onChange={(e) => setItemImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-gray-800"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Provide a direct link to the item's image.
              </p>
            </div>

            {/* Item Tags (comma-separated) */}
            <div>
              <label
                htmlFor="itemTags"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="itemTags"
                value={itemTags}
                onChange={(e) => setItemTags(e.target.value)}
                placeholder="e.g., casual, blue, cotton"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-gray-800"
              />
              <p className="mt-1 text-xs text-gray-500">
                Separate multiple tags with commas (e.g., summer, light,
                everyday).
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Add Item to Wardrobe
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddItemPage;
