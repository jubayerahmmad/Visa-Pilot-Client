import { useLoaderData } from "react-router-dom";
import VisaCards from "../components/VisaCards";
import { useState } from "react";

const AllVisas = () => {
  const loadedVisas = useLoaderData();
  // console.log(loadedVisas);
  const [filter, setFilter] = useState("Filter");

  const filteredVisas =
    filter === "Filter"
      ? loadedVisas
      : loadedVisas.filter((visa) => visa.visaType === filter);
  console.log(filteredVisas);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-6 font-montserrat">
        Check All Visa
      </h1>

      <div className="flex justify-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-4 mb-6 bg-cyan-500 text-white rounded-xl font-bold cursor-pointer"
        >
          <option className="text-xl" value="Filter">
            Filter
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

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-11/12 mx-auto mb-6">
        {filteredVisas?.map((visa) => (
          <VisaCards key={visa._id} visa={visa}></VisaCards>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
