import React, { useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";
import authApiClient from "../services/auth-api-client";
import Swal from "sweetalert2";

const Cart = () => {
  const {
    cart,
    cartId,
    createOrGetCart,
    updateCartItemQuantity,
    DeleteCartItems,
  } = useCartContext();
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
  const handleDeleteCartItem = (itemId) => {
    // success alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
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
          const response = await DeleteCartItems(itemId);
          if (response.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been successfully deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  // Checkout cart to order
  const checkOutCart = async () => {
    try {
      const response = await authApiClient.post("/orders/", {
        cart_id: cartId,
      });
      // Update cart after Proceed to Checkout
      if (response.status == 201) {
        setLocalCart((prevLocalCart) => {
          const deleteAllItems = (prevLocalCart.items = []);

          return { ...prevLocalCart, items: deleteAllItems };
        });
        Swal.fire({
          title: "Checkout Complete",
          text: "Your order has been successfully placed. Thank you!",
          icon: "success",
        });
        // delete cart after checkout the cart
        localStorage.removeItem("cartId");
      }
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
          cartId={cartId}
          setLocalCart={setLocalCart}
          checkOutCart={checkOutCart}
        />
      </div>
    </div>
  );
};

export default Cart;
