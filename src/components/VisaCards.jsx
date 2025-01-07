import React from "react";
import { FcExpired, FcProcess } from "react-icons/fc";
import { Link } from "react-router-dom";

const VisaCards = ({ visa }) => {
  const {
    _id,
    countryName,
    countryImage,
    fee,
    visaType,
    processingTime,
    applicationMethod,
    validity,
  } = visa;
  return (
    <div className="w-full relative rounded-md overflow-hidden shadow-xl group border font-lato">
      {/* badge */}
      <span className="badge badge-lg badge-info z-20 text-slate-950 absolute top-3 right-3">
        {applicationMethod}
      </span>

      {/* product image */}
      <img
        alt="countryImage"
        src={countryImage}
        className="w-full h-56 object-cover group-hover:scale-105 duration-300"
      />

      {/* product details */}
      <div className="mt-2 p-4">
        <span className="text-gray-400 text-[0.9rem]">{visaType}</span>
        <h3 className="text-2xl font-bold mt-2 dark:text-white font-montserrat">
          {countryName}
        </h3>
        <p className="text-gray-400 mt-1 flex gap-2 items-center">
          <FcProcess size={20}></FcProcess> {processingTime}
        </p>
        <p className="text-gray-400 mt-1 flex gap-2 items-center">
          <FcExpired size={20}></FcExpired> <span>{validity}</span>
        </p>
        <div className="flex justify-between items-center">
          <p className="text-[1.1rem] font-semibold mt-1 text-[#0FABCA]">
            ${fee}
          </p>

          <Link to={`/visaDetails/${_id}`}>
            <button className="btn btn-sm bg-cyan-400 hover:bg-cyan-500 transition-all border-none duration-400 font-semibold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCards;
// <div
//     className="w-full h-[350px] relative overflow-hidden group cursor-pointer rounded-md font-montserrat"
//     data-aos="fade-right"
//   >
//     {/*  image  */}
//     <img
//       src={countryImage}
//       alt="animated_card"
//       className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"
//     />

//     {/*  text  */}
//     <div className="absolute top-[68%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex justify-center items-center flex-col bg-transparent backdrop-blur-sm">
//       <h1 className="text-[1.5rem] font-extrabold text-white">
//         {countryName}
//       </h1>
//       <p className="text-gray-200">
//         <span className="font-semibold">Type:</span> {visaType}
//       </p>
//       <p className="text-gray-200">
//         <span className="font-semibold">Fee:</span> $ {fee}
//       </p>
//       <p className="text-gray-200">
//         <span className="font-semibold">Processing Time:</span>{" "}
//         {processingTime}
//       </p>
//       <p className="text-gray-200">
//         <span className="font-semibold">Method:</span> {applicationMethod}
//       </p>
//       <p className="text-gray-200">
//         <span className="font-semibold">Validity:</span> {validity}
//       </p>
//       <Link to={`/visaDetails/${_id}`}>
//         <button className="bg-cyan-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-cyan-500 transition-all duration-1000 text-white font-semibold rounded-full text-[0.9rem]">
//           View Details
//         </button>
//       </Link>
//     </div>

//     {/*  bottom shadow  */}
//     <div className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgba(0,0,0,0.08)] to-[rgb(0,0,0)] h-[100%] absolute bottom-0 left-0 right-0"></div>
//   </div>
