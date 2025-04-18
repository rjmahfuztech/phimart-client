import StatCard from "../components/Dashboard/StatCard";
import { FiPackage, FiShoppingCart, FiStar, FiUsers } from "react-icons/fi";
import Order from "../components/Dashboard/Order";

const Dashboard = () => {
  return (
    <div>
      {/* Statistics  */}
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
  );
};

export default Dashboard;
