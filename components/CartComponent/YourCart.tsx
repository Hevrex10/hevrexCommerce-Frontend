import { useEffect, useState } from "react";
import Navcard from "../NavCard";
import Link from "next/link";
import OrderSummary from "../OrderSummary";
import getCart from "../../app/api/CartApi/getCart";
import { Product, CartProp } from "../../Type/Type";
import CartList from "./CartList";
import updateCartQuantity from "@/app/api/CartApi/updateCartQuantity";
import CartLoader from "./CartLoader";
import removeFromCart from "@/app/api/CartApi/removeFromCart";

export default function YourCart({
  loading,
  cart,
  setCart,
  setLoading,
}: {
  loading: boolean;
  cart: CartProp[];
  setCart: React.Dispatch<React.SetStateAction<CartProp[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  async function handleIncrease(productId: string) {
    const item = cart.find((item) => item.product._id === productId);

    if (!item) return;

    const newQuantity = item.quantity + 1;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product._id === productId
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item,
      ),
    );

    try {
      await updateCartQuantity(productId, newQuantity);
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  }

  async function handleDecrease(productId: string) {
    const item = cart.find((item) => item.product._id === productId);

    if (!item) return;

    const newQuantity = Math.max(1, item.quantity - 1);

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product._id === productId
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item,
      ),
    );

    try {
      await updateCartQuantity(productId, newQuantity);
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  }
  async function handleDelete(cartItemId: string) {
    try {
      const updatedCart = await removeFromCart(cartItemId);

      setCart(updatedCart);
    } catch (error) {
      console.error("Failed to delete product from cart:", error);
    }
  }

  useEffect(() => {
    async function loadCart() {
      try {
        const data = await getCart();

        setCart(data);
      } catch (error) {
        console.error("Failed to load cart:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCart();
  }, []);

  return (
    <>
      {/* Cart Items */}
      {loading ? (
        <CartLoader />
      ) : cart.length === 0 ? (
        <div className="flex w-full items-center justify-center py-20">
          <Link
            href="/Products"
            className="cursor-pointer text-md font-medium text-gray-500 hover:text-gray-900">
            Your cart is empty. Add to cart.
          </Link>
        </div>
      ) : (
        <div className="w-full">
          {cart.map((c) => (
            <CartList
              key={c._id}
              name={c.product.name}
              price={c.product.price}
              size={c.size}
              quantity={c.quantity}
              image={c.product.image}
              color={c.color}
              handleDecrease={() => handleDecrease(c.product._id)}
              handleIncrease={() => handleIncrease(c.product._id)}
              handleDelete={() => handleDelete(c._id)}
            />
          ))}
        </div>
      )}
    </>
  );
}
