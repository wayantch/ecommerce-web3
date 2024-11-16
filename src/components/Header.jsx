import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const userName = localStorage.getItem("token");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval ketika komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  //Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout successful!");
    window.location.href = "/login";
  };

  return (
    <div className="shadow p-4 flex justify-between items-center ">
      <h1 className="text-2xl font-semibold">Welcome, Admin</h1>
      <div className="flex gap-4 items-center">
        {currentTime.toLocaleString()}
        <button
          onClick={handleLogout}
          className="bg-black text-white py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
