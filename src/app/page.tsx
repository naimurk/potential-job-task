import AboutMe from "@/components/AboutMe/AboutMe";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Service from "@/components/Service/Service";
import Testimonials from "@/components/Testimonials/Testimonials";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
       <AboutMe></AboutMe>
      <Service></Service>
      <Projects></Projects>
      {/*<Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer> */}
    </div>
  );
};

export default Home;
