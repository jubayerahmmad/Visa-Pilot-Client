import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";

const MyAppliedVisa = ({ visa, myAppliedVisa, setMyAppliedVisa }) => {
  // console.log("Applied Users", visa);

  const {
    _id,
    fName,
    lName,
    email,
    countryImage,
    countryName,
    validity,
    visaType,
    applicationMethod,
    fee,
    processingTime,
  } = visa;

  const handleCancel = (id) => {
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
        fetch(`http://localhost:5000/appliedUsers/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Application to Visa is Cancelled.",
                icon: "success",
              });
              // update ui
              const remaining = myAppliedVisa.filter((visa) => visa._id !== id);
              setMyAppliedVisa(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="font-montserrat">
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

          {/* Applicants name */}
          <p className="text-lg font-medium mb-1">
            <span className="font-semibold">Applicant's Name:</span>{" "}
            {`${fName} ${lName}`}
          </p>

          {/* Applicants name */}
          <p className="text-lg font-medium mb-1">
            <span className="font-semibold">Applicant's Email:</span> {email}
          </p>

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
            <span className="font-semibold">Fee:</span> {fee}
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
            <button
              onClick={() => handleCancel(_id)}
              className="btn bg-cyan-500 hover:bg-cyan-700 text-white text-xl"
            >
              <MdCancel size={28}></MdCancel> Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppliedVisa;
