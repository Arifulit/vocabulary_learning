import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const { handleGoogleLogin,setUser } = useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Firebase auth instance
  const auth = getAuth();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    // Clear any previous errors if validation passes
    setError("");

    // Firebase function to create a new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // setUser(user); // Set the user in the AuthProvider
        // Update user profile with name and photo URL
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            // Show a welcome message with the user's name
            alert(`Welcome, ${name}! Registration is complete.`);

            // Navigate to the profile page after successful registration
            navigate("/");
          })
          .catch((err) => {
            // console.error("Profile Update Error:", err.message);
            setError(err.message); // Display error message
          });
      })
      .catch((err) => {
        // console.error("Registration Error:", err.message);
        setError(err.message); // Display error message
      });
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    handleGoogleLogin()
      .then((result) => {
        // Show a welcome message with the user's name
        alert(`Welcome, ${result.user.displayName || result.user.email}!`);

        // Navigate to the home page after successful Google sign-in
        navigate("/my-profile");
      })
      .catch((err) => {
        // console.error("Google Sign-In Error:", err.message);
        setError(err.message); // Display error message
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full mt-16 max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Register Now!</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-800 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-800 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-800 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              required
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
              className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-800 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300 mb-4"
          >
            Sign in with Google
          </button>
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;



