import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loaderAnimation from "../assets/loader.json";
import Lottie from "lottie-react";
const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (loader) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Lottie
          animationData={loaderAnimation} // Path to your animation JSON
          loop={true} // Loop the animation
          autoplay={true} // Autoplay the animation
          className="w-full h-96" // Set the size of the animation
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={pathname}></Navigate>;
};

export default PrivateRoute;
