"use client";
import React, { useState } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(10); // Initial value for the slider

  // Function to handle mouse movements
  // const handleMouseMove = (e) => {
  //     const rect = e.target.getBoundingClientRect();
  //     const offsetX = e.clientX - rect.left; // Calculate the offset
  //     const newValue = Math.min(Math.max(0, (offsetX / rect.width) * 100), 100); // Constrain the value between 0 and 100
  //     setValue(newValue); // Update state
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Slider container */}
      <div className="relative w-96 h-2 bg-gray-300 rounded-full cursor-pointer">
        {/* Slider track */}
        <div
          className="absolute left-0 top-0 h-2 bg-indigo-500 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
        {/* Slider thumb */}
        <div
          className="absolute w-6 h-6 bg-white border-2 border-indigo-500 rounded-full shadow"
          style={{
            left: `${value}%`,
            top: "-5px",
            transform: "translateX(-50%)",
          }} // Adjust top value here
        ></div>
      </div>
    </div>
  );
};

export default RangeSlider;
