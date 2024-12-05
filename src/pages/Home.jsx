import React from "react";
import Slider from "../components/HomeComponents/Slider";
import AboutProgram from "../components/HomeComponents/AboutProgram";
import HowItWorks from "../components/HomeComponents/HowItWorks";
import LatestVisas from "../components/HomeComponents/LatestVisas";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <LatestVisas></LatestVisas>
      <AboutProgram></AboutProgram>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
