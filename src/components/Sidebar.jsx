import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: <TbLayoutDashboardFilled className="w-6 h-6"/>

    },
    {
      id: 2,
      name: "Product",
      path: "/dashboard/products",
      icon: <FaBoxOpen className="w-6 h-6"/>
    },
    {
      id: 3,
      name: "Discount",
      path: "/dashboard/discount",
      icon: <MdDiscount className="w-6 h-6"/>
    },
  ];

  const location = useLocation();

  return (
    <div className="w-56 h-screen fixed top-0 left-0 z-10 shadow-lg">
      <h1 className="text-2xl font-bold p-5">Sidebar</h1>
      <ul className="space-y-2 p-4">
        {sidebarItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={`flex items-center gap-4 p-3 rounded-lg ${
                location.pathname === item.path
                  ? "bg-gray-100"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.icon}
              <span className="text-lg font-semibold">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
