import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
    </div>
  );
}
