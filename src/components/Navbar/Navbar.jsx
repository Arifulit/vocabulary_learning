

import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the menu

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full min-h-20 bg-blue-500 text-white backdrop-blur-lg flex justify-between items-center px-4 md:px-10 z-50">
      {/* Left Side: Hamburger Icon for Mobile & Logo */}
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none mr-4 md:hidden"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <div className="flex items-center">
          {/* Logo image resized for better responsiveness */}
          <img
            src="https://w7.pngwing.com/pngs/119/1012/png-transparent-computer-icons-vocabulary-youtube-notification-angle-text-logo-thumbnail.png"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full" // Resized logo
          />
        </div>
      </div>

      {/* Center: Links for Larger Devices */}
      <div className="hidden md:flex space-x-6">
        <NavLink to="/" className="hover:text-yellow-300 transition duration-300">Home</NavLink>
        <NavLink to="/start-learning" className="hover:text-yellow-300 transition duration-300">Start Learning</NavLink>
        <NavLink to="/tutorials" className="hover:text-yellow-300 transition duration-300">Tutorials</NavLink>
        <NavLink to="/aboutUs" className="hover:text-yellow-300 transition duration-300">About Us</NavLink>
        <NavLink to="/my-profile" className="hover:text-yellow-300 transition duration-300">My Profile</NavLink>
        <NavLink to="/tutorial-page" className="hover:text-yellow-300 transition duration-300">Tutorial Page</NavLink>
      </div>

      {/* Right Side: Authentication buttons or User Profile */}
      <div className="flex items-center gap-4">
        {user && user?.email ? (
          <>
            {/* Display User Profile Image and Name */}
            <div className="flex items-center space-x-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <span className="text-white">{user.displayName || 'User'}</span>
              
              <button
                className="btn bg-orange-300 hover:bg-orange-400 text-black py-2 px-4 rounded-md"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/register" className="hidden md:block">
              <button className="btn bg-orange-300 hover:bg-orange-400 text-black py-2 px-4 rounded-md">
                Register
              </button>
            </NavLink>
            <NavLink to="/login">
              <button className="btn bg-orange-300 hover:bg-orange-400 text-black py-2 px-4 rounded-md">
                Login
              </button>
            </NavLink>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-500 text-white p-6 space-y-4 md:hidden">
          <NavLink to="/" className="block hover:text-yellow-300 transition duration-300" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/start-learning" className="block hover:text-yellow-300 transition duration-300" onClick={toggleMenu}>Start Learning</NavLink>
          <NavLink to="/tutorials" className="block hover:text-yellow-300 transition duration-300" onClick={toggleMenu}>Tutorials</NavLink>
          <NavLink to="/aboutUs" className="block hover:text-yellow-300 transition duration-300" onClick={toggleMenu}>About Us</NavLink>
          <NavLink to="/my-profile" className="block hover:text-yellow-300 transition duration-300" onClick={toggleMenu}>My Profile</NavLink>
          <NavLink to="/tutorial-page" className="block hover:text-yellow-300 transition duration-300" onClick={toggleMenu}>Tutorial Page</NavLink>

          {/* Register or Profile Button for Mobile View */}
          {user && user?.email ? (
            <div className="flex items-center space-x-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <span className="text-white">{user.displayName }</span>
              <button
                className="btn bg-orange-300 hover:bg-orange-400 text-black py-2 px-4 rounded-md w-full"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <NavLink to="/register" className="block hover:text-yellow-300 transition duration-300 w-full" onClick={toggleMenu}>
                <button className="btn bg-orange-300 hover:bg-orange-400 text-black py-2 px-4 rounded-md w-full">
                  Register
                </button>
              </NavLink>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
