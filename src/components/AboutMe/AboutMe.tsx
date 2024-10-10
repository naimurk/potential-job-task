import img from "@/assests/aboutimg/Group 36 (1).png";
import Image from "next/image";
import RangeSlider from "../RangeSlider/Rangeslider";
const AboutMe = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-0  px-4 grid   grid-cols-2 items-center pt-[100px] ">
        {/* image div */}
        <div className="relative ">
          <Image
            src={img}
            alt="s"
            className=""
            width={680.76}
            height={693.12}
          ></Image>

          <div className="w-[374px] absolute top-[112px]   left-[157px] h-[83px] bg-[#FD6F00] opacity-60 "></div>
        </div>

        {/* text section */}
        <div className=" xl:pr-[50px] poppins ">
          <h1 className="font-semibold text-[65px] text-black">About Me</h1>
          <p className="text-[21px] text-black leading-[31.5px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div className="mt-[17px] flex flex-col gap-y-[25px]">
            <RangeSlider name="UX" rangeValue={95}></RangeSlider>
            <RangeSlider name="Website Design" rangeValue={89}></RangeSlider>
            <RangeSlider name="App Design " rangeValue={90}></RangeSlider>
            <RangeSlider name="Graphic Design " rangeValue={94}></RangeSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
