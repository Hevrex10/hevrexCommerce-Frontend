"use client";
import React, { useEffect, useState } from "react";
import Navcard from "./NavCard";
import OrderSummary from "./OrderSummary";
import getCart from "../Lib/api/CartApi/getCart";
import { Product, Cart } from "../Type/Type";
import CartList from "./CartList";
import updateCartQuantity from "@/Lib/api/CartApi/updateCartQuantity";
import CartLoader from "./CartLoader";

export default function CartComponent() {
  const [cart, setCart] = useState<Cart[]>([]);
  const [loading, setLoading] = useState(true);

  async function handleIncrease(productId: string) {
    const item = cart.find((item: any) => item.product._id === productId);

    if (!item) return;

    const newQuantity = item.quantity + 1;

    setCart((prevCart) =>
      prevCart.map((item: any) =>
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
    const item = cart.find((item: any) => item.product._id === productId);

    if (!item) return;

    const newQuantity = Math.max(1, item.quantity - 1);

    setCart((prevCart) =>
      prevCart.map((item: any) =>
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

  useEffect(() => {
    async function loadCart() {
      try {
        const data = await getCart();

        setCart(data);
      } catch (error) {
        console.error("Failed to load cart:", error);
      }
    }
    loadCart();
  }, []);

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
    <main className="flex max-w-full flex-col gap-15 bg-white">
      <Navcard text={"cart"} main={"Cart"} />

      <section className="flex max-w-full justify-center bg-white">
        <div className="flex w-full max-w-[1092px] flex-col justify-between gap-6 px-5 md:flex-row">
          {/* Cart Items */}
          {loading ? (
            <CartLoader />
          ) : (
            <div className="w-full">
              {cart.map((c: any) => (
                <CartList
                  key={c.product._id}
                  name={c.product.name}
                  price={c.product.price}
                  size={c.size}
                  quantity={c.quantity}
                  image={c.product.image}
                  color={c.color}
                  handleDecrease={() => handleDecrease(c.product._id)}
                  handleIncrease={() => handleIncrease(c.product._id)}
                />
              ))}
            </div>
          )}

          {/* Order Summary */}
          <OrderSummary />
        </div>
      </section>
    </main>
  );
}
