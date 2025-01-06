import React from "react";
import Slider from "../components/HomeComponents/Slider";
import AboutProgram from "../components/HomeComponents/AboutProgram";
import HowItWorks from "../components/HomeComponents/HowItWorks";
import LatestVisas from "../components/HomeComponents/LatestVisas";
import NewsletterForm from "../components/HomeComponents/NewsletterForm";
import AnimatedHoverCard from "../components/HomeComponents/HoverAnimatedCars";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <LatestVisas></LatestVisas>
      <AboutProgram></AboutProgram>
      {/* <AnimatedHoverCard></AnimatedHoverCard> */}
      <HowItWorks></HowItWorks>
      <NewsletterForm></NewsletterForm>
    </div>
  );
};

export default Home;
