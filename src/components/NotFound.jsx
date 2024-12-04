import React from "react";
import notFoundAnimation from "../assets/404animation.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen font-montserrat">
      <div className="text-center">
        {/* Lottie animation */}
        <Lottie
          animationData={notFoundAnimation} // Path to your animation JSON
          loop={true} // Loop the animation
          autoplay={true} // Autoplay the animation
          className="w-full h-96" // Set the size of the animation
        />
        {/* Error message */}
        <h1 className="text-4xl font-semibold text-gray-800 mt-6">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn btn-sm lg:btn-md font-semibold text-lg rounded-full bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
