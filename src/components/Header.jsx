import { useContext, useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/visapilot-logo.png";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { AuthContext } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";

const Header = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { user } = useContext(AuthContext);

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
    <div className="w-full bg-blue-200 sticky top-0 z-10 dark:bg-slate-800">
      <nav className="flex items-center justify-between relative w-11/12 lg:w-10/12 mx-auto boxShadow font-montserrat">
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

          {user && (
            <>
              <NavLink to="/addVisa">
                <li className="hover:text-[#3B9DF8]">Add Visa</li>
              </NavLink>
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
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-8 lg:w-10 rounded-full ring-2 ring-cyan-500">
                    <img
                      alt="user image"
                      referrerPolicy="no-refferer"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="text-cyan-600">{user?.displayName}</a>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-sm font-semibold text-lg rounded-md border-none outline-none bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="btn btn-sm font-semibold text-lg rounded-md border-none outline-none bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
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

            {user && (
              <>
                <NavLink to="/addVisa">
                  <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
                    Add Visa
                  </li>
                </NavLink>
                <NavLink to="/myAddedVisas">
                  <li className="hover:text-[#3B9DF8]">My Visa</li>
                </NavLink>
                <NavLink to="/myVisaApplicaton">
                  <li className="hover:text-[#3B9DF8]">My Applications</li>
                </NavLink>
              </>
            )}
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Header;
