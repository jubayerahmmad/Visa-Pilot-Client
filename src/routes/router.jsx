import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AllVisas from "../pages/AllVisas";
import MyAddedVisa from "../pages/MyAddedVisa";
import AddVisa from "../pages/AddVisa";
import MyVisaApplications from "../pages/MyVisaApplications";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allVisas",
        element: <AllVisas></AllVisas>,
      },
      {
        path: "/myAddedVisas",
        element: <MyAddedVisa></MyAddedVisa>,
      },
      {
        path: "/addVisa",
        element: <AddVisa></AddVisa>,
      },
      {
        path: "/myVisaApplicaton",
        element: <MyVisaApplications></MyVisaApplications>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
