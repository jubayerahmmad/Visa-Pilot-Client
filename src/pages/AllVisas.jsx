import { useLoaderData } from "react-router-dom";
import VisaCards from "../components/VisaCards";

const AllVisas = () => {
  const loadedVisas = useLoaderData();
  console.log(loadedVisas);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-6 font-montserrat">
        See All Visa
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-11/12 mx-auto mb-6">
        {loadedVisas?.map((visa) => (
          <VisaCards key={visa._id} visa={visa}></VisaCards>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
