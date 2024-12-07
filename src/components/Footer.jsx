import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import logo from "../assets/visapilot-logo.png";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-gray-100 dark:bg-slate-800 p-10">
      <aside>
        <img className="w-48" src={logo} alt="" />

        <p className="font-lato font-bold text-gray-500 dark:text-gray-300">
          Unlock your visa journey with{" "}
          <span className="font-extrabold text-gray-800 dark:text-gray-100">
            Visa Pilot
          </span>
          . Explore visa options, apply with ease, and track your progress.
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-gray-600 dark:text-gray-200">
          <a className="cursor-pointer hover:text-[#3B9DF8]">
            <FaFacebook size={32}></FaFacebook>
          </a>
          <a className="cursor-pointer hover:text-[#3B9DF8]">
            <FaInstagram size={32}></FaInstagram>
          </a>
          <a className="cursor-pointer hover:text-[#3B9DF8]">
            <FaLinkedin size={32}></FaLinkedin>
          </a>
        </div>
        <div className="divider"></div>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-bold text-cyan-400">VisaPilot</span> ©{" "}
          {new Date().getFullYear()} - All right reserved
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
