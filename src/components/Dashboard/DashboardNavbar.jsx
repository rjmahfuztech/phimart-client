import { FiAlignLeft, FiX } from "react-icons/fi";

const DashboardNavbar = ({ openSidebar }) => {
  return (
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
  );
};

export default DashboardNavbar;
