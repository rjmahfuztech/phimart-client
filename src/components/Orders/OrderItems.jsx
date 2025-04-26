import React from "react";

const OrderItems = ({ items, index }) => {
  return (
    <tr>
      <th className="border-b">{index + 1}</th>
      <td className="border-b">{items.product.name}</td>
      <td className="border-b">{items.price.toFixed(2)}</td>
      <td className="border-b">{items.quantity}</td>
      <td className="border-b">{items.total_price.toFixed(2)}</td>
    </tr>
  );
};

export default OrderItems;
