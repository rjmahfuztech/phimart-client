import { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCard";
import authApiClient from "../services/auth-api-client";
import Swal from "sweetalert2";

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

  // Cancel Order
  const handleCancelOrder = (orderId) => {
    // success alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel order!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await authApiClient.post(
            `/orders/${orderId}/cancel/`
          );
          if (response.status == 200) {
            // Update order status when cancel
            setOrders((prevOrders) =>
              prevOrders.map((order) =>
                order.id == orderId ? { ...order, status: "Canceled" } : order
              )
            );
            Swal.fire({
              title: "Canceled!",
              text: "Your order has been canceled.",
              icon: "success",
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

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
              <OrderCard
                key={order.id}
                order={order}
                handleCancelOrder={handleCancelOrder}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
