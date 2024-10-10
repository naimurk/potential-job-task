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
    <div className="w-[330] h-[346px] px-[18px] pt-[57px] pb-[10px] rounded-[14px] bg-[#F8F8F8] mx-auto flex flex-col gap-y-[15px]">
      <Image src={item.img} alt={item.name}></Image>
      <h1 className="text-[32px] font-semibold">{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ServiceCard;
