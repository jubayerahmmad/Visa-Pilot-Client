import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import MyAddedVisaCards from "../components/MyAddedVisaCards";

const MyAddedVisa = () => {
  const loadedVisas = useLoaderData();
  const { user } = useContext(AuthContext);
  // console.log(loadedVisas);
  const userAddedVisas = loadedVisas.filter(
    (visas) => visas.userEmail === user?.email
  );
  // console.log(userAddedVisas);
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-6 font-montserrat">
        My Added Visas
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-11/12 mx-auto mb-6">
        {userAddedVisas?.map((visa) => (
          <MyAddedVisaCards key={visa._id} visa={visa}></MyAddedVisaCards>
        ))}
      </div>
    </div>
  );
};

export default MyAddedVisa;
