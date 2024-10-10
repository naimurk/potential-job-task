import AboutMe from "@/components/AboutMe/AboutMe";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Service from "@/components/Service/Service";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Service></Service>
      <Projects></Projects>
    </div>
  );
};

export default Home;
