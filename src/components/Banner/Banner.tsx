"use client";
import Image from "next/image";
import img from "@/assests/bannerimg/Group 2.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const Banner = () => {
  const [viewportWidth, setViewportWidth] = useState<number>();

  useEffect(() => {
    const checkViewportSize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
    };

    window.addEventListener("resize", checkViewportSize);
    checkViewportSize(); // Call on initial load

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", checkViewportSize);
  }, []);
  // console.log(viewportWidth);
  return (
    <div id="home" className="bg-white poppins">
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-[50px] px-4 grid gap-8 md:gap-12 xl:gap-0 grid-cols-1 lg:grid-cols-2 items-center pt-[50px] md:pt-[70px] lg:pt-[100px]">
        <div className="">
          <p className="font-semibold text-[18px] md:text-[20px] lg:text-[24px] text-black">
            Hi I am
          </p>
          <p className="font-semibold text-[#FD6F00] text-[28px] md:text-[30px] lg:text-[32px]">
            Muhammad Umair
          </p>
          <div className="font-bold text-[40px] md:text-[70px] lg:text-[100px] text-black">
            <h1 className="leading-[45px] md:leading-[75px] lg:leading-[120px]">
              UI & UX
            </h1>
            <div className="flex justify-start lg:justify-end">
              <h1 className="leading-[45px] md:leading-[70px] lg:leading-[100px]">
                Designer
              </h1>
            </div>
          </div>
          <p className="mt-[20px] md:mt-[24px] lg:mt-[28px] text-[16px] md:text-[18px] lg:text-[21px] leading-[24px] md:leading-[28px] lg:leading-[31.5px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>

          <a href="#contact">
            <button className="w-[120px] h-[40px] md:w-[160px] md:h-[48px] lg:w-[188px] lg:h-[52px] bg-[#FD6F00] text-white rounded-[5px] text-[16px] md:text-[18px] lg:text-[21px] font-normal mt-[22px]">
              Hire Me
            </button>
          </a>
        </div>

        {/* image div */}
        <div className=" relative  ">
          <div className="flex justify-center xl:justify-end">
            <Image
              src={img}
              alt="s"
              className=""
              width={508}
              height={617}
            ></Image>
          </div>
          {viewportWidth && (
            <div
              className={`absolute bg-[#FD6F00] opacity-60
        ${
          viewportWidth <= 375
            ? "top-[50px] right-[71px] w-[150px] h-[35px]"
            : ""
        }
        ${
          viewportWidth >= 375 && viewportWidth <= 425
            ? "top-[55px] right-[101px] w-[180px] h-[38px]"
            : ""
        }
        ${
          viewportWidth > 425
            ? "top-[70px] md:top-[85px] lg:top-[70px]  right-[110px] md:right-[250px] lg:right-[50px] xl:right-[69px] w-[180px] md:w-[250px] lg:w-[374px] h-[40px] md:h-[60px] lg:h-[83px]"
            : ""
        }
      `}
            >
              {/* The content inside the div */}
            </div>
          )}
          <div className="xl:w-[508px]   flex justify-center xl:justify-end items-center gap-x-[25px] mt-[39px]  ">
            <a href="https://www.facebook.com/naimurk781" target="_blank">
              <FaFacebook size={32.48}></FaFacebook>
            </a>
            <a href="https://www.facebook.com/naimurk781" target="_blank">
              <FaTwitter size={32.48}></FaTwitter>
            </a>
            <a href="https://www.facebook.com/naimurk781" target="_blank">
              <FaInstagram size={32.48}></FaInstagram>
            </a>
            <a href="https://www.linkedin.com/in/naimurk/">
              <FaLinkedin size={32.48}></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
