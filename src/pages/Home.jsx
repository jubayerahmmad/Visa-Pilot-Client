import React from "react";
import Slider from "../components/HomeComponents/Slider";
import AboutProgram from "../components/HomeComponents/AboutProgram";
import HowItWorks from "../components/HomeComponents/HowItWorks";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <AboutProgram></AboutProgram>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
