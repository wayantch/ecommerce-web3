import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayouts from "../layouts/MainLayouts";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayouts />}>
                <Route index element={<Homepage />} />
            </Route>
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
        </Routes>
    );
}
