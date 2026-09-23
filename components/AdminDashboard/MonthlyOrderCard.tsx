"use client";

import { orders } from "@/app/api/OrderApi/orders";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import MonthlyOrderLoader from "./MonthlyOrderLoader";
const MONTHLY_GOAL = 1000;

export default function MonthlyOrderCard() {
  const [totalOrders, setTotalOrders] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOrders() {
      try {
        const data = await orders();

        const allOrders = data.data.orders;

        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const thisMonthOrders = allOrders.filter((order: any) => {
          const orderDate = new Date(order.createdAt);

          return (
            orderDate.getMonth() === currentMonth &&
            orderDate.getFullYear() === currentYear
          );
        });

        setTotalOrders(thisMonthOrders.length);
      } catch (error) {
        console.error("Failed to load orders:", error);
      } finally {
        setLoading(false);
      }
    }

    getOrders();
  }, []);

  const ordersLeft = Math.max(MONTHLY_GOAL - totalOrders, 0);

  const percentage = Math.min((totalOrders / MONTHLY_GOAL) * 100, 100);

  const chartData = [
    {
      name: "Orders",
      completed: totalOrders,
      remaining: ordersLeft,
    },
  ];

  return (
    <>
      {loading ? (
        <MonthlyOrderLoader />
      ) : (
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
            Orders
          </div>

          <div className="mb-1 text-xs text-gray-400">
            MONTHLY GOAL : {MONTHLY_GOAL.toLocaleString()}
          </div>

          <div className="mb-4 text-3xl font-semibold text-gray-900">
            {totalOrders.toLocaleString()}
          </div>

          <div className="mb-2 text-xs text-gray-500">
            {ordersLeft.toLocaleString()} Left
          </div>

          <div className="h-3 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <XAxis type="number" domain={[0, MONTHLY_GOAL]} hide />

                <YAxis type="category" dataKey="name" hide />

                <Bar
                  dataKey="completed"
                  stackId="goal"
                  fill="#3B82F6"
                  radius={[6, 0, 0, 6]}
                  barSize={8}
                />

                <Bar
                  dataKey="remaining"
                  stackId="goal"
                  fill="#F1F2F4"
                  radius={[0, 6, 6, 0]}
                  barSize={8}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
