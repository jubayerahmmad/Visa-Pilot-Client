import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { RxCross1 } from "react-icons/rx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const loadedDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  // const [closeModal, setCloseModal] = useState(false);
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

  const handleApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const email = form.email.value;
    const fee = form.fee.value;
    const appliedUser = {
      fName,
      lName,
      email,
      fee,
      startDate,
      countryImage,
      countryName,
      visaType,
      processingTime,
      validity,
      applicationMethod,
    };
    // console.log(appliedUser);

    // console.log(closeModal);

    const modal = document.getElementById("my_modal_5");
    // send to appliedUsersdb
    fetch("https://visa-pilot-server.vercel.app/appliedUsers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appliedUser),
    })
      .then((res) => res.json())
      .then(() => {
        modal.close();
        Swal.fire({
          icon: "success",
          title: "Applied Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="container mx-auto p-8 font-montserrat">
      <div className="card lg:card-side gap-2 items-center bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden">
        {/* Country Image */}
        <div className="lg:w-2/5">
          <img
            src={countryImage}
            alt="countryImage"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Country details */}
        <div className="lg:w-3/5">
          <div className="p-6 dark:text-gray-300">
            <div className="flex items-center gap-4 mb-4">
              {/* Country Name */}
              <h2 className="text-3xl font-bold">{countryName}</h2>
              {/* Visa Type */}
              <p className="text-lg font-semibold badge badge-info badge-lg">
                {visaType}
              </p>
              {/* Fee */}
              <p className="text-lg font-bold italic">${fee}</p>
            </div>

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
                <li key={index} className="text-gray-700 dark:text-gray-400">
                  {doc}
                </li>
              ))}
            </ul>

            {/* Description */}
            <p className="text-lg font-medium mb-2">
              <span className="font-semibold">Description:</span>
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-4">
              {description}
            </p>

            {/* Age Restriction */}
            <p className="text-lg font-medium mb-2">
              <span className="font-semibold">Age Restriction:</span>
              {ageRestriction} years
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
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn border-none rounded-full mt-6 bg-cyan-500 text-white px-6 py-3 hover:bg-cyan-600"
            >
              Apply for Visa
            </button>
          </div>
        </div>
        {/* Modal */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box p-4">
            <div className="modal-action flex-col space-y-4">
              <form method="dialog">
                <button className="float-end">
                  <RxCross1 size={24}></RxCross1>
                </button>
              </form>
              <div className="space-y-2 text-center">
                <h1 className="font-bold text-2xl">Visa Application Form</h1>
                <p className="text-sm text-orange-400">
                  Ensure all fields are filled before submitting your
                  application.
                </p>
              </div>

              <form method="dialog" onSubmit={handleApply}>
                <div>
                  <label className="text-sm font-medium text-gray-700 my-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    className="mt-2 w-full border border-cyan-300 rounded-md shadow-sm p-4"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 my-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lName"
                    className="mt-2 w-full border border-cyan-300 rounded-md shadow-sm p-4"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 my-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    className="mt-2 w-full border border-cyan-300 rounded-md shadow-sm p-4"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 my-3">
                    Date
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="mt-2 w-full border border-cyan-300 rounded-md shadow-sm p-4"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 my-3">
                    Fee
                  </label>
                  <input
                    type="text"
                    name="fee"
                    defaultValue={`$${fee}`}
                    className="mt-2 w-full border border-cyan-300 rounded-md shadow-sm p-4"
                  />
                </div>
                <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white font-bold flex w-full my-4">
                  Apply
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default VisaDetails;
