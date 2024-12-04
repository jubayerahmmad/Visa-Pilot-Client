const AboutProgram = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8 font-montserrat">
          About the <span className="text-cyan-400">Visa Pilot</span> Program
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6 font-lato">
          The Visa Pilot Program offers a streamlined process for individuals
          seeking international opportunities. Our goal is to make visa
          applications fast, easy, and accessible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 font-montserrat">
              Key Benefits
            </h3>
            <ul className="list-disc list-inside text-gray-600 font-lato">
              <li>Faster processing times</li>
              <li>Comprehensive support</li>
              <li>Access to global destinations</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 font-montserrat">
              Eligibility Criteria
            </h3>
            <p className="text-gray-600 font-lato">
              Applicants must meet certain qualifications, including valid
              documentation and adherence to the program's guidelines.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 font-montserrat">
              Application Process
            </h3>
            <p className="text-gray-600 font-lato">
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
