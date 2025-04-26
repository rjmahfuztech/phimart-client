import { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCard";
import authApiClient from "../services/auth-api-client";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    authApiClient
      .get("/orders/")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (!loading && orders.length == 0)
    return (
      <p className="text-center my-10 text-lg text-gray-400 font-semibold">
        You do not have any order yet
      </p>
    );
  return (
    <>
      {loading ? (
        <div className="text-center mt-16">
          <span className="loading loading-spinner text-secondary loading-xl"></span>
        </div>
      ) : (
        <div className="mx-2 md:w-5/6 md:mx-auto">
          <h1 className="text-3xl font-bold my-6">Order Details</h1>
          <div>
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
