import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 md:px-12 bg-white shadow-sm font-inter">
        <a href="/">
          <div className="text-2xl font-extrabold text-gray-800 font-manrope mb-4 sm:mb-0">
            Wardrobe<span className="text-orange-500">Pro</span>
          </div>
        </a>

        {/* Sign In/Sign Up Buttons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="/Login">
            <button className="text-gray-700 hover:text-orange-500 text-sm font-semibold px-4 py-2 rounded-full transition duration-300">
              Sign in
            </button>
          </a>
          <a href="/Signup">
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Sign up
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};

// Main App component to encapsulate the Navbar for direct rendering
export default function App() {
  return <Navbar />;
}
