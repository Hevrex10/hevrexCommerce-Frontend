"use client";
import { useEffect, useState } from "react";
import Navcard from "../NavCard";
import OrderSummary from "../OrderSummary";
import { CartProp } from "../../Type/Type";
import ShippingAddress from "../ShippingAddress";
import YourCart from "./YourCart";
import { createOrder } from "@/Lib/api/OrderApi/order";
import clearCart from "@/Lib/api/CartApi/cleartCart/route";
import OrderSuccess from "../Order/OrderSuccess";
import OrderFailed from "../Order/OrderFailed";


type ShippingData = {
  name: string;
  phone: string;
  address: string;
  state: string;
  city: string;
  country: string;
};
export default function CartLayout() {
  const [cart, setCart] = useState<CartProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [showShipping, setShowShipping] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<
    "idle" | "success" | "failed"
  >("idle");
  const [shippingData, setShippingData] = useState<ShippingData>({
    name: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    country: "",
  });
   
  const cartLength = cart.length === 0
  const subTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const tax = subTotal * 0.075;
  const total = subTotal + tax;

  function handleCheckout() {
    setShowShipping(true);
  }

  async function handlePlaceOrder() {
    try {
      setIsOrdering(true);
      setOrderSuccess("idle");
      const orderData = {
        items: cart.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
          size: item.size,
          color: item.color,
        })),

        totalPrice: total,

        shippingAddress: {
          fullName: shippingData.name,
          phone: shippingData.phone,
          address: shippingData.address,
          city: shippingData.city,
          state: shippingData.state,
          country: shippingData.country,
        },
      };
      await createOrder(orderData);
      setOrderSuccess("success");
      await clearCart();
      setCart([]);
      setShippingData({
        name: "",
        phone: "",
        address: "",
        state: "",
        city: "",
        country: "",
      });
      setShowShipping(false);
    } catch (error) {
      setOrderSuccess("failed");
      console.error(error);
    } finally {
      setIsOrdering(false);
    }
  }
  return (
    <main className="flex max-w-full flex-col gap-15 bg-white">
      {orderSuccess === "success" ? (
        <OrderSuccess />
      ) : orderSuccess === "failed" ? (
        <OrderFailed />
      ) : (
        <>
          <Navcard text="cart" main="Cart" />

          <section className="flex max-w-full justify-center bg-white mb-10">
            <div className="flex w-full max-w-[1092px] flex-col justify-between gap-6 px-5 md:flex-row">
              {showShipping ? (
                <ShippingAddress
                  shippingData={shippingData}
                  setShippingData={setShippingData}
                />
              ) : (
                <YourCart
                  loading={loading}
                  cart={cart}
                  setCart={setCart}
                  setLoading={setLoading}
                />
              )}

              <OrderSummary
                subTotal={subTotal}
                tax={tax}
                total={total}
                showShipping={showShipping}
                handleCheckout={handleCheckout}
                handlePlaceOrder={handlePlaceOrder}
                isOrdering={isOrdering}
                cartLength={cartLength}
              />
            </div>
          </section>
        </>
      )}
    </main>
  );
}
