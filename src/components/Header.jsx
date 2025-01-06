import { useContext, useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/visapilot-logo.png";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { AuthContext } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "User Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <div className="w-full bg-blue-200 dark:bg-slate-800">
      <nav className="flex items-center justify-between relative lg:w-10/12 mx-auto boxShadow font-montserrat">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 lg:w-32 object-cover" />
        </Link>
        <ul className="items-center gap-12 text-2xl  xl:flex hidden font-semibold dark:text-white">
          <NavLink to="/">
            <li className="hover:text-[#3B9DF8]">Home</li>
          </NavLink>
          <NavLink to="/allVisas">
            <li className="hover:text-[#3B9DF8]">All Visa</li>
          </NavLink>
          <NavLink to="/addVisa">
            <li className="hover:text-[#3B9DF8]">Add Visa</li>
          </NavLink>
          {user && (
            <>
              <NavLink to="/myAddedVisas">
                <li className="hover:text-[#3B9DF8]">My Visa</li>
              </NavLink>
              <NavLink to="/myVisaApplicaton">
                <li className="hover:text-[#3B9DF8]">My Applications</li>
              </NavLink>
            </>
          )}
        </ul>

        <div className="items-center gap-[10px] flex">
          <button
            className=" dark:text-gray-200 p-1 lg:p-2 border border-blue-800 rounded-full"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            {isDarkMode ? (
              <MdOutlineLightMode size={20}></MdOutlineLightMode>
            ) : (
              <MdOutlineDarkMode size={20}></MdOutlineDarkMode>
            )}
          </button>

          {user ? (
            <>
              <div className="avatar cursor-pointer">
                <div
                  className="ring-cyan-400 ring-offset-base-100 w-6 lg:w-10 rounded-full ring ring-offset-2"
                  data-tooltip-id="avatar-tooltip"
                  data-tooltip-offset={10}
                >
                  <img
                    src={`${user.photoURL ? user.photoURL : <FaUser></FaUser>}`}
                  />
                </div>
              </div>
              {/* Tooltip with dropdown */}
              <Tooltip
                id="avatar-tooltip"
                place="right"
                className="z-50"
                clickable={true}
                effect="solid"
                delayHide={100}
                offset={{ right: 20 }}
              >
                <div className="bg-white border border-gray-200 rounded shadow-lg w-40 p-4">
                  <p className="text-gray-700 font-semibold mb-2">
                    {user.displayName}
                  </p>
                  <Link>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm w-full lg:btn-md dark:border-none dark:outline-none font-semibold text-lg  bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 "
                    >
                      Log Out
                    </button>
                  </Link>
                </div>
              </Tooltip>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-sm lg:btn-md font-semibold text-lg rounded-md border-none outline-none bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="btn btn-sm lg:btn-md font-semibold text-lg rounded-md border-none outline-none bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
                  Register
                </button>
              </Link>
            </>
          )}

          {mobileSidebarOpen ? (
            <CgClose
              className="text-3xl mr-1 dark:text-white cursor-pointer xl:hidden flex"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            />
          ) : (
            <CiMenuFries
              className="text-3xl mr-1 dark:text-white cursor-pointer xl:hidden flex"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            />
          )}
        </div>

        <aside
          className={` ${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-0 opacity-0 z-[-1]"
          } xl:hidden bg-white dark:bg-slate-800 boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
        >
          <ul className="items-center gap-12 text-[1rem] text-gray-600 dark:text-gray-100 flex flex-col text-xl">
            <NavLink to="/">
              <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
                Home
              </li>
            </NavLink>
            <NavLink to="/allVisas">
              <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
                All Visa
              </li>
            </NavLink>
            <NavLink to="/addVisa">
              <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
                Add Visa
              </li>
            </NavLink>
            {user && (
              <>
                <NavLink to="/myAddedVisas">
                  <li className="hover:text-[#3B9DF8]">My Visa</li>
                </NavLink>
                <NavLink to="/myVisaApplicaton">
                  <li className="hover:text-[#3B9DF8]">My Applications</li>
                </NavLink>
              </>
            )}
            {user ? (
              <>
                <Link>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm lg:btn-md dark:border-none dark:outline-none font-semibold text-lg rounded-md bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 "
                  >
                    Log Out
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn btn-sm lg:btn-md font-semibold text-lg rounded-md dark:border-none dark:outline-none bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
                    Login
                  </button>
                </Link>

                <Link to="/register">
                  <button className="btn btn-sm lg:btn-md font-semibold text-lg rounded-md dark:border-none dark:outline-none bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
                    Register
                  </button>
                </Link>
              </>
            )}
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Header;
