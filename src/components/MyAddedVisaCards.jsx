import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
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

  // console.log(_id);

  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  const [selectedVisa, setSelectedVisa] = useState(null);

  const handleShowModal = (visa) => {
    document.getElementById(`${_id}`).showModal();
    setSelectedVisa(visa);
  };

  // update

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const newDocuments = checked
        ? [...formData.requiredDocuments, value]
        : formData.requiredDocuments.filter((doc) => doc !== value);

      setFormData({ ...formData, requiredDocuments: newDocuments });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdate = (id) => {
    // console.log("update", id);

    const modal = document.getElementById(`${_id}`);
    fetch(`https://visa-pilot-server.vercel.app/allVisas/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        modal.close();
        Swal.fire({
          icon: "success",
          title: "Visa Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        setMyVisa(formData && formData);
      });
  };

  // delete
  const handleDelete = (id) => {
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
            <button
              onClick={() => handleShowModal(visa)}
              className="btn bg-cyan-500 hover:bg-cyan-700 text-white"
            >
              <BiEditAlt size={28}></BiEditAlt> Edit
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 hover:bg-red-700 text-white"
            >
              <RiDeleteBin7Fill size={28}></RiDeleteBin7Fill> Delete
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div>
        <dialog id={_id} className="modal">
          {selectedVisa && (
            <div className="modal-box p-4">
              <div className="modal-action flex-col space-y-4">
                <form method="dialog">
                  <button className="btn float-end btn-circle">
                    <RxCross1 size={24}></RxCross1>
                  </button>
                </form>
                <div className="space-y-2 text-center">
                  <h1 className="font-bold text-2xl">Visa Updating Form</h1>
                  <h1 className="font-bold text-2xl">{selectedVisa._id}</h1>
                  <p className="text-sm text-orange-400">
                    Ensure all fields are checked before submitting your
                    application.
                  </p>
                </div>

                <form
                  method="dialog"
                  onSubmit={() => handleUpdate(selectedVisa._id)}
                  className="space-y-6"
                >
                  {/* Country Image */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country Image URL
                    </label>
                    <input
                      type="url"
                      name="countryImage"
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-4"
                      placeholder="Enter image URL"
                    />
                  </div>

                  {/* Country Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country Name
                    </label>
                    <input
                      type="text"
                      name="countryName"
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-4"
                      placeholder="Enter country name"
                    />
                  </div>

                  {/* Visa Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Visa Type
                    </label>
                    <select
                      name="visaType"
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-4"
                    >
                      <option value="Tourist Visa">Tourist Visa</option>
                      <option value="Student Visa">Student Visa</option>
                      <option value="Official Visa">Official Visa</option>
                    </select>
                  </div>

                  {/* Processing Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Processing Time
                    </label>
                    <input
                      type="text"
                      name="processingTime"
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-4"
                      placeholder="e.g., 10-15 business days"
                    />
                  </div>

                  {/* Required Docs */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Required Documents
                    </label>
                    <div className="mt-2 space-y-2 flex flex-col">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="requiredDocuments"
                          value="Valid Passport"
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-cyan-600 shadow-sm focus:ring-cyan-500 p-4"
                        />
                        <span className="ml-2">Valid Passport</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="requiredDocuments"
                          value="Visa application form"
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-cyan-600 shadow-sm focus:ring-cyan-500 p-4"
                        />
                        <span className="ml-2">Visa application form</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="requiredDocuments"
                          value="Recent passport-sized photograph"
                          onChange={handleInputChange}
                          className="rounded border-gray-300 text-cyan-600 shadow-sm focus:ring-cyan-500 p-4"
                        />
                        <span className="ml-2">
                          Recent passport-sized photograph
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      name="description"
                      onChange={handleInputChange}
                      rows="4"
                      className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-4"
                      placeholder="Enter visa description"
                    ></textarea>
                  </div>

                  {/* Age Restriction */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Age Restriction
                    </label>
                    <input
                      type="number"
                      name="ageRestriction"
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-4"
                      placeholder="Enter minimum age"
                    />
                  </div>

                  {/* Fee */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Fee
                    </label>
                    <input
                      type="number"
                      name="fee"
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-4"
                      placeholder="Enter visa fee"
                    />
                  </div>

                  {/* Validity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Validity
                    </label>
                    <input
                      type="text"
                      name="validity"
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-4"
                      placeholder="e.g., 6 months"
                    />
                  </div>

                  {/* Application Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Application Method
                    </label>
                    <input
                      type="text"
                      name="applicationMethod"
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-4"
                      placeholder="e.g., Online or in-person"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Update Visa
                  </button>
                </form>
              </div>
            </div>
          )}
        </dialog>
      </div>
    </div>
  );
};

export default MyAddedVisaCards;
