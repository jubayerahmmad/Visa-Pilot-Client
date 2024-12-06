import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AllVisas from "../pages/AllVisas";
import MyAddedVisa from "../pages/MyAddedVisa";
import AddVisa from "../pages/AddVisa";
import MyVisaApplications from "../pages/MyVisaApplications";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../components/NotFound";
import VisaDetails from "../components/VisaDetails";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://visa-pilot-server.vercel.app/allVisas"),
      },
      {
        path: "/allVisas",
        element: <AllVisas></AllVisas>,
        loader: () => fetch("https://visa-pilot-server.vercel.app/allVisas"),
      },
      {
        path: "/visaDetails/:id",
        element: (
          <PrivateRoute>
            <VisaDetails></VisaDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://visa-pilot-server.vercel.app/allVisas/${params.id}`),
      },
      {
        path: "/myAddedVisas",
        element: (
          <PrivateRoute>
            <MyAddedVisa></MyAddedVisa>
          </PrivateRoute>
        ),
        loader: () => fetch("https://visa-pilot-server.vercel.app/allVisas"),
      },
      {
        path: "/addVisa",
        element: (
          <PrivateRoute>
            {" "}
            <AddVisa></AddVisa>
          </PrivateRoute>
        ),
      },
      {
        path: "/myVisaApplicaton",
        element: (
          <PrivateRoute>
            <MyVisaApplications></MyVisaApplications>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://visa-pilot-server.vercel.app/appliedUsers"),
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
