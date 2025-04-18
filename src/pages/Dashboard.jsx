import React, { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import StatCard from "../components/Dashboard/StatCard";
import { FiPackage, FiShoppingCart, FiStar, FiUsers } from "react-icons/fi";
import Order from "../components/Dashboard/Order";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer"
        type="checkbox"
        onClick={toggleSidebar}
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {/* Navbar */}
        <DashboardNavbar openSidebar={openSidebar} />
        {/* Page content here */}
        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6 mx-4 sm:mx-6">
          <StatCard icon={FiPackage} title="Total Products" value={245} />
          <StatCard icon={FiShoppingCart} title="Total Orders" value={150} />
          <StatCard icon={FiUsers} title="Total Users" value={350} />
          <StatCard icon={FiStar} title="Average Rating" value={4.9} />
        </div>
        {/* Order  */}
        <div className="mx-4 sm:mx-6 shadow-sm p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-3">Recent Orders</h2>
          <Order />
        </div>
      </div>
      {/* Sidebar  */}
      <Sidebar openSidebar={openSidebar} />
    </div>
  );
};

export default Dashboard;
