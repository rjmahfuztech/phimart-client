import React, { useEffect } from "react";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
  const { createOrGetCart } = useCartContext();

  useEffect(() => {
    createOrGetCart();
    console.log("create or get");
  }, [createOrGetCart]);

  return <div>this is cart page</div>;
};

export default Cart;
