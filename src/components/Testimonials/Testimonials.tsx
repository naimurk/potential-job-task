"use client";
import React, { useState, useEffect } from "react";
import web2Img from "@/assests/testimonials/Ellipse 10.png";
import web3Img from "@/assests/testimonials/Ellipse 11.png";
import Image from "next/image";

const Testimonials = () => {
  const testimonialsContent = [
    {
      name: "Name 1",
      img: web2Img,
      describe:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      position: "CEO",
    },
    {
      name: "Name 2",
      img: web3Img,
      describe:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      position: "CEO",
    },
    {
      name: "Name 3",
      img: web3Img,
      describe:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      position: "CEO",
    },
  ];

  // State to track the current active image
  const [activeIndex, setActiveIndex] = useState(0);

  // Get the previous and next indices
  const getPrevIndex = () =>
    activeIndex === 0 ? testimonialsContent.length - 1 : activeIndex - 1;
  const getNextIndex = () => (activeIndex + 1) % testimonialsContent.length;

  // Change the image every 2 seconds (2000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex + 1) % testimonialsContent.length
      );
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [testimonialsContent.length]);

  return (
    <div className="w-full flex flex-col relative items-center pt-[100px] poppins">
      <div className="w-full text-center">
        <h1 className="text-[65px] font-semibold">Lets Design Together</h1>
        <p className="xl:w-[932px] mx-auto font-normal text-[21px] mt-[15px] ">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      {/* Image Slider */}
      <div className="w-full mt-[90px] overflow-hidden flex justify-center items-center relative max-w-[1520px] mx-auto">
        {/* Previous image */}
        <div
          className="absolute left-0 flex items-center opacity-20 transition-opacity duration-500"
          style={{ transform: "translateX(-80%)", width: "calc(50% - 40px)" }}
        >
          <Image
            src={testimonialsContent[getPrevIndex()].img}
            alt="previous testimonial"
            width={235}
            height={235}
          />
          <div>
            {/* Quote Styling */}
            <div className="flex items-start">
              <span className="font-bold text-[32px] text-[#FD6F00] ">“</span>
              <div className="mt-[25px] text-[21px]">
                {testimonialsContent[activeIndex].describe}
                <span className="mt-[9px] ml-[9px] absolute font-bold text-[32px] text-[#FD6F00]">
                  ”
                </span>
                <div className="mt-[15px]">
                  <p className="text-[24px] font-medium">
                    {testimonialsContent[activeIndex].name}
                  </p>
                  <p className="text-[19px] font-normal">
                    {testimonialsContent[activeIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current image */}
        <div className="bg-[#F8F8F8] w-[1087px] pl-[48px] pr-[77px] py-[55px] flex items-center gap-x-[29px]  transition-all duration-500">
          <Image
            src={testimonialsContent[activeIndex].img}
            alt="current testimonial"
            width={235}
            height={235}
          />
          <div>
            {/* Quote Styling */}
            <div className="flex items-start">
              <span className="font-bold text-[32px] text-[#FD6F00] ">“</span>
              <div className="mt-[25px] text-[21px]">
                {testimonialsContent[activeIndex].describe}
                <span className="mt-[9px] ml-[9px] absolute font-bold text-[32px] text-[#FD6F00]">
                  ”
                </span>
                <div className="mt-[15px]">
                  <p className="text-[24px] font-medium">
                    {testimonialsContent[activeIndex].name}
                  </p>
                  <p className="text-[19px] font-normal">
                    {testimonialsContent[activeIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next image */}
        <div
          className="absolute right-0 flex items-center opacity-20 transition-opacity duration-500"
          style={{ transform: "translateX(80%)", width: "calc(50% - 40px)" }}
        >
          <Image
            src={testimonialsContent[getNextIndex()].img}
            alt="next testimonial"
            width={235}
            height={235}
          />
          <div>
            {/* Quote Styling */}
            <div className="flex items-start">
              <span className="font-bold text-[32px] text-[#FD6F00] ">“</span>
              <div className="mt-[25px] text-[21px]">
                {testimonialsContent[activeIndex].describe}
                <span className="mt-[9px] ml-[9px] absolute font-bold text-[32px] text-[#FD6F00]">
                  ”
                </span>
                <div className="mt-[15px]">
                  <p className="text-[24px] font-medium">
                    {testimonialsContent[activeIndex].name}
                  </p>
                  <p className="text-[19px] font-normal">
                    {testimonialsContent[activeIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-[85px] gap-2">
        {testimonialsContent.map((_, index) => (
          <span
            key={index}
            className={`w-[57px] h-[16px] rounded-[8px] ${
              index === activeIndex ? "bg-[#FD6F00]" : "bg-[#D9D9D9]"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
