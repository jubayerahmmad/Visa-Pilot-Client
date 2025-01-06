const AboutProgram = () => {
  return (
    <section className="bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-300 mb-2 font-montserrat underline underline-offset-8 animate__animated animate__fadeInDown">
          About <span className="text-cyan-400">Visa Pilot</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-lato">
          The Visa Pilot Program offers a streamlined process for individuals
          seeking international opportunities. Our goal is to make visa
          applications fast, easy, and accessible.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          <div
            className="bg-white dark:bg-slate-800 p-6 shadow-md rounded-lg"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-50 mb-4 font-montserrat">
              Key Benefits
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 font-lato">
              <li>Faster processing times</li>
              <li>Comprehensive support</li>
              <li>Access to global destinations</li>
            </ul>
          </div>

          <div
            className="bg-white dark:bg-slate-800 p-6 shadow-md rounded-lg"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-50 mb-4 font-montserrat">
              Eligibility Criteria
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-lato">
              Applicants must meet certain qualifications, including valid
              documentation and adherence to the program's guidelines.
            </p>
          </div>

          <div
            className="bg-white dark:bg-slate-800 p-6 shadow-md rounded-lg"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-50 mb-4 font-montserrat">
              Application Process
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-lato">
              Follow a simple 4-step process: apply online, submit documents,
              receive approval, and get your visa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;
