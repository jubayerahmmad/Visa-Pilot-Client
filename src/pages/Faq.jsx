import { useState } from "react";
import faqPNG from "../assets/FAQs-amico.png";
import { FaQuestion } from "react-icons/fa6";

const Faq = () => {
  const [bgAccording, setBgAccording] = useState(null);
  // accordion data
  const accordionData = [
    {
      title: "What is the purpose of this app?",
      description:
        "This app is designed to simplify the visa application process by providing step-by-step guidance, tracking tools, and access to important resources.",
    },
    {
      title: "Can I apply for multiple types of visas through this app?",
      description:
        "Yes, you can apply for various visa types, such as tourist, student, and work visas, depending on your destination and requirements.",
    },
    {
      title: "Do I need to create an account to use this app?",
      description: `Yes, creating an account allows you to save your application progress, track your visa status, and receive important updates.`,
    },

    {
      title: `Is there a fee to use this app?`,
      description: `No, using this app is free. However, visa application fees depend on the type of visa and the issuing country.`,
    },

    {
      title: `How long does the visa application process take?`,
      description: `The processing time depends on the type of visa and the issuing country. You can check estimated timelines in the “Visa Information” section of the app.`,
    },
  ];

  const handlebgAccording = (index) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="max-w-7xl mx-auto font-montserrat content-center">
      <div className="text-center text-2xl lg:text-5xl dark:text-white font-bold my-6">
        <h3 className="flex gap-2 items-center justify-center">
          Frequently Asked Questions{" "}
          <span className="animate-pulse">
            <FaQuestion size={46}></FaQuestion>{" "}
          </span>{" "}
        </h3>
      </div>
      <div className="lg:flex mx-6 mb-6 lg:mb-0 gap-3 items-center justify-center">
        <div className="flex justify-center">
          <img className="w-[450px]" src={faqPNG} alt="" />
        </div>

        <div className="flex gap-3 flex-col w-full my-6">
          {accordionData?.map((according, index) => (
            <article key={index} className="bg-[#e5eaf2] rounded">
              <div
                className="flex gap-2 cursor-pointer items-center justify-between w-full bg-gray-700 p-3 rounded"
                onClick={() => handlebgAccording(index)}
              >
                <h2 className={` text-[#ffffff] font-[600] text-[1.2rem]`}>
                  {according.title}
                </h2>
                <svg
                  className="fill-[#ffffff] shrink-0 ml-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      bgAccording === index && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      bgAccording === index && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
              <div
                className={`grid transition-all duration-300 overflow-hidden ease-in-out bg-gray-100 ${
                  bgAccording === index
                    ? "grid-rows-[1fr] opacity-100 p-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="text-[#424242] text-[0.9rem] overflow-hidden">
                  {according.description}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
