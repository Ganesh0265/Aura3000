// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-white to-blue-100 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Smart Wardrobe <span className="text-pink-500">Fashion Manager</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-xl">
            Organize your outfits. Get AI-powered suggestions. Elevate your style effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-2xl hover:bg-pink-600 transition">
              Get Started
            </button>
            <button className="border border-pink-500 text-pink-500 px-6 py-3 rounded-2xl hover:bg-pink-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/fashion-illustration.svg" // Replace with your own image path
            alt="Fashion Manager Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
