import React from "react";
import VisaCards from "../VisaCards";
import { Link, useLoaderData } from "react-router-dom";

const LatestVisas = () => {
  const loadedVisas = useLoaderData();
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-gray-800 text-center mb-8 font-montserrat"
          data-aos="fade-down"
        >
          Latest Visas
        </h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-11/12 mx-auto mb-6"
          data-aos="fade-right"
        >
          {loadedVisas?.map((visa) => (
            <VisaCards key={visa._id} visa={visa}></VisaCards>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/allVisas"
            className="bg-cyan-400 px-4 py-2  hover:bg-cyan-500 transition-all duration-1000 text-white font-semibold rounded-full text-[0.9rem] text-center"
          >
            <button>See All Visas</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestVisas;
