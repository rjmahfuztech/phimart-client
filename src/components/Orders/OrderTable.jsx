import React from "react";
import OrderItems from "./OrderItems";

const OrderTable = ({ order }) => {
  return (
    <div className="overflow-x-auto bg-base-200 rounded-tl-lg rounded-tr-lg">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="font-bold border-b-2 border-black text-black text-lg">
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Order items*/}
          {order.items.map((items, index) => (
            <OrderItems key={items.id} items={items} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
