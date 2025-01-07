import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import logo from "../assets/visapilot-logo.png";
const Footer = () => {
  return (
    <footer className="footer footer-center gap-6 leading-none bg-blue-200 dark:bg-slate-800 p-6">
      <div>
        <img className="w-36 object-cover" src={logo} alt="logo" />

        <p className="font-lato font-bold text-gray-500 dark:text-gray-300">
          Unlock your visa journey with{" "}
          <span className="font-extrabold text-gray-800 dark:text-gray-100">
            Visa Pilot{" "}
          </span>
          Explore visa options, apply with ease, and track your progress.
        </p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-gray-600 dark:text-gray-200">
          <a
            href="https://www.facebook.com/zubayerahmmad.1"
            target="_blank"
            className="cursor-pointer hover:text-[#3B9DF8]"
          >
            <FaFacebook size={32}></FaFacebook>
          </a>
          <a
            href="https://www.instagram.com/zubayerrrrrrr"
            target="_blank"
            className="cursor-pointer hover:text-[#3B9DF8]"
          >
            <FaInstagram size={32}></FaInstagram>
          </a>
          <a
            href="https://www.linkedin.com/in/jubayer-ahmmad073"
            target="_blank"
            className="cursor-pointer hover:text-[#3B9DF8]"
          >
            <FaLinkedin size={32}></FaLinkedin>
          </a>
          <a
            href="https://github.com/jubayerahmmad"
            target="_blank"
            className="cursor-pointer hover:text-[#3B9DF8]"
          >
            <FaGithub size={32}></FaGithub>
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-bold text-cyan-500">VisaPilot</span> ©{" "}
          {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
