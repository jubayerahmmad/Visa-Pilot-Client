import { useContext } from "react";
import logo from "../assets/visapilot-logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";

const Header = () => {
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
    <div className="w-full bg-blue-200 sticky top-0 z-50 dark:bg-slate-800">
      <nav className="flex items-center justify-between relative w-11/12 lg:w-10/12 mx-auto boxShadow font-montserrat">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 lg:w-32 object-cover" />
        </Link>

        <div className="items-center gap-[10px] flex">
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
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co.com/KVqSkwf/silver-gradient-social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standin.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">
                <li className="hover:text-[#3B9DF8] text-lg">Home</li>
              </NavLink>

              <NavLink to="/allVisas">
                <li className="hover:text-[#3B9DF8] text-lg">All Visa</li>
              </NavLink>
              <NavLink to="/faq">
                <li className="hover:text-[#3B9DF8] text-lg">FAQs</li>
              </NavLink>
              {user && (
                <>
                  <NavLink to="/addVisa">
                    <li className=" hover:text-[#3B9DF8] text-lg">Add Visa</li>
                  </NavLink>
                  <NavLink to="/myAddedVisas">
                    <li className=" hover:text-[#3B9DF8] text-lg">My Visa</li>
                  </NavLink>
                  <NavLink to="/myVisaApplicaton">
                    <li className=" hover:text-[#3B9DF8] text-lg">
                      My Applications
                    </li>
                  </NavLink>
                </>
              )}
              {user ? (
                <>
                  <li
                    className="hover:text-[#3B9DF8] text-lg cursor-pointer"
                    onClick={handleLogOut}
                  >
                    Logout
                  </li>
                </>
              ) : (
                <>
                  <Link className="hover:text-[#3B9DF8] text-lg" to="/login">
                    Login
                  </Link>

                  <Link className="hover:text-[#3B9DF8] text-lg" to="/register">
                    Register
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
