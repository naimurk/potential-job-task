import Image from "next/image";
import img from "@/assests/bannerimg/Group 2.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-white poppins">
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-[50px] px-4 grid   grid-cols-2 items-center pt-[100px]">
        <div className="">
          <p className="font-semibold text-[24px] text-black">Hi I am </p>
          <p className="font-semibold text-[#FD6F00] text-[32px]">
            Muhammad Umair
          </p>
          <div className="font-bold text-[100px] text-black ">
            <h1 className="leading-[120px]">UI & UX</h1>
            <div className="flex justify-end">
              <h1 className="leading-[100px]">Designer </h1>
            </div>
          </div>
          <p className="mt-[28px] text-[21px] leading-[31.5px] ">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>

          <button className="w-[120px] h-[40px] md:w-[160px] md:h-[48px] lg:w-[188px] lg:h-[52px] bg-[#FD6F00] text-white rounded-[5px] text-[16px] md:text-[18px] lg:text-[21px] font-normal mt-[22px]">
            Download CV
          </button>
        </div>
        {/* image div */}
        <div className=" relative  ">
          <div className="flex justify-end">
            <Image
              src={img}
              alt="s"
              className=""
              width={508}
              height={617}
            ></Image>
          </div>
          <div className="w-[374px] absolute top-[70px]   right-[70px] h-[83px] bg-[#FD6F00] opacity-60 "></div>
          <div className="w-[508px]   flex justify-end items-center gap-x-[25px] mt-[39px]  ">
            <FaFacebook size={32.48}></FaFacebook>
            <FaTwitter size={32.48}></FaTwitter>
            <FaInstagram size={32.48}></FaInstagram>
            <FaLinkedin size={32.48}></FaLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
