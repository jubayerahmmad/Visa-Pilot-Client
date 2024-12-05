import React from "react";
import { Link } from "react-router-dom";

// card from ZENUI

const VisaCards = ({ visa }) => {
  console.log(visa);
  const { countryName, countryImage, description } = visa;
  return (
    <div className="group [perspective:1000px] w-full h-[250px]">
      <div className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
          <img
            src={countryImage}
            alt="animated_card"
            className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
          />
          <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5 font-montserrat">
            {countryName}
          </h2>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
          <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-4 font-montserrat">
            {countryName}
          </h2>
          <p className="text-gray-600 font-lato">
            <span className="font-bold">Details:</span>{" "}
            {description.slice(0, 150)}...
            <Link
              to="/visaDetails"
              className="inline-block mt-4 text-blue-500 hover:underline font-lato"
            >
              Details
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisaCards;
