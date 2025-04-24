import { useCallback, useState } from "react";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
  const [cart, setCart] = useState(null);

  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  // Create a new cart
  const createOrGetCart = useCallback(async () => {
    try {
      const response = await authApiClient.post("/carts/");
      setCart(response.data);
      if (!cartId) {
        localStorage.setItem("cartId", response.data.id);
        setCartId(response.data.id);
      }
    } catch (err) {
      console.log(err);
    }
  }, [cartId]);

  // Add item to the cart
  const addCartItems = useCallback(
    async (product_id, quantity) => {
      if (!cartId) return createOrGetCart();
      try {
        const response = await authApiClient.post(`/carts/${cartId}/items/`, {
          product_id,
          quantity,
        });
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    [cartId, createOrGetCart]
  );

  // Update cart item quantity
  const updateCartItemQuantity = useCallback(
    async (itemId, quantity) => {
      try {
        await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, {
          quantity,
        });
      } catch (error) {
        console.log("Error! updating cart item:", error);
      }
    },
    [cartId]
  );

  // Delete cart items
  const DeleteCartItems = useCallback(
    async (itemId) => {
      try {
        await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
      } catch (error) {
        console.log(error);
      }
    },
    [cartId]
  );

  return {
    createOrGetCart,
    cart,
    addCartItems,
    updateCartItemQuantity,
    DeleteCartItems,
  };
};

export default useCart;
