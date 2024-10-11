import uiuxImage from "@/assests/services/Group 20.png";
import webImage from "@/assests/services/Layer_1.png";
import appImage from "@/assests/services/Group 18.png";
import graphicsImage from "@/assests/services/Group 19.png";
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
  const Services = [
    {
      name: "UI/UX",
      img: uiuxImage,
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },

    {
      name: "Web Design ",
      img: webImage,
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },

    {
      name: "App Design",
      img: appImage,
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      name: "Graphic Design ",
      img: graphicsImage,
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
  ];

  return (
    <div>
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-[50px] px-4 pt-[100px] poppins">
        {/* Title and Description */}
        <div className="text-center text-black">
          <h1 className="text-[40px] md:text-[50px] lg:text-[65px] font-semibold">
            Service
          </h1>
          <p className="xl:w-[932px] mx-auto font-normal text-[16px] md:text-[18px] lg:text-[21px] mt-[15px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] md:gap-[24px] lg:gap-[32px]">
          {Services.map((item, index) => (
            <ServiceCard key={index} item={item}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
