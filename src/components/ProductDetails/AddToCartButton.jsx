import React, { useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

const AddToCartButton = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = () => {
    // Simulating api call
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);

      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }, 1000);
  };
  return (
    <div className="md:absolute mt-10 bottom-0">
      <div className="md:w-80 flex items-center gap-2">
        <button
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
          className="btn btn-outline hover:bg-gray-300 text-gray-700 rounded-lg p-2 transition duration-150"
          disabled={quantity <= 1}
        >
          <CiSquareMinus className="size-6" />
        </button>
        <input
          type="number"
          min={1}
          max={product.stock}
          value={quantity}
          readOnly
          className="w-16 text-center border border-gray-300 rounded-lg py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          onClick={() =>
            setQuantity(quantity < product.stock ? quantity + 1 : quantity)
          }
          className="btn btn-outline hover:bg-gray-300 text-gray-700 rounded-lg p-2 transition duration-150"
          disabled={quantity >= product.stock}
        >
          <CiSquarePlus className="size-6" />
        </button>
      </div>

      <button
        onClick={addToCart}
        disabled={isAdding || isAdded || product.stock == 0}
        className="btn btn-primary w-full mt-2"
      >
        {isAdding ? (
          <div className="flex items-center gap-2">
            <span className="loading loading-spinner loading-xs"></span>
            <span>Adding...</span>
          </div>
        ) : isAdded ? (
          <div className="flex items-center gap-2">
            <FaCheck className="w-4 h-4" />
            <span>Added to Cart</span>
          </div>
        ) : (
          "Add to Cart"
        )}
      </button>
    </div>
  );
};

export default AddToCartButton;
