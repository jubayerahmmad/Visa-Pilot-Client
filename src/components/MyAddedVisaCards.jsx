const MyAddedVisaCards = ({ visa }) => {
  console.log(visa);
  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = visa;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-64 w-full object-cover"
            src={countryImage}
            alt="name"
          />
        </figure>
        <div className="card-body">
          {/* Country Name */}
          <h2 className="text-3xl font-bold mb-4">{countryName}</h2>

          {/* Visa Type */}
          <p className="text-lg font-medium mb-1">
            <span className="font-semibold">Visa Type:</span> {visaType}
          </p>

          {/* Processing Time */}
          <p className="text-lg font-medium mb-1">
            <span className="font-semibold">Processing Time:</span>{" "}
            {processingTime}
          </p>
          {/* Fee */}
          <p className="text-lg font-medium mb-1">
            <span className="font-semibold">Fee:</span> ${fee}
          </p>

          {/* Validity */}
          <p className="text-lg font-medium mb-1">
            <span className="font-semibold">Validity:</span> {validity}
          </p>

          {/* Application Method */}
          <p className="text-lg font-medium mb-1">
            <span className="font-semibold">Application Method:</span>{" "}
            {applicationMethod}
          </p>
          <div className="card-actions">
            <button className="btn bg-cyan-500 text-white">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddedVisaCards;
