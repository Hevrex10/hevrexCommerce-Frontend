"use client";
import allUsers from "@/app/api/UserApi/users";
import { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import CustomerCardLoader from "./CustomerCardLoader";

type DailyUser = {
  day: string;
  users: number;
};

export default function CustomerCard() {
  const [isTotalUser, setTotalUser] = useState(null);
  const [dailyUsers, setDailyUsers] = useState<DailyUser[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getAllUser() {
      try {
        const data = await allUsers();

        const users = data.data.users;

        const now = new Date();

        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        // Users who registered this month
        const thisMonthUsers = users.filter((user: any) => {
          const userDate = new Date(user.createdAt);

          return (
            userDate.getMonth() === currentMonth &&
            userDate.getFullYear() === currentYear
          );
        });

        const totalCustomers = thisMonthUsers.length;

        setTotalUser(totalCustomers);

        // Create daily registration data
        const dailyData: DailyUser[] = [];

        const today = now.getDate();

        for (let day = 1; day <= today; day++) {
          const usersOnThisDay = thisMonthUsers.filter((user: any) => {
            const userDate = new Date(user.createdAt);

            return userDate.getDate() === day;
          });

          dailyData.push({
            day: day.toString(),
            users: usersOnThisDay.length,
          });
        }


        setDailyUsers(dailyData);
      } catch (error) {
        console.error("Failed to load users:", error);
      } finally {
        setLoading(false);
      }
    }

    getAllUser();
  }, []);
  return (
    <>
      {loading ? (
        <CustomerCardLoader />
      ) : (
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
            Customers
          </div>
          <div className="mb-4 text-xs text-gray-400">THIS MONTH</div>
          <div className="mb-4 text-3xl font-semibold text-gray-900">
            {isTotalUser}
          </div>
          <div className="h-12 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyUsers}>
                <Line
                  type="linear"
                  dataKey="users"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                  activeDot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
