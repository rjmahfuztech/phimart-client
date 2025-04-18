import { FaUsers } from "react-icons/fa";
import { FiAlignLeft, FiPackage, FiX } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  MdCategory,
  MdLibraryAdd,
  MdOutlinePlaylistAdd,
  MdReviews,
} from "react-icons/md";
import { VscListUnordered } from "react-icons/vsc";
import { Link } from "react-router";

const Sidebar = ({ openSidebar }) => {
  const menuItems = [
    { to: "/dashboard", icon: LuLayoutDashboard, label: "Dashboard" },
    { to: "/products", icon: FiPackage, label: "Products" },
    { to: "/products/add", icon: MdLibraryAdd, label: "Add Product" },
    { to: "/categories", icon: MdCategory, label: "Categories" },
    {
      to: "/categories/add",
      icon: MdOutlinePlaylistAdd,
      label: "Add Category",
    },
    { to: "/orders", icon: VscListUnordered, label: "Orders" },
    { to: "/reviews", icon: MdReviews, label: "Reviews" },
    { to: "/users", icon: FaUsers, label: "Users" },
  ];

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      {/* Sidebar list here */}
      <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
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
        {/* showing sidebar data using map  */}
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link className="flex items-center gap-2 text-lg">
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}

        <p className="absolute bottom-6 left-5">@ 2025 PhiMart Admin</p>
      </ul>
    </div>
  );
};

export default Sidebar;
