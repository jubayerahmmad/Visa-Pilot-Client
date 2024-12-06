import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import MyAddedVisaCards from "../components/MyAddedVisaCards";
import noDataAnimation from "../assets/noData.json";
import Lottie from "lottie-react";

const MyAddedVisa = () => {
  const loadedVisas = useLoaderData();
  const { user } = useContext(AuthContext);
  const userAddedVisas = loadedVisas.filter(
    (visas) => visas.userEmail === user?.email
  );
  const [myVisa, setMyVisa] = useState(userAddedVisas);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-6 font-montserrat">
        My Added Visas
      </h1>
      <div>
        {myVisa.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-11/12 mx-auto mb-6">
            {myVisa?.map((visa) => (
              <MyAddedVisaCards
                key={visa._id}
                visa={visa}
                myVisa={myVisa}
                setMyVisa={setMyVisa}
                userAddedVisas={userAddedVisas}
              ></MyAddedVisaCards>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center my-6 space-y-6">
            <Lottie
              animationData={noDataAnimation} // Path to your animation JSON
              loop={true} // Loop the animation
              autoplay={true} // Autoplay the animation
              className="h-96" // Set the size of the animation
            />
            <h2 className="text-4xl font-bold">You did't Add any Visa Yet!</h2>
            <Link to="/addVisa">
              <button className="btn bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-600">
                Go Add Visa
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAddedVisa;
