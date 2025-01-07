import { useLoaderData } from "react-router-dom";
import VisaCards from "../components/VisaCards";
import { useState } from "react";

const AllVisas = () => {
  const loadedVisas = useLoaderData();
  // console.log(loadedVisas);
  const [filter, setFilter] = useState("All");

  const filteredVisas =
    filter === "All"
      ? loadedVisas
      : loadedVisas.filter((visa) => visa.visaType === filter);
  // console.log(filteredVisas);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl dark:text-gray-200 font-semibold animate__animated animate__fadeInDown text-center my-6 font-montserrat">
        Check All Visa
      </h1>

      <div className="flex items-center justify-end gap-4 animate__animated animate__fadeInUp  mb-6">
        <p className="dark:text-white">Sort By:</p>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 bg-cyan-500 text-white rounded-xl font-bold cursor-pointer"
        >
          <option className="text-xl" value="All">
            All
          </option>
          <option className="text-xl" value="Tourist visa">
            Tourist visa
          </option>
          <option className="text-xl" value="Student Visa">
            Student Visa
          </option>
          <option className="text-xl" value="Official Visa">
            Official Visa
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        {filteredVisas?.map((visa) => (
          <VisaCards key={visa._id} visa={visa}></VisaCards>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
