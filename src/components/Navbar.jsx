import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo2.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  // Mengecek apakah ada token di localStorage (mengindikasikan bahwa pengguna sudah login)
  const isLoggedIn = localStorage.getItem("token");
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout successful!");
    window.location.reload();
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-50 rounded-b-2xl shadow-md">
      <div className="container flex items-center justify-between py-5">
        {/* Logo */}
        <div className="flex items-center space-x-5">
          <div className="">
            <img src={Logo} width={150} alt="Logo" />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-gray-800 font-semibold hover:text-gray-700 text-lg">
              Home
            </Link>
            <Link
              to="/"
              className="text-gray-800 font-semibold hover:text-gray-700 text-lg">
              Shop
            </Link>
            <Link
              to="/"
              className="text-gray-800 font-semibold hover:text-gray-700 text-lg">
              About
            </Link>
            <Link
              to="/"
              className="text-gray-800 font-semibold hover:text-gray-700 text-lg">
              Blogs
            </Link>
          </div>
        </div>
        <div className=""></div>
        <div className="flex items-center space-x-4">
          {!isLoggedIn && (
            <div className="flex space-x-4">
              <FaSearch className="text-gray-800 text-2xl" />
            </div>
          )}
          {/* Login Button */}
          {!isLoggedIn && (
            <Link
              to="/login"
              className="text-white font-semibold hover:text-gray-100 text-lg px-8 py-2 bg-blue-500 rounded-md">
              Login
            </Link>
          )}
          {/* Logout Button (optional, if needed) */}{" "}
          {isLoggedIn && (
            <div className="flex space-x-4">
              <FaSearch className="text-gray-800 text-2xl" />
              <Link to="/cart">
              <div className="relative">
                <FaCartShopping className="text-gray-800 text-2xl" />
                {/* Show the cart count only if it's greater than 0 */}
                {cartCount > 0 && (
                  <div className="absolute -top-3 -right-2 text-sm text-white px-1 bg-primary rounded-full">
                    {cartCount}
                  </div>
                )}
              </div>
              </Link>
            </div>
          )}
          {isLoggedIn && (
            <div className="relative">
            {/* Ikon user */}
            <div
              className="flex items-center cursor-pointer"
              onClick={handleOpen} // Mengatur toggle dropdown
            >
              <FaUser className="text-gray-800 text-2xl" />
            </div>
      
            {/* Dropdown menu */}
            {open && (
              <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <ul className="py-2">
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
