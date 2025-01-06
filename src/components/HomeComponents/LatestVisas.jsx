import React from "react";
import VisaCards from "../VisaCards";
import { Link, useLoaderData } from "react-router-dom";

const LatestVisas = () => {
  const loadedVisas = useLoaderData();
  return (
    <section className="bg-blue-50 dark:bg-slate-900 ">
      <div className="py-8 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 underline underline-offset-4 font-montserrat animate__animated animate__fadeInDown">
          Latest Visas
        </h2>
        <p className="text-gray-600 dark:text-gray-400 font-lato mb-6">
          Here are the latest visa options available. Explore the world with
          ease and apply for your visa today!
        </p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6"
          data-aos="zoom-in"
        >
          {loadedVisas
            ?.slice(loadedVisas.length - 6)
            .reverse()
            .map((visa) => (
              <VisaCards key={visa._id} visa={visa}></VisaCards>
            ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/allVisas"
            className="bg-cyan-400 px-4 py-2 hover:bg-cyan-500 transition-all duration-1000 text-white font-semibold rounded-full text-xl font-montserrat text-center"
          >
            <button>See All Visas</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestVisas;
