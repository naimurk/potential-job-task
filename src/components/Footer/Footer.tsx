import Image from "next/image";
import React from "react";
import logo from "@/assests/Subtract.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#F8F8F8] mt-[100px] ">
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-[50px] px-4 flex flex-col justify-center items-center gap-y-[80px] h-[468px] ">
        {/* First div - Logo and Heading */}
        <div className="flex justify-center items-center gap-x-4 md:gap-x-6 ">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="w-[50px] h-[50px] md:w-[70px] md:h-[66px]"
          />
          <h1 className="text-[24px]  md:text-[36px] lg:text-[48px] font-normal montserrat text-[#545454]">
            <span className="font-bold text-black">M</span>umair
          </h1>
        </div>

        {/* Second div - Menu and Button (Desktop) */}
        <div className="hidden xl:flex justify-center items-center space-x-4 md:space-x-6 lg:space-x-8 poppins text-[14px] md:text-[18px] lg:text-[21px] ">
          <ul className="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-[40px]">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
            <li className="cursor-pointer hover:text-gray-500">About Me</li>
            <li className="cursor-pointer hover:text-gray-500">Services</li>
            <li className="cursor-pointer hover:text-gray-500">Projects</li>
            <li className="cursor-pointer hover:text-gray-500">Testimonials</li>
            <li className="cursor-pointer hover:text-gray-500">Contact</li>
          </ul>
        </div>

        <div className="   flex justify-center items-center gap-x-[25px]   ">
          <FaFacebook size={32.48}></FaFacebook>
          <FaTwitter size={32.48}></FaTwitter>
          <FaInstagram size={32.48}></FaInstagram>
          <FaLinkedin size={32.48}></FaLinkedin>
        </div>
      </div>
      <div className="w-full flex justify-center bg-[#545454] h-[84px] items-center mt-[62px] poppins text-[21px] font-bold text-white ">
        <p>© 2023 <span className="text-[#FD6F00]">Mumair</span> All Rights Reserved , Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
