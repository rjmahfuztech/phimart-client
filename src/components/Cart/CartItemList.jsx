import React from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";

const CartItemList = ({
  items,
  handleUpdateQuantity,
  handleDeleteCartItem,
}) => {
  // checking if cart is empty
  if (items.length === 0) {
    return (
      <p className="text-center font-semibold text-gray-400 text-lg">
        Your cart is empty!
      </p>
    );
  }

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-3 md:grid-cols-5 gap-2 shadow-sm p-3 mb-2 border border-gray-100 bg-base-100 rounded-lg"
        >
          <div className="col-span-2">
            <div>
              <h1>{item.product.name}</h1>
            </div>
          </div>
          <div>
            <h1>${item.product.price}</h1>
            <IoTrashOutline
              onClick={() => handleDeleteCartItem(item.id)}
              className="size-6 text-red-400 hover:text-red-600 transition-colors cursor-pointer mt-2 ml-2"
            />
          </div>
          <div>
            <h3 className="font-semibold">Total</h3>
            <h1>${item.total_price}</h1>
          </div>
          <div className="col-start-2 col-span-2 md:col-span-1">
            <div className="flex mt-2 md:mt-0 justify-center md:justify-end items-center gap-2">
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                className="btn btn-outline h-7 hover:bg-gray-300 text-gray-700 rounded-md p-1 transition duration-150"
                disabled={item.quantity <= 1}
              >
                <CiSquareMinus className="size-4" />
              </button>
              <input
                type="number"
                min="1"
                max={15}
                value={item.quantity}
                onChange={(e) =>
                  handleUpdateQuantity(
                    item.id,
                    e.target.value <= 15 && e.target.value >= 1
                      ? e.target.value
                      : e.target.value < 1
                      ? (alert("min is 1"), 1)
                      : (alert("max is 15"), 15)
                  )
                }
                className="w-12 text-center border h-8 border-gray-300 rounded-md py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                className="btn btn-outline h-7 hover:bg-gray-300 text-gray-700 rounded-md p-1 transition duration-150"
                disabled={item.quantity >= 15}
              >
                <CiSquarePlus className="size-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItemList;
