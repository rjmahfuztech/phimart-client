import { useState } from "react";
import { Outlet } from "react-router";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
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
        {/* Dashboard Navbar */}
        <DashboardNavbar openSidebar={openSidebar} />
        {/* Dashboard main content */}
        <Outlet />
      </div>
      {/* Dashboard Sidebar  */}
      <Sidebar openSidebar={openSidebar} />
    </div>
  );
};

export default DashboardLayout;
