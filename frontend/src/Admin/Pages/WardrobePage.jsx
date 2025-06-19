import React from "react";
import AdminSidebar from "../adminComponents/AdminSidebar"; // Adjust path if MyWardrobePage is not in src/Admin/
import WardrobeHeader from "../adminComponents/WardrobeHeader";
import WardrobeItemCard from "../adminComponents/WardrobeCard";

const MyWardrobePage = () => {
  // Placeholder data for wardrobe items, as seen in the image.
  // In a real app, this would come from an API call.
  const wardrobeItems = [
    {
      id: 1,
      name: "T-shirt Blue",
      image: "https://placehold.co/300x400/DDC1FF/8C00FF?text=T-shirt+Blue", // Placeholder image
      tags: ["Blue", "Casual"],
      category: "Tops",
    },
    {
      id: 2,
      name: "Long sleeve",
      image: "https://placehold.co/300x400/FFDDC1/FF8C00?text=Long+Sleeve", // Placeholder image
      tags: ["Red", "Casual"],
      category: "Tops",
    },
    {
      id: 3,
      name: "Brown Pant",
      image: "https://placehold.co/300x400/C1FFDD/00FF8C?text=Brown+Pant", // Placeholder image
      tags: ["Brown", "Formal"],
      category: "Bottoms",
    },
    {
      id: 4,
      name: "White Hoodie",
      image: "https://placehold.co/300x400/E1F5FE/2196F3?text=White+Hoodie", // Placeholder image
      tags: ["White", "Comfort"],
      category: "Outerwear",
    },
    {
      id: 5,
      name: "Black Jacket",
      image: "https://placehold.co/300x400/FFCCCC/FF0000?text=Black+Jacket", // Placeholder image
      tags: ["Black", "Warm"],
      category: "Outerwear",
    },
    {
      id: 6,
      name: "T-shirt Blue", // Duplicate for demonstration as in image
      image: "https://placehold.co/300x400/DDC1FF/8C00FF?text=T-shirt+Blue",
      tags: ["Blue", "Casual"],
      category: "Tops",
    },
    {
      id: 7,
      name: "Long sleeve", // Duplicate for demonstration as in image
      image: "https://placehold.co/300x400/FFDDC1/FF8C00?text=Long+Sleeve",
      tags: ["Red", "Casual"],
      category: "Tops",
    },
    {
      id: 8,
      name: "Brown Pant", // Duplicate for demonstration as in image
      image: "https://placehold.co/300x400/C1FFDD/00FF8C?text=Brown+Pant",
      tags: ["Brown", "Formal"],
      category: "Bottoms",
    },
    {
      id: 9,
      name: "White Hoodie", // Duplicate for demonstration as in image
      image: "https://placehold.co/300x400/E1F5FE/2196F3?text=White+Hoodie",
      tags: ["White", "Comfort"],
      category: "Outerwear",
    },
    {
      id: 10,
      name: "Black Jacket", // Duplicate for demonstration as in image
      image: "https://placehold.co/300x400/FFCCCC/FF0000?text=Black+Jacket",
      tags: ["Black", "Warm"],
      category: "Outerwear",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col ml-64">
        <WardrobeHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-8">
          {wardrobeItems.map((item) => (
            <WardrobeItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWardrobePage;
