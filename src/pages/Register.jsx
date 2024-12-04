import Lottie from "lottie-react";
import registerAnimation from "../assets/register-animation.json";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = { name, email, password, photo };
    console.log(newUser);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login clicked");
  };

  return (
    <div className="p-6 font-montserrat w-10/12 mx-auto rounded-2xl my-8  border border-cyan-500 shadow-md">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Register Now
      </h2>
      <p className="font-semibold text-center mb-4">
        Already Have an Account?{" "}
        <Link to="/login">
          <span className="font-bold text-cyan-500">Login</span>
        </Link>
      </p>
      <div className="lg:flex items-center justify-center">
        {/* Form */}
        <div className="lg:w-1/2 lg:p-8">
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
              />
            </div>

            {/* Photo URL Input */}
            <div>
              <label
                htmlFor="photoUrl"
                className="text-sm font-medium text-gray-600"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                required
                className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
              />
            </div>

            {/* Register Button */}
            <div>
              <button
                type="submit"
                className="w-full btn bg-cyan-400 text-white py-3 rounded-full hover:bg-cyan-500"
              >
                Register
              </button>
            </div>
          </form>

          <div className="divider">OR</div>
          {/* Login with Google Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleGoogleLogin}
              className="w-full btn btn-outline py-3 rounded-full"
            >
              <FaGoogle></FaGoogle> Login with Google
            </button>
          </div>
        </div>

        {/* Lottie animation */}
        <div className="lg:w-1/2">
          <Lottie
            animationData={registerAnimation} // Path to your animation JSON
            loop={true} // Loop the animation
            autoplay={true} // Autoplay the animation
            className="w-full h-96" // Set the size of the animation
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
