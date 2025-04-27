import React from "react";
import OrderTable from "./OrderTable";
import useAuthContext from "../../hooks/useAuthContext";

const OrderCard = ({ order, handleCancelOrder }) => {
  const { user } = useAuthContext();

  return (
    <div className="shadow-lg rounded-lg bg-white border border-gray-100 my-6">
      <div className="md:flex justify-between rounded-lg p-3 md:p-6 bg-gray-300 gap-2">
        <div>
          <h1 className="text-xl font-bold">Order #{order.id}</h1>
          <p className="text-gray-400">Date</p>
        </div>
        <div className="flex gap-2 items-center mt-2 md:mt-0">
          <p
            className={`${
              order.status == "Not Paid"
                ? "bg-warning"
                : `${
                    order.status == "Canceled"
                      ? "bg-red-500"
                      : `${
                          order.status == "Delivered" ? "bg-success" : "bg-info"
                        }`
                  }`
            } py-1 px-4 rounded-full font-semibold text-white`}
          >
            {order.status}
          </p>
          {order.status !== "Delivered" && order.status !== "Canceled" && (
            <button
              onClick={() => handleCancelOrder(order.id)}
              className="btn btn-link text-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      <div className="p-3 md:p-6">
        <div className="mt-6">
          <h3 className="text-lg mb-6 font-semibold">Order Items</h3>
          {/* Order Table  */}
          <OrderTable order={order} />
        </div>
        {/* Order total price  */}
        <div className="flex justify-end">
          <div className="w-80 mt-6 bg-base-100 shadow-md rounded-md p-4">
            <div className="flex gap-2 mb-3 justify-between">
              <h2 className="text-lg font-semibold">Subtotal:</h2>
              <span className="text-lg font-semibold">
                ${order.total_price}
              </span>
            </div>
            <div className="flex gap-2 border-b pb-2 justify-between">
              <h2 className="text-lg font-semibold">Shipping:</h2>
              <span className="text-lg font-semibold">$0</span>
            </div>
            <div className="flex gap-2 font-bold justify-between">
              <h2 className="text-lg">Total:</h2>
              <span className="text-lg">${order.total_price}</span>
            </div>
            {!user.is_staff && order.status == "Not Paid" && (
              <button
                disabled={order.status == "Paid"}
                className="btn btn-primary w-full mt-3"
              >
                {order.status == "Paid" ? "Paid" : "Pay Now"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
