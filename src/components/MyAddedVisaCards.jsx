import Swal from "sweetalert2";

const MyAddedVisaCards = ({ visa, myVisa, setMyVisa }) => {
  const {
    _id,
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = visa;
  const handleDelete = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-pilot-server.vercel.app/allVisas/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Visa has been deleted.",
                icon: "success",
              });

              // update ui
              const remaining = myVisa.filter((visa) => visa._id !== id);
              setMyVisa(remaining);
            }
          });
      }
    });
  };
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
            <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white">
              Edit
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 hover:bg-red-700 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddedVisaCards;
