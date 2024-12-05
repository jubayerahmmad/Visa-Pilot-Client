import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
  const loadedDetails = useLoaderData();
  console.log(loadedDetails);
  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = loadedDetails;
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Country Image */}
        <img
          src={countryImage}
          alt=""
          className="w-full h-96 lg:h-[600px] object-cover"
        />

        <div className="p-6">
          {/* Country Name */}
          <h2 className="text-3xl font-bold mb-4">{countryName}</h2>

          {/* Visa Type */}
          <p className="text-lg font-medium mb-2">
            <span className="font-semibold">Visa Type:</span> {visaType}
          </p>

          {/* Processing Time */}
          <p className="text-lg font-medium mb-2">
            <span className="font-semibold">Processing Time:</span>{" "}
            {processingTime}
          </p>

          {/* Required Documents */}
          <p className="text-lg font-medium mb-2">
            <span className="font-semibold">Required Documents:</span>
          </p>
          <ul className="list-disc list-inside mb-4">
            {requiredDocuments.map((doc, index) => (
              <li key={index} className="text-gray-700">
                {doc}
              </li>
            ))}
          </ul>

          {/* Description */}
          <p className="text-lg font-medium mb-2">
            <span className="font-semibold">Description:</span>
          </p>
          <p className="text-gray-700 mb-4">{description}</p>

          {/* Age Restriction */}
          <p className="text-lg font-medium mb-2">
            <span className="font-semibold">Age Restriction:</span>{" "}
            {ageRestriction} years
          </p>

          {/* Fee */}
          <p className="text-lg font-medium mb-2">
            <span className="font-semibold">Fee:</span> ${fee}
          </p>

          {/* Validity */}
          <p className="text-lg font-medium mb-2">
            <span className="font-semibold">Validity:</span> {validity}
          </p>

          {/* Application Method */}
          <p className="text-lg font-medium mb-2">
            <span className="font-semibold">Application Method:</span>{" "}
            {applicationMethod}
          </p>

          {/* Apply Button */}
          <button className="btn rounded-full mt-6 bg-cyan-500 text-white px-6 py-3 hover:bg-cyan-600">
            Apply for Visa
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
