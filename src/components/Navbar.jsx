import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo2.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    // Mengecek apakah ada token di localStorage (mengindikasikan bahwa pengguna sudah login)
    const isLoggedIn = localStorage.getItem("token");
    const userName = isLoggedIn ? localStorage.getItem("name") : "Guest";

    return (
        <div className="bg-white">
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
                            className="text-gray-800 font-semibold hover:text-gray-700 text-lg"
                        >
                            Home
                        </Link>
                        <Link
                            to="/"
                            className="text-gray-800 font-semibold hover:text-gray-700 text-lg"
                        >
                            Shop
                        </Link>
                        <Link
                            to="/"
                            className="text-gray-800 font-semibold hover:text-gray-700 text-lg"
                        >
                            About
                        </Link>
                        <Link
                            to="/"
                            className="text-gray-800 font-semibold hover:text-gray-700 text-lg"
                        >
                            Blogs
                        </Link>
                        
                    </div>
                    
                </div>
                <div className="">
                </div>
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
                            className="text-white font-semibold hover:text-gray-100 text-lg px-8 py-2 bg-blue-500 rounded-md"
                        >
                            Login
                        </Link>
                    )}
                    {/* Logout Button (optional, if needed) */}{" "}
                    {isLoggedIn && (
                        <div className="flex space-x-4">
                            <FaSearch className="text-gray-800 text-2xl" />
                            <FaCartShopping className="text-gray-800 text-2xl" />
                        </div>
                    )}
                    {isLoggedIn && (
                        <button
                            onClick={() => {
                                // Hapus token saat logout
                                localStorage.removeItem("token");
                                window.location.reload(); // Reload halaman untuk memperbarui navbar
                            }}
                            className="text-white font-semibold hover:text-gray-100 text-lg px-8 py-2 bg-red-500 rounded-md"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
