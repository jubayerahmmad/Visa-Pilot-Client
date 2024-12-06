import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import MyAppliedVisa from "../components/MyAppliedVisa";
import Lottie from "lottie-react";
import noDataAnimation from "../assets/noData.json";
const MyVisaApplications = () => {
  const loadedUsers = useLoaderData();
  const { user } = useContext(AuthContext);
  const loggedUserAppliedVisa = loadedUsers.filter(
    (loggedUser) => loggedUser?.email === user?.email
  );

  const [myAppliedVisa, setMyAppliedVisa] = useState(loggedUserAppliedVisa);
  const [search, setSearch] = useState("");

  console.log(search);
  // console.log(loggedUserAppliedVisa);

  useEffect(() => {
    fetch(`https://visa-pilot-server.vercel.app/appliedUsers?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMyAppliedVisa(
          data.filter((loggedUser) => loggedUser?.email === user?.email)
        );
      });
  }, [search]);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-6 font-montserrat">
        My Visa Applications
      </h1>

      {/* Search Bar */}
      <div className="w-9/12 mx-auto relative my-6">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="border border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md"
        />
        <span className="btn rounded-none bg-cyan-500 text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-cyan-400">
          Search
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto mb-6">
        {myAppliedVisa?.map((visa) => (
          <MyAppliedVisa
            key={visa._id}
            visa={visa}
            myAppliedVisa={myAppliedVisa}
            setMyAppliedVisa={setMyAppliedVisa}
          ></MyAppliedVisa>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;
