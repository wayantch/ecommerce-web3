import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayouts from "../layouts/MainLayouts";
import Homepage from "../pages/Homepage";
import BuyProduct from "../pages/BuyProduct";
import AdminLayouts from "../layouts/AdminLayouts";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Create from "../pages/crud/Create";
import Discount from "../pages/Discount";
import Edit from "../pages/crud/Edit";
import CreateDisc from "../pages/crud/CreateDisc";
import EditDisc from "../pages/crud/EditDisc";
import Cart from "../pages/Cart";
// import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* User */}
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product_detail/:id" element={<BuyProduct />} />
      </Route>
      {/* User */}

      {/* Admin */}
      <Route path="/dashboard" element={<AdminLayouts />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/discount" element={<Discount />} />

        {/* CRUD Product */}
        <Route path="/dashboard/products/create" element={<Create />} />
        <Route path="/dashboard/products/edit/:id" element={<Edit />} />
        {/* CRUD Product */}

        {/* CRUD Discount */}
        <Route path="/dashboard/discount/create/" element={<CreateDisc />} />
        <Route path="/dashboard/discount/edit/:id" element={<EditDisc />} />
        {/* CRUD Discount */}
      </Route>
      {/* Admin */}

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Auth */}
    </Routes>
  );
}
