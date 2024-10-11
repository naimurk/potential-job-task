import img from "@/assests/aboutimg/Group 36 (1).png";
import Image from "next/image";
import RangeSlider from "../RangeSlider/Rangeslider";

const AboutMe = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-0 px-4 grid gap-8 md:gap-12 xl:gap-0 grid-cols-1 lg:grid-cols-2 items-center pt-[70px]  lg:pt-[100px]">
        {/* image div */}
        <div className="relative flex justify-center lg:justify-start">
          <Image
            src={img}
            alt="s"
            className=""
            width={680.76}
            height={693.12}
          ></Image>

          {/* Background div behind image */}
          <div className={`absolute bg-[#FD6F00] opacity-60
            top-[50px] left-[71px] w-[150px] h-[35px] 
            md:top-[85px] md:left-[130px] md:w-[250px] md:h-[60px]
            lg:top-[112px] lg:left-[157px] lg:w-[374px] lg:h-[83px]`}
          ></div>
        </div>

        {/* text section */}
        <div className="xl:pr-[50px] poppins">
          <h1 className="font-semibold text-[28px] md:text-[45px] lg:text-[65px] text-black">
            About Me
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[21px] leading-[24px] md:leading-[28px] lg:leading-[31.5px] text-black">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
            Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>
          <div className="mt-[17px] flex flex-col gap-y-[20px] md:gap-y-[25px]">
            <RangeSlider name="UX" rangeValue={95}></RangeSlider>
            <RangeSlider name="Website Design" rangeValue={89}></RangeSlider>
            <RangeSlider name="App Design" rangeValue={90}></RangeSlider>
            <RangeSlider name="Graphic Design" rangeValue={94}></RangeSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
