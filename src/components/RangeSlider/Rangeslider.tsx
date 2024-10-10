"use client";
import React, { useState } from "react";

const RangeSlider = ({
  rangeValue,
  name,
}: {
  rangeValue: number;
  name: string;
}) => {
  const [value, setValue] = useState(rangeValue || 50); // Initial value for the slider

  // Function to handle mouse movements
  // const handleMouseMove = (e) => {
  //     const rect = e.target.getBoundingClientRect();
  //     const offsetX = e.clientX - rect.left; // Calculate the offset
  //     const newValue = Math.min(Math.max(0, (offsetX / rect.width) * 100), 100); // Constrain the value between 0 and 100
  //     setValue(newValue); // Update state
  // };

  return (
    <div className="poppins">
      {/* Slider container */}
      <h1 className="text-black text-[24px] font-semibold">{name}</h1>
      <div className="relative w-full h-3 bg-[#EDECEC] rounded-full cursor-pointer mt-[20px]">
        {/* Slider track */}
        <div
          className="absolute left-0 top-0 h-3 bg-[#FD6F00] rounded-full"
          style={{ width: `${value}%` }}
        ></div>
        {/* Slider thumb */}
        <div
          className="absolute w-[32px] h-[32px] bg-[#EDECEC] border-[3px] border-[#FD6F00] rounded-full shadow"
          style={{
            left: `${value}%`,
            top: "-12px",
            transform: "translateX(-50%)",
          }} // Adjust top value here
        ></div>
      </div>
    </div>
  );
};

export default RangeSlider;
