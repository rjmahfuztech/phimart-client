import React, { useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";

const Cart = () => {
  const { cart, createOrGetCart, updateCartItemQuantity } = useCartContext();
  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    createOrGetCart();
  }, [createOrGetCart]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    setLocalCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ),
    }));
    try {
      await updateCartItemQuantity(itemId, newQuantity);
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
        />
      </div>
      <div>total calculation</div>
    </div>
  );
};

export default Cart;
