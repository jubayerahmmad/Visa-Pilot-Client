import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { FaPlaneDeparture } from "react-icons/fa6";
import { FcApproval, FcDocument } from "react-icons/fc";

const HowItWorks = () => {
  const steps = [
    {
      title: "Submit Application",
      description:
        "Complete the online form with your personal details and upload required documents.",
      icon: <FcDocument></FcDocument>,
    },
    {
      title: "Document Verification",
      description:
        "Our team will review your documents for accuracy and compliance.",
      icon: <CgFileDocument className="dark:text-white"></CgFileDocument>,
    },
    {
      title: "Approval Process",
      description:
        "Once verified, your application will move to the approval stage.",
      icon: <FcApproval></FcApproval>,
    },
    {
      title: "Receive Visa",
      description: "Get your visa and start planning your journey!",
      icon: <FaPlaneDeparture className="dark:text-white"></FaPlaneDeparture>,
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-16 px-8 md:px-20">
      <div className="w-11/12 mx-auto text-center">
        <h2
          className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8 font-montserrat"
          data-aos="fade-right"
        >
          How It Works
        </h2>
        <p
          className="text-lg text-gray-600 dark:text-gray-300 mb-12 font-lato"
          data-aos="fade-right"
        >
          Follow these simple steps to apply for the Visa Pilot Program and
          start your journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 dark:bg-slate-800 p-8 rounded-lg shadow-md"
              data-aos="flip-left"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-50 mb-4 font-montserrat">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center font-lato">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
