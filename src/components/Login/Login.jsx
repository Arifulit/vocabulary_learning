

import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import { toast } from 'react-toastify'; // Import toast from react-toastify

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Redirect to this page after login

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the login logic on button click
  const handleLoginClick = () => {
    if (!email || !password) {
      toast.error('Please fill in both email and password.'); // Show error if fields are empty
      return;
    }

    handleLogin(email, password)
      .then((result) => {
        // Show a welcome message with the user's name
        toast.success(`Welcome, ${result.user.displayName || result.user.email}!`);

        // Navigate to the home page (or the previous page)
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
        // Show an error message using toast
        toast.error('Invalid email or password. Please try again.');
      });
  };

  // Handle Google login
  const handleGoogle = () => {
    handleGoogleLogin()
      .then((result) => {
        // Show a welcome message with the user's name
        toast.success(`Welcome, ${result.user.displayName || result.user.email}!`);

        // Navigate to the home page (or the previous page)
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Google Login Error:", error.message);
        // Show an error message using toast
        toast.error('Google login failed. Please try again.');
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Login Now!</h1>
        </div>

        {/* Login Form */}
        <div className="space-y-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered bg-gray-50 border-gray-300 text-gray-800 w-full rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered bg-gray-50 border-gray-300 text-gray-800 w-full rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end">
              <Link
                to={`/forgot-password?email=${encodeURIComponent(email || '')}`}
                className="text-sm text-blue-500 hover:underline mt-2"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div className="form-control">
            <NavLink to="/">
              <button
                type="button" // Ensure the button does not submit the form by default
                onClick={handleLoginClick}
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </NavLink>
          </div>
        </div>

        {/* Google Sign-In Button */}
        <div className="text-center mt-6">
          <button
            onClick={handleGoogle}
            className="w-full bg-gray-100 border border-gray-300 py-3 rounded-md text-gray-700 hover:bg-gray-200 transition duration-300"
          >
            Sign in with Google
          </button>
        </div>

        {/* Link to Registration Page */}
        <p className="text-center mt-4 text-gray-600">
          New to this website? Please{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;

