import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AdminLayouts = () => {
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
        window.location.href = "/login";
    }
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="ml-16 md:ml-56 w-full ">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AdminLayouts;
