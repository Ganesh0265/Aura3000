import React from "react";

export const Hero = () => {
  return (
    <>
      {/* Main section container with a subtle gradient background */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden min-h-screen flex items-center">
        {/* Subtle Abstract Background Shape - adds visual depth without being distracting */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 160C72 133 216 80 360 93.3C504 107 648 187 792 186.7C936 187 1080 107 1224 80C1368 53 1440 107 1440 107V320H0V160Z"
              fill="#FDBA74"
            />{" "}
            {/* Using orange-300 equivalent */}
          </svg>
        </div>

        {/* Content wrapper for responsive layout and centering */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-around gap-12 max-w-6xl mx-auto px-6">
          {/* Left: Text Content Section */}
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-xl font-medium text-gray-500 mb-3 animate-fade-in font-inter">
              Your Smart Wardrobe
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4 animate-slide-in-left font-manrope">
              Organize Your <span className="text-orange-500">Clothes</span>{" "}
              Effortlessly
            </h1>
            <p className="text-lg text-gray-600 mb-6 animate-fade-in delay-100 font-inter">
              The ultimate platform to track, manage, and style your clothing
              collection from anywhere. Simplify your wardrobe and elevate your
              style.
            </p>
            {/* Call to action button with enhanced styling and subtle bounce animation */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-subtle font-inter">
              Discover More
            </button>
          </div>

          {/* Right: Asymmetrical Clothing Display Grid */}
          <div className="relative grid grid-cols-2 gap-4 md:gap-6 animate-fade-in-up">
            {/* Individual image elements with varying sizes and positions for visual interest */}
            <img
              src="https://placehold.co/400x400/FFDDC1/FF8C00?text=T-Shirt" // New placeholder for imagea
              alt="Stylish T-shirt"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300 transform rotate-[-3deg]"
              style={{ gridRow: "1", gridColumn: "1" }}
            />
            <img
              src="https://placehold.co/480x480/FFEDCC/FFA500?text=Dress" // New placeholder for imageb
              alt="Elegant Dress"
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300 transform rotate-[2deg]"
              style={{ gridRow: "1", gridColumn: "2", marginTop: "1rem" }}
            />
            <img
              src="https://placehold.co/560x560/FFE4B5/FFD700?text=Jacket" // New placeholder for imagec
              alt="Classic Jacket"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl shadow-xl hover:scale-105 transition duration-300 transform rotate-[-1deg]"
              style={{ gridRow: "2", gridColumn: "1" }}
            />
            <img
              src="https://placehold.co/400x400/FFF8DC/DAA520?text=Jeans" // New placeholder for a fourth image
              alt="Folded Clothes"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300 transform rotate-[4deg]"
              style={{ gridRow: "2", gridColumn: "2", marginTop: "2rem" }}
            />
            {/* Subtle overlapping effect for depth */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-lg shadow-2xl opacity-10 hover:opacity-15 transition duration-500 bg-gray-200 z-[-1]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

// Main App component to encapsulate the Hero section for direct rendering
export default function App() {
  return <Hero />;
}
