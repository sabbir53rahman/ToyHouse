import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between md:items-start mb-12">
          {/* Logo and About Avengers Section */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 mb-12 md:mb-0">
            <img src={logo} alt="Website Logo" className="h-20 w-20 mb-4" />
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-6">About Avengers</h4>
              <p className="text-lg leading-relaxed">
                Join the Avengers and become part of the greatest team of heroes
                in the Marvel universe! Our collection features action figures,
                collectibles, and more from your favorite Avengers characters.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-12 md:mb-0 px-4">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/alltoys"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  All Toys
                </Link>
              </li>
              <li>
                <Link
                  to="/mytoys"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  My Toys
                </Link>
              </li>
              <li>
                <Link
                  to="/addtoy"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  Add A Toy
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-12 md:mb-0 px-4">
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@herotoys.com"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  info@toyhouse.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>Address: 123 Hero Lane, Avenger City, Marvel State, 45678</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm">&copy; 2024 Toy House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
