"use client"
import { useState } from "react";
import Image from "next/image";
import logo from "@/assests/Subtract.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white ">
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-[50px] px-4 flex justify-between items-center py-4">
        {/* First div - Logo and Heading */}
        <div className="flex items-center gap-x-4 md:gap-x-6">
          <Image src={logo} alt="logo" width={50} height={50} className="w-[50px] h-[50px] md:w-[70px] md:h-[66px]" />
          <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-normal montserrat text-[#545454]">
            <span className="font-bold text-black">M</span>umair
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="xl:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl text-gray-700">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Second div - Menu and Button (Desktop) */}
        <div className="hidden xl:flex items-center space-x-4 md:space-x-6 lg:space-x-8 poppins text-[14px] md:text-[18px] lg:text-[21px]">
          <ul className="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-[40px]">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
            <li className="cursor-pointer hover:text-gray-500">Services</li>
            <li className="cursor-pointer hover:text-gray-500">About Me</li>
            <li className="cursor-pointer hover:text-gray-500">Projects</li>
            <li className="cursor-pointer hover:text-gray-500">Contact</li>
          </ul>

          <button className="w-[120px] h-[40px] md:w-[160px] md:h-[48px] lg:w-[188px] lg:h-[52px] bg-[#FD6F00] text-white rounded-[5px] text-[16px] md:text-[18px] lg:text-[21px] font-normal">
            Download CV
          </button>
        </div>
      </div>

      {/* Mobile Menu (When Open) */}
      {isOpen && (
        <div className="xl:hidden flex flex-col items-center space-y-6 py-6 poppins text-[18px] bg-white border-t">
          <ul className="flex flex-col items-center gap-y-6">
            <li className="cursor-pointer hover:text-gray-500" onClick={toggleMenu}>Home</li>
            <li className="cursor-pointer hover:text-gray-500" onClick={toggleMenu}>Services</li>
            <li className="cursor-pointer hover:text-gray-500" onClick={toggleMenu}>About Me</li>
            <li className="cursor-pointer hover:text-gray-500" onClick={toggleMenu}>Projects</li>
            <li className="cursor-pointer hover:text-gray-500" onClick={toggleMenu}>Contact</li>
          </ul>

          <button className="w-[160px] h-[48px] bg-[#FD6F00] text-white rounded-lg text-[18px] font-normal" onClick={toggleMenu}>
            Download CV
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
