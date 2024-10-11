import Image from "next/image";
import React from "react";
import logo from "@/assests/Subtract.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F8F8F8] mt-[100px]">
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-[50px] px-4 flex flex-col justify-center items-center gap-y-[40px] md:gap-y-[60px] lg:gap-y-[80px] h-auto py-10 md:py-[100px]">
        {/* First div - Logo and Heading */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 gap-x-4 md:gap-x-6">
      <a href="#home">
      <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="w-[50px] h-[50px] md:w-[70px] md:h-[66px]"
          />
      </a>
          <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-normal montserrat text-[#545454]">
            <span className="font-bold text-black">M</span>umair
          </h1>
        </div>

        {/* Second div - Menu and Button (Responsive) */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 space-x-4 md:space-x-6 lg:space-x-8 poppins text-[14px] md:text-[16px] lg:text-[21px]">
          <ul className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-6 lg:gap-x-[40px]">
            <a href="#home">
              <li className="cursor-pointer hover:text-gray-500">Home</li>
            </a>
            <a href="#about">
              <li className="cursor-pointer hover:text-gray-500">About Me</li>
            </a>
            <a href="#services">
              <li className="cursor-pointer hover:text-gray-500">Services</li>
            </a>
            <a href="#projects">
              <li className="cursor-pointer hover:text-gray-500">Projects</li>
            </a>
            <a href="#testimonials">
              <li className="cursor-pointer hover:text-gray-500">
                Testimonials
              </li>
            </a>
            <a href="#contact">
              <li className="cursor-pointer hover:text-gray-500">Contact</li>
            </a>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-x-4 md:gap-x-[25px]">
        <a href="https://www.facebook.com/naimurk781" target="_blank">
              <FaFacebook size={28}></FaFacebook>
            </a>
            <a href="https://www.facebook.com/naimurk781" target="_blank">
              <FaTwitter size={28}></FaTwitter>
            </a>
            <a href="https://www.facebook.com/naimurk781" target="_blank">
              <FaInstagram size={28}></FaInstagram>
            </a>
            <a href="https://www.linkedin.com/in/naimurk/">
              <FaLinkedin size={28}></FaLinkedin>
            </a>
          {/* <FaFacebook size={28} />
          <FaTwitter size={28} />
          <FaInstagram size={28} />
          <FaLinkedin size={28} /> */}
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full flex justify-center bg-[#545454] h-auto py-4 md:py-[20px] items-center mt-[40px] md:mt-[62px] poppins text-[16px] md:text-[18px] lg:text-[21px] font-bold text-white text-center">
        <p>
          © 2023 <span className="text-[#FD6F00]">Mumair</span> All Rights
          Reserved, Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
