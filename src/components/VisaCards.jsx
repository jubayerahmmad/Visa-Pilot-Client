import React from "react";
import { Link } from "react-router-dom";

const VisaCards = ({ visa }) => {
  const { _id, countryName, countryImage, fee, visaType } = visa;
  return (
    <div className="w-full h-[350px] relative overflow-hidden group cursor-pointer rounded-md font-montserrat">
      {/*  image  */}
      <img
        src={countryImage}
        alt="animated_card"
        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
      />

      {/*  text  */}
      <div className="absolute top-[58%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
        <h1 className="text-[1.5rem] font-extrabold text-white text-center">
          {countryName}
        </h1>
        <p className="text-gray-200">
          <span className="font-semibold">Fee:</span> $ {fee}
        </p>
        <p className="text-gray-200">
          <span className="font-semibold">Type:</span> {visaType}
        </p>
        <Link to={`/visaDetails/${_id}`}>
          <button className="bg-cyan-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-cyan-500 transition-all duration-1000 text-white font-semibold rounded-md text-[0.9rem]">
            View Details
          </button>
        </Link>
      </div>

      {/*  bottom shadow  */}
      <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgba(0,0,0,0.08)] to-[rgb(0,0,0)] h-[100%] absolute bottom-0 left-0 right-0"></div>
    </div>
  );
};

export default VisaCards;
