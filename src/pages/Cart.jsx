import React, { useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";

const Cart = () => {
  const { cart, updateCartItemQuantity, DeleteCartItems } = useCartContext();
  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  // update cart quantity
  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart; // store a copy of previous localCart
    setLocalCart((prevLocalCart) => {
      const updatedItems = prevLocalCart.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              total_price: item.product.price * newQuantity,
            }
          : item
      );

      return {
        ...prevLocalCart,
        items: updatedItems,
        total_price: updatedItems.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      };
    });
    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
      setLocalCart(prevLocalCartCopy); // Rollback to previous state if API fails
    }
  };

  // delete cart item
  const handleDeleteCartItem = async (itemId) => {
    setLocalCart((prevLocalCart) => {
      const updatedItems = prevLocalCart.items.filter(
        (item) => item.id !== itemId
      );

      return {
        ...prevLocalCart,
        items: updatedItems,
        total_price: updatedItems.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      };
    });
    try {
      await DeleteCartItems(itemId);
    } catch (error) {
      console.log(error);
    }
  };

  if (!localCart) return <p className="text-center">Loading...</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 px-4 my-4">
      <div className="col-span-2">
        <CartItemList
          items={localCart.items}
          handleUpdateQuantity={handleUpdateQuantity}
          handleDeleteCartItem={handleDeleteCartItem}
        />
      </div>
      <div>
        <CartSummary
          totalPrice={localCart.total_price}
          itemCount={localCart.items.length}
        />
      </div>
    </div>
  );
};

export default Cart;
