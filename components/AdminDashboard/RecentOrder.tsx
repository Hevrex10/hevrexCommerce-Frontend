"use client";
import Link from "next/link";
import { orders } from "@/app/api/OrderApi/orders";
import { useEffect, useState } from "react";
import RecentOrderCard from "./RecentOrderCard";
import RecentOrderLoader from "./RecentOrderLoader";
export default function RecentOrder() {
  const [allOrder, setAllOrder] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllOrders() {
      try {
        const data = await orders();

        const allOrders = data.data.orders;

        const recentOrders = [...allOrders]
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )
          .slice(0, 5);

        setAllOrder(recentOrders);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getAllOrders();
  }, []);

  return (
    <>
      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800">Recent Orders</h3>
          <Link
            href="/Admin/orders"
            className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50">
            View All
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-xs text-gray-400">
                <th className="pb-3 font-medium">Item</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {loading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <RecentOrderLoader key={index} />
                  ))
                : allOrder.map((order) => (
                    <RecentOrderCard
                      key={order._id}
                      productName={
                        order.items[0]?.product?.name || "Unknown Product"
                      }
                      status={order.status}
                      price={order.items[0]?.price ?? 0}
                      date={order.createdAt}
                    />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
