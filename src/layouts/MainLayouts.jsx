import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export default function MainLayouts() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
}
