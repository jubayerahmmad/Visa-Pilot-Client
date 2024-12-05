import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
  const loadedDetails = useLoaderData();
  console.log(loadedDetails);
  return <div></div>;
};

export default VisaDetails;
