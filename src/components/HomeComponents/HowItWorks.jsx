const HowItWorks = () => {
  const steps = [
    {
      title: "Submit Application",
      description:
        "Complete the online form with your personal details and upload required documents.",
    },
    {
      title: "Document Verification",
      description:
        "Our team will review your documents for accuracy and compliance.",
    },
    {
      title: "Approval Process",
      description:
        "Once verified, your application will move to the approval stage.",
    },
    {
      title: "Receive Visa",
      description: "Get your visa and start planning your journey!",
    },
  ];

  return (
    <section className="bg-blue-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2 underline underline-offset-4 font-montserrat animate__animated animate__fadeInDown">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-lato">
          Follow these simple steps to apply for the Visa Pilot Program and
          start your journey.
        </p>
        <div className="p-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <p className="w-[35px] h-[35px] flex items-center justify-center outline-2 outline outline-offset-[3px] outline-blue-500 bg-blue-500 rounded-full text-white text-[1rem]">
                    {index + 1}
                  </p>
                  <div className="w-[2px] h-[50px] bg-blue-500 mt-2"></div>
                </div>

                <div>
                  <h1 className="text-2xl text-gray-700 dark:text-gray-200 font-montserrat">
                    {step.title}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-lato">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
