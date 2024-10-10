import AboutMe from "@/components/AboutMe/AboutMe";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
