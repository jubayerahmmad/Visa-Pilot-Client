import Swal from "sweetalert2";

const MyAppliedVisa = ({ visa, myAppliedVisa, setMyAppliedVisa }) => {
  const {
    _id,
    fName,
    lName,
    email,
    countryImage,
    countryName,
    visaType,
    applicationMethod,
    fee,
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
        fetch(`https://visa-pilot-server.vercel.app/appliedUsers/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
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
    <tr className="bg-blue-200 dark:bg-gray-900 text-gray-800 dark:text-blue-100 border-b border-blue-400">
      <th scope="row" class="flex items-center px-6 py-4 whitespace-nowrap">
        <img
          className="w-10 h-10 rounded-full"
          src={countryImage}
          alt="Jese image"
        />
        <div className="ps-3">
          <h3 className="text-base font-semibold">{countryName}</h3>
          <p className="font-normal text-gray-500">{applicationMethod}</p>
        </div>
      </th>
      <td className="px-6 py-4 font-medium">
        <div className="ps-3">
          <h3 className="text-base font-semibold">{`${fName}  ${lName}`}</h3>
          <p className="font-normal text-gray-500">{email}</p>
        </div>
      </td>
      <td className="px-6 py-4 font-medium">{visaType}</td>
      <td className="px-6 py-4 font-medium">{fee}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleCancel(_id)}
          className="font-medium text-black dark:text-blue-100 hover:underline"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default MyAppliedVisa;
