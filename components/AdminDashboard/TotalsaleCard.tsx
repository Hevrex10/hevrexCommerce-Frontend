"use client";
import { orders } from "@/app/api/OrderApi/orders";
import { useEffect, useState } from "react";
import TotalsaleLoader from "./TotalsaleLoader";
import { Order } from "@/Type/Type";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function TotalsaleCard() {
  const [totalSales, setTotalSales] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [dailySales, setDailySales] = useState<
    { day: string; sales: number }[]
  >([]);

  useEffect(() => {
    async function getOrders() {
      try {
        const data = await orders();
        const allOrders = data.data.orders;
        const now = new Date();

        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const thisMonthOrders = allOrders.filter((order: Order) => {
          const orderDate = new Date(order.createdAt);

          return (
            orderDate.getMonth() === currentMonth &&
            orderDate.getFullYear() === currentYear
          );
        });

        const totalOrderPrice = thisMonthOrders.reduce(
          (sum: number, order: Order) => sum + order.totalPrice,
          0,
        );
        setTotalSales(totalOrderPrice);

        const dailyData = thisMonthOrders.reduce(
          (acc: { day: string; sales: number }[], order: Order) => {
            const orderDate = new Date(order.createdAt);
            const day = orderDate.getDate().toString();
            const existingDay = acc.find((item) => item.day === day);

            if (existingDay) {
              existingDay.sales += order.totalPrice;
            } else {
              acc.push({
                day,
                sales: order.totalPrice,
              });
            }
            return acc;
          },
          [],
        );
        setDailySales(dailyData);
      } catch (error) {
        console.error("Failed to load orders:", error);
      } finally {
        setLoading(false);
      }
    }
    getOrders();
  }, []);

  return (
    <>
      {isLoading ? (
        <TotalsaleLoader />
      ) : (
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
            Total Sales
          </div>
          <div className="mb-4 text-xs text-gray-400">THIS MONTH</div>
          <div className="mb-4 text-3xl font-semibold text-gray-900">
            $ {totalSales.toLocaleString()}
          </div>

          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={dailySales}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                barCategoryGap="45%">
                <XAxis dataKey="day" axisLine={false} tickLine={false} />

                <YAxis hide />

                <Tooltip />

                <Bar
                  dataKey="sales"
                  fill="#3B82F6"
                  barSize={6}
                  radius={[1, 1, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
