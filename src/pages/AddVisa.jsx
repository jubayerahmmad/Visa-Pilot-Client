import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "Tourist visa",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
    userEmail: user?.email,
  });

  const handleInputChange = (e) => {
    // console.log(e.target);
    const { name, value, type, checked } = e.target;
    // console.log(e.target.name);
    // console.log(e.target.checked);
    // console.log(e.target.type);
    // console.log(e.target.value);

    if (type === "checkbox") {
      // const newDocuments = checked && [...formData.requiredDocuments, value]; // doesn't work ,throws error if unchecked
      const newDocuments = checked
        ? [...formData.requiredDocuments, value]
        : formData.requiredDocuments.filter((doc) => doc !== value); // removes from aerray if unchecked

      setFormData({ ...formData, requiredDocuments: newDocuments });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    fetch("https://visa-pilot-server.vercel.app/allVisas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Visa Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        setFormData({
          countryImage: "",
          countryName: "",
          visaType: "Tourist visa",
          processingTime: "",
          requiredDocuments: [],
          description: "",
          ageRestriction: "",
          fee: "",
          validity: "",
          applicationMethod: "",
          userEmail: user?.email,
        });
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Visa</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Country Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country Image URL
          </label>
          <input
            type="url"
            name="countryImage"
            value={formData.countryImage}
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
            value={formData.countryName}
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
            value={formData.visaType}
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
            value={formData.processingTime}
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
              <span className="ml-2">Recent passport-sized photograph</span>
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
            value={formData.description}
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
            value={formData.ageRestriction}
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-4"
            placeholder="Enter minimum age"
          />
        </div>

        {/* Fee */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Fee</label>
          <input
            type="number"
            name="fee"
            value={formData.fee}
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
            value={formData.validity}
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
            value={formData.applicationMethod}
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
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisa;
