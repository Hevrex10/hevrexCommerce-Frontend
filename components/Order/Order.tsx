"use client";
import { getOrders } from "@/Lib/api/OrderApi/order";
import { useEffect, useState } from "react";
import ListCard from "@/components/ListCard";
import CartLoader from "../CartComponent/CartLoader";
import { motion } from "motion/react";

type OrderItem = {
  price: number;
  product: {
    _id: string;
    image: string;
    name: string;
  };
};

type OrderData = {
  createdAt: string;
  status: string;
  items: OrderItem[];
};

export default function Order() {
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getOrders();

        setOrders(data.data.orders);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOrders();
  }, []);
  const cartLength = orders.length === 0;
  return (
    <>
      <p className=" text-gray-900 text-base font-semibold font-['Inter']">
        Orders
      </p>
      {isLoading ? (
        <CartLoader />
      ) : orders.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center  text-3xl font-bold text-gray-700">
          You have no orders
        </motion.p>
      ) : (
        orders.map((order) =>
          order.items.map((item) => (
            <ListCard
              key={item.product._id}
              image={item.product.image}
              name={item.product.name}
              date={order.createdAt}
              priceOrtext={item.price}
              stateOrprice={order.status}
              text="View item"
              link={`/Products/${item.product._id}`}
            />
          )),
        )
      )}
    </>
  );
}
