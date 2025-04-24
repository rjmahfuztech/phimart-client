import React, { useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";

const Cart = () => {
  const { cart, createOrGetCart, updateCartItemQuantity, DeleteCartItems } =
    useCartContext();
  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    createOrGetCart();
  }, [createOrGetCart]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  // update cart quantity
  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart; // store a copy of previous localCart
    setLocalCart((prevLocalCart) => ({
      ...prevLocalCart,
      items: prevLocalCart.items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ),
    }));
    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
      setLocalCart(prevLocalCartCopy); // Rollback to previous state if API fails
    }
  };

  // delete cart item
  const handleDeleteCartItem = async (itemId) => {
    setLocalCart((prevLocalCart) => ({
      ...prevLocalCart,
      items: prevLocalCart.items.filter((item) => item.id !== itemId),
    }));
    try {
      await DeleteCartItems(itemId);
    } catch (error) {
      console.log(error);
    }
  };

  if (!localCart) return <p className="text-center">Loading...</p>;
  return (
    <div className="grid grid-cols-3 gap-4 p-2 my-4">
      <div className="col-span-2">
        <CartItemList
          items={localCart.items}
          handleUpdateQuantity={handleUpdateQuantity}
          handleDeleteCartItem={handleDeleteCartItem}
        />
      </div>
      <div>total calculation</div>
    </div>
  );
};

export default Cart;
