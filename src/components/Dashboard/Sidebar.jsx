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
  return (
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
          <Link className="flex items-center gap-2 text-lg">
            <LuLayoutDashboard />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <FiPackage />
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <MdLibraryAdd />
            <span>Add Producs</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <MdCategory />
            <span>Categories</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <MdOutlinePlaylistAdd />
            <span>Add Categoies</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <VscListUnordered />
            <span>Orders</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <MdReviews />
            <span>Reviews</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <FaUsers />
            <span>Users</span>
          </Link>
        </li>
        <p className="absolute bottom-6 left-5">@ 2025 PhiMart Admin</p>
      </ul>
    </div>
  );
};

export default Sidebar;
