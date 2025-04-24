const CartSummary = ({ totalPrice, itemCount }) => {
  const shipping = parseFloat(totalPrice) > 180 ? 0 : 15;
  const tax = parseFloat(totalPrice) * 0.05;
  const calculateTotal = parseFloat(totalPrice) + shipping + tax;
  return (
    <div className="shadow-sm px-4 py-6 border border-gray-100 bg-base-100 rounded-lg mt-4 md:mt-0">
      <h1 className="text-xl md:text-2xl font-bold">Order Summary</h1>
      <div className="flex justify-between gap-2 mt-6 text-gray-500">
        <p className="font-semibold">Subtotal ({itemCount} items)</p>
        <span className="font-bold">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between gap-2 my-2 text-gray-500">
        <p className="font-semibold">Shipping Fee</p>
        <span className="font-bold">
          ${shipping === 0 ? "Free" : shipping.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between gap-2 border-b border-gray-300 pb-2 text-gray-500">
        <p className="font-semibold">Estimated Tax</p>
        <span className="font-bold">${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between gap-2 my-2 text-gray-700">
        <p className="font-semibold text-lg">Order Total</p>
        <span className="font-bold">${calculateTotal.toFixed(2)}</span>
      </div>
      <button className="btn btn-primary w-full mt-2">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartSummary;
