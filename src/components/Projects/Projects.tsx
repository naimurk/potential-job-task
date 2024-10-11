"use client";
import { useEffect, useState } from "react";
import web1Img from "@/assests/projects/Web Designs.png";
import web2Img from "@/assests/projects/Web Designs (1).png";
import web3Img from "@/assests/projects/Web Designs (2).png";
import web4Img from "@/assests/projects/Web Designs (3).png";
import web5Img from "@/assests/projects/Web Designs (4).png";
import web6Img from "@/assests/projects/Web Designs (5).png";
import Image, { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  img: StaticImageData[];
  category: string;
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("Web Design");

  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "AirCalling Landing Page Design ",
      img: [web1Img, web2Img],
      category: "UI/UX",
    },
    {
      id: 2,
      title: "AirCalling Landing Page Design ",
      img: [web1Img, web2Img],
      category: "Web Design",
    },
    {
      id: 3,
      title: "Business Landing Page Design ",
      img: [web3Img, web4Img],
      category: "App Design",
    },
    {
      id: 4,
      title: "Ecom Web Page Design ",
      img: [web5Img, web6Img],
      category: "Graphics Design",
    },
    {
      id: 5,
      title: "Business Landing Page Design ",
      img: [web3Img, web4Img],
      category: "UI/UX",
    },
    {
      id: 6,
      title: "Business Landing Page Design ",
      img: [web3Img, web4Img],
      category: "Web Design",
    },
    {
      id: 7,
      title: "Ecom Web Page Design ",
      img: [web5Img, web6Img],
      category: "Web Design",
    },
  ];

  // Tabs
  const tabs: string[] = [
    "All",
    "UI/UX",
    "Web Design",
    "App Design",
    "Graphics Design",
  ];
  const [filterProjects, setFilterProjects] = useState<Project[]>([]);

  useEffect(() => {
    const filteredProjects =
      activeTab === "All"
        ? projects
        : projects.filter((project) => project.category === activeTab);
    setFilterProjects([...filteredProjects]);
  }, [activeTab]);

  return (
    <div>
      <div className="max-w-[1420px] mx-auto min-w-[320px] xl:px-[50px]  px-4 pt-[100px] poppins">
        {/* text */}
        <div className="text-center text-black">
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[65px] font-semibold">
            My Projects
          </h1>
          <p className="xl:w-[932px] mx-auto font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] mt-[15px] ">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>

        {/* tab buttons */}
        <div className="flex flex-wrap justify-center gap-x-[10px] gap-y-[10px] my-[50px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`w-fit px-[10px] sm:px-[15px] md:px-[20px] py-[8px] sm:py-[10px] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal border ${
                activeTab === tab
                  ? "bg-[#FD6F00] border-[#545454] text-white"
                  : "bg-[#F8F8F8] border-[#545454] text-black "
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-[44px]">
          {filterProjects?.map((project) => (
            <div className="overflow-hidden " key={project.id}>
              <div className="h-[489px] relative bg-[#FFEBDB] rounded-[12px]">
                <Image
                  className="absolute z-10 left-[39px] top-[89px]"
                  width={274}
                  height={405}
                  src={project.img[0]}
                  alt={project.title}
                ></Image>
                <Image
                  className="absolute right-[27px] md:right-[20px] lg:right-[27px]"
                  width={274}
                  height={489}
                  src={project.img[1]}
                  alt={project.title}
                ></Image>
              </div>
              <div className="mt-[37px] poppins">
                <h3 className="text-[19px] leading-[28.5px] text-[#FD6F00] font-normal">
                  {project.category}
                </h3>
                <h2 className="text-[#1E1E1E] font-bold text-2xl mt-[10px]">
                  {project.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
