import React, { useState } from "react";
import { FiAlignLeft, FiX } from "react-icons/fi";
import { Link } from "react-router";

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
        {/* Page content here */}
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <div>
              <label
                htmlFor="my-drawer"
                className="btn btn-square lg:hidden btn-ghost text-3xl"
              >
                {openSidebar ? <FiX /> : <FiAlignLeft />}
              </label>
              <a className="btn btn-ghost text-xl">Dashboard</a>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
          {/* Sidebar content here */}
          <div className="flex justify-between mb-8">
            <h3 className="text-xl font-semibold">
              <Link to="/">PhiMart</Link>
            </h3>
            <label
              htmlFor="my-drawer"
              className="btn btn-square lg:hidden btn-ghost text-3xl"
            >
              {openSidebar ? <FiX /> : <FiAlignLeft />}
            </label>
          </div>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Add Products</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
          <li>
            <a>Add Categories</a>
          </li>
          <li>
            <a>Orders</a>
          </li>
          <li>
            <a>Reviews</a>
          </li>
          <li>
            <a>Users</a>
          </li>
          <p className="absolute bottom-6 left-5">@ 2025 PhiMart Admin</p>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
