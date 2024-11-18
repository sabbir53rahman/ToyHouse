import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../providers/AuthProvider";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user)

  const handleLogout = () =>{
    logOut()
    .then(res => {})
    .catch(error => console.log(error))
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar with full width and superhero color theme */}
      <nav className="bg-gradient-to-r from-blue-900 via-gray-900 to-black w-full p-4 shadow-md">
        {/* Inner content constrained within container */}
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Website Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Website Logo" className="h-16 w-16" />
            </Link>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="space-x-6 hidden md:flex items-center">
            <NavLink
              to="/"
              className="text-gray-300 hover:text-red-400 transition-colors duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/alltoys"
              className="text-gray-300 hover:text-red-400 transition-colors duration-300"
            >
              All Toys
            </NavLink>

            {/* Conditionally Rendered Links */}
            
              <>
                <NavLink
                  to="/mytoys"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  My Toys
                </NavLink>
                <NavLink
                  to="/addtoy"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  Add A Toy
                </NavLink>
              </>

            <NavLink
              to="/blog"
              className="text-gray-300 hover:text-red-400 transition-colors duration-300"
            >
              Blogs
            </NavLink>
          </div>

          {/* User Profile Section */}
          <div className="flex items-center">
            {user ? (
              <div className="relative flex group">
                {/* Profile Picture */}
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="h-12 w-12 rounded-full cursor-pointer border-4 text-blue-700 shadow-lg"
                />
                {/* Tooltip showing username on hover */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-3 py-2 rounded-lg hidden group-hover:block">
                  {user.displayName}
                </div>
                <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300 ml-4">
                  LogOut
                </button>
              </div>
            ) : (
              <NavLink to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300">
                  Login
                </button>
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-300 hover:text-blue-700 focus:outline-none"
              onClick={handleMenuToggle}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 transition-transform duration-300 ease-in-out transform z-10 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="relative">
            {/* Close Button */}
            <button
              className="absolute right-4 text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
            <div className="flex flex-col items-center mt-16 space-y-4">
              <NavLink
                to="/"
                className="text-gray-300 text-2xl hover:text-red-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/alltoys"
                className="text-gray-300 text-2xl hover:text-red-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                All Toys
              </NavLink>

              {/* Conditionally Rendered Links */}
              {user && (
                <>
                  <NavLink
                    to="/mytoys"
                    className="text-gray-300 text-2xl hover:text-red-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Toys
                  </NavLink>
                  <NavLink
                    to="/addtoy"
                    className="text-gray-300 text-2xl hover:text-red-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Add A Toy
                  </NavLink>
                </>
              )}

              <NavLink
                to="/blog"
                className="text-gray-300 text-2xl hover:text-red-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
