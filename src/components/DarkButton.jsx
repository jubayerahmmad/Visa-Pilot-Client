import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkButton = () => {
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
  return (
    <div className="absolute top-2/3 left-0 duration-300">
      {/* medium */}
      <div
        className={`${
          isDarkMode ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-8 h-16 p-1 transition-colors duration-500 rounded-lg z-30 fixed`}
      >
        <div
          className={`${
            isDarkMode
              ? "translate-y-[26px] rotate-[90deg]"
              : "translate-x-[0px] rotate-[0deg]"
          } w-6 h-6 transition-all duration-500 rounded-md cursor-pointer bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
          onClick={() => setIsDarkMode(!isDarkMode)}
        ></div>
      </div>
    </div>
  );
};

export default DarkButton;
