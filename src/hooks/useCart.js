import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useCart = () => {
  const [cart, setCart] = useState(null);
  const [authTokens] = useState(() =>
    JSON.parse(localStorage.getItem("authTokens"))
  );
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));
  // Create a new cart
  const createOrGetCart = async () => {
    try {
      const response = await apiClient.post(
        "/carts/",
        {},
        {
          headers: { Authorization: `JWT ${authTokens?.access}` },
        }
      );
      setCart(response.data);
      if (!cartId) {
        localStorage.setItem("cartId", response.data.id);
        setCartId(response.data.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    createOrGetCart();
  }, []);

  // Add item to the cart
  const addCartItems = async (product_id, quantity) => {
    try {
      const response = await apiClient.post(
        `/carts/${cartId}/items/`,
        { product_id, quantity },
        {
          headers: { Authorization: `JWT ${authTokens?.access}` },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { createOrGetCart, cart, addCartItems };
};

export default useCart;
