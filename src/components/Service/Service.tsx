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
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-[50px] px-4  pt-[100px] poppins">
        <div className="text-center text-black">
          <h1 className="text-[65px] font-semibold">Service</h1>
          <p className="xl:w-[932px] mx-auto font-normal text-[21px] mt-[15px] ">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className="mt-[50px] grid grid-cols-4 gap-x-[32px]">
          {Services.map((item, index) => (
            <ServiceCard key={index} item={item}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
