// components/Hero.jsx
import React from "react";

export const Hero = () => {
  return (
    <section className="relative text-center px-4 py-20 bg-[url('/pattern.png')] bg-repeat overflow-hidden">
      {/* Top-left shirt image */}
      <img
        src="/shirt-left.png"
        alt="shirt"
        className="absolute top-10 left-0 w-32 md:w-40 rotate-[-15deg] object-contain"
      />

      {/* Top-right jacket image */}
      <img
        src="/jacket-right.png"
        alt="jacket"
        className="absolute top-10 right-0 w-32 md:w-40 rotate-[15deg] object-contain"
      />

      {/* Bottom-center jacket image */}
      <img
        src="/jacket-bottom.png"
        alt="jacket"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:w-40 object-contain"
      />

      {/* Hero Content */}
      <div className="relative z-10">
        <h2 className="text-lg font-semibold">LOGO</h2>

        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          Organize Your <span className="text-[#8a441c]">Clothes</span>
        </h1>

        <h3 className="text-xl md:text-2xl font-semibold mt-4">
          All In One Place Easily
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Your Digital wardrobe, In your laptop
        </p>

        <button className="mt-6 px-6 py-3 rounded bg-[#8a441c] text-white hover:bg-[#6f2d0e]">
          Lets Organize
        </button>
      </div>
    </section>
  );
};
