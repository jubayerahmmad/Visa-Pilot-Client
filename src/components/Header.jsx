import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/visapilot-logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative  boxShadow px-[10px] py-[8px] font-montserrat bg-gray-50">
      <Link to="/">
        <img src={logo} alt="logo" className="w-32 object-cover" />
      </Link>
      <ul className="items-center gap-[20px] text-2xl  lg:flex hidden font-semibold">
        <NavLink to="/">
          <li className="hover:text-[#3B9DF8]">Home</li>
        </NavLink>
        <NavLink to="/allVisas">
          <li className="hover:text-[#3B9DF8]">All Visas</li>
        </NavLink>
        <NavLink to="/addVisa">
          <li className="hover:text-[#3B9DF8]">Add Visa</li>
        </NavLink>
        <NavLink to="/myAddedVisas">
          <li className="hover:text-[#3B9DF8]">My Visas</li>
        </NavLink>
        <NavLink to="/myVisaApplicaton">
          <li className="hover:text-[#3B9DF8]">My Applications</li>
        </NavLink>
      </ul>

      <div className="items-center gap-[10px] flex">
        <Link to="/register">
          <button className="py-[8px] font-semibold text-lg px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">
            Register
          </button>
        </Link>

        <CiMenuFries
          className="text-[1.8rem] mr-1 cursor-pointer lg:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col text-xl">
          <NavLink to="/">
            <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink to="/allVisas">
            <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
              All Visas
            </li>
          </NavLink>
          <NavLink to="/addVisa">
            <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
              Add Visa
            </li>
          </NavLink>
          <NavLink to="/myAddedVisas">
            <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
              My Added Visas
            </li>
          </NavLink>
          <NavLink to="/myVisaApplicaton">
            <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
              My Visa Applications
            </li>
          </NavLink>
        </ul>
      </aside>
    </nav>
  );
};

export default Header;
