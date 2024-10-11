"use client";
import React, { useState } from "react";

const RangeSlider = ({
  rangeValue,
  name,
}: {
  rangeValue: number;
  name: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, setValue] = useState(rangeValue || 50); // Initial value for the slider

  return (
    <div className="poppins">
      {/* Slider container */}
      <h1 className="text-black text-[18px] md:text-[21px] lg:text-[24px] font-semibold">
        {name}
      </h1>
      <div className="relative w-full h-2 md:h-3 lg:h-4 bg-[#EDECEC] rounded-full cursor-pointer mt-[15px] md:mt-[20px]">
        {/* Slider track */}
        <div
          className="absolute left-0 top-0 h-2 md:h-3 lg:h-4 bg-[#FD6F00] rounded-full"
          style={{ width: `${value}%` }}
        ></div>
        {/* Slider thumb */}
        <div
          className="absolute w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] bg-[#EDECEC] border-[2px] md:border-[2.5px] lg:border-[3px] border-[#FD6F00] rounded-full shadow"
          style={{
            left: `${value}%`,
            top: "-10px", // Adjust top value for thumb based on screen sizes
            transform: "translateX(-50%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default RangeSlider;
