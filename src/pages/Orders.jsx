import React from "react";
import OrderCard from "../components/Orders/OrderCard";

const Orders = () => {
  const orders = [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      user: 1,
      status: "Not Paid",
      total_price: 999,
      created_at: "2025-04-26T12:12:52.423Z",
      items: [
        {
          id: 1,
          product: {
            id: 4,
            name: "string",
            price: 33.0,
          },
          quantity: 4,
          price: 0,
          total_price: 0,
        },
        {
          id: 2,
          product: {
            id: 3,
            name: "string",
            price: 33.0,
          },
          quantity: 2,
          price: 0,
          total_price: 0,
        },
      ],
    },
    {
      id: "3fa85f64-5717-4562-b3fb-2c963f66afa6",
      user: 1,
      status: "Not Paid",
      total_price: 999,
      created_at: "2025-04-26T12:12:52.423Z",
      items: [
        {
          id: 1,
          product: {
            id: 4,
            name: "string",
            price: 33.0,
          },
          quantity: 4,
          price: 0,
          total_price: 0,
        },
        {
          id: 2,
          product: {
            id: 3,
            name: "string",
            price: 33.0,
          },
          quantity: 2,
          price: 0,
          total_price: 0,
        },
      ],
    },
  ];
  return (
    <div className="mx-2 md:w-5/6 md:mx-auto">
      <h1 className="text-3xl font-bold my-6">Order Details</h1>
      <div>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
