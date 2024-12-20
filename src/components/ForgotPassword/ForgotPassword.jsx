
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the email from the query parameter
  const queryParams = new URLSearchParams(location.search);
  const emailFromLogin = queryParams.get("email");

  const [email, setEmail] = useState(emailFromLogin || "");
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    if (!email) {
      setError("Please provide a valid email.");
      return;
    }

    // Redirect the user to Gmail with a pre-filled subject
    window.location.href = `mailto:${email}?subject=Password Reset Request&body=Please follow the instructions to reset your password.`;

    // Optionally redirect back to the login page after a few seconds
    setTimeout(() => {
      navigate("/login");
    }, 2000);

    // Show success message
    toast.success('A password reset link has been sent to your email.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Forgot Password</h1>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
            placeholder="Enter your email"
          />
        </div>

        <button
          onClick={handleResetPassword}
          className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Reset Password
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgotPassword;
