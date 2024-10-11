import Image, { StaticImageData } from "next/image";

const ServiceCard = ({
  item,
}: {
  item: {
    name: string;
    img: StaticImageData;
    description: string;
  };
}) => {
  return (
    <div className="w-full h-[346px] px-[18px] pt-[57px] pb-[10px] rounded-[14px] bg-[#F8F8F8] mx-auto flex flex-col items-center gap-y-[15px] text-center">
      <Image src={item.img} alt={item.name} className="w-[100px] h-[100px]" />

      <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold">
        {item.name}
      </h1>

      <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#555] leading-[22px]">
        {item.description}
      </p>
    </div>
  );
};

export default ServiceCard;
