import React from "react";
import GraphCard from "./GraphCard";
import PopularOutfitsCard from "./PopularItemsCard";

const Cards = () => (
  <section className="grid grid-cols-1 gap-6 mt-20 mx-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-[1.01] animate-fade-in-slide-up"
          style={{ animationDelay: `${i * 0.05}s` }} // Staggered animation
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Metric Card {i}
          </h3>

          <div className="mt-4 text-2xl font-bold text-orange-600 font-manrope">
            {i * 100 + 50}{" "}
            <span className="text-base text-gray-400">items</span>
          </div>
        </div>
      ))}
    </div>

    {/* Dedicated Cards for Graph and Popular Outfits (Bottom section) */}
    {/* This div arranges GraphCard (2/3 width) and PopularOutfitsCard (1/3 width) side-by-side on larger screens */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Graph Card component - takes 2/3 of the width on large screens */}
      <div className="lg:col-span-2">
        <GraphCard />
      </div>

      {/* Popular Outfits Card component - takes 1/3 of the width on large screens */}
      <div className="lg:col-span-1">
        <PopularOutfitsCard />
      </div>
    </div>
  </section>
);

export default Cards;
