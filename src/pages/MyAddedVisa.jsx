import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import MyAddedVisaCards from "../components/MyAddedVisaCards";
import noDataAnimation from "../assets/noData.json";
import Lottie from "lottie-react";

const MyAddedVisa = () => {
  const { user } = useContext(AuthContext);

  const [myVisa, setMyVisa] = useState([]);

  useEffect(() => {
    fetch("https://visa-pilot-server.vercel.app/allVisas")
      .then((res) => res.json())
      .then((data) => {
        const userAddedVisas = data.filter(
          (visas) => visas.userEmail === user?.email
        );

        setMyVisa(userAddedVisas);
      });
  }, [user, setMyVisa]);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl dark:text-gray-200 font-semibold text-center my-6 font-montserrat">
        My Added Visas
      </h1>
      <div>
        {myVisa?.length > 0 ? (
          <div className="relative max-w-7xl mx-auto overflow-x-auto shadow-md sm:rounded-lg my-10">
            <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
              <thead className="text-sm text-white uppercase bg-cyan-600 dark:bg-cyan-700 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Country
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Processing Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Validity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Visa Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fee
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {myVisa?.map((visa) => (
                  <MyAddedVisaCards
                    key={visa._id}
                    visa={visa}
                    myVisa={myVisa}
                    setMyVisa={setMyVisa}
                  ></MyAddedVisaCards>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center my-6 space-y-6">
            <Lottie
              animationData={noDataAnimation}
              autoplay={true}
              className="h-96"
            />
            <h2 className="text-4xl text-center dark:text-gray-200 p-2 font-bold">
              You didn't Add any Visa Yet!
            </h2>
            <Link to="/addVisa">
              <button className="btn border-none bg-cyan-500 text-white font-bold hover:bg-cyan-600">
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
