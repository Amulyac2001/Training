import React, { useState } from "react";
import { useRef } from "react";
import { rewardKeyData } from "../../components/constants/rewardKeyData";
import Card from "../CardFunctionality/Card";
import ChestKeyFunctionality from '../../components/rewards/ChestKeyFunctionality'

const Scroll = () => {
  const scroll = (direction) => {
    const container = document.getElementById("scroll-container");
    if (container) {
      const scrollAmount = 300; // Adjust movement distance
      container.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto p-4">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        onClick={() => scroll("left")}
      >
        &#9665;
      </button>

      {/* Scrollable Container */}
      <div
        id="scroll-container"
        className="flex overflow-x-hidden scroll-smooth scrollbar-hide "
      >
       <ChestKeyFunctionality />
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        onClick={() => scroll("right")}
      >
        &#9655;
      </button>
    </div>
  );
};

export default Scroll;
