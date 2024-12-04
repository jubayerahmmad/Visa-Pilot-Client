import Lottie from "lottie-react";
import loginAnimation from "../assets/login-animation.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa6";
const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        form.reset();
      })
      .catch((error) => {
        setError(error.code.split("/")[1].split("-").join(" ").toUpperCase());
      });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "Logged in Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
  };

  return (
    <div className="p-6 font-montserrat w-10/12 mx-auto rounded-2xl my-8  border border-cyan-500 shadow-md">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Login Here
      </h2>
      <p className="font-semibold text-center mb-4">
        Don't Have an Account?{" "}
        <Link to="/register">
          <span className="font-bold text-cyan-500">Register</span>
        </Link>
      </p>
      <div className="lg:flex items-center justify-center">
        {/* Form */}
        <div className="lg:w-1/2 lg:p-8">
          <form onSubmit={handleLogin} className="space-y-6">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {error && (
              <p className="font-bold font-montserrat text-red-500">{error}</p>
            )}

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full btn bg-cyan-400 text-white py-3 rounded-full hover:bg-cyan-500"
              >
                Login
              </button>
            </div>
          </form>

          <div className="divider">OR</div>
          {/* Login with Google Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              onClick={handleGoogleLogin}
              className="w-full btn btn-outline py-3 rounded-full"
            >
              <FaGoogle></FaGoogle> Login with Google
            </button>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="lg:w-1/2">
          <Lottie
            animationData={loginAnimation} // Path to your animation JSON
            loop={true} // Loop the animation
            autoplay={true} // Autoplay the animation
            className="w-full h-96" // Set the size of the animation
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
