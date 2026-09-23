import TotalsaleCard from "@/components/AdminDashboard/TotalsaleCard";
import CustomerCard from "@/components/AdminDashboard/CustomerCard";
import MonthlyOrderCard from "@/components/AdminDashboard/MonthlyOrderCard";
import BestSelling from "@/components/AdminDashboard/BestSelling";
import RecentOrder from "@/components/AdminDashboard/RecentOrder";
export default function Dashboard() {
  return (
    <>
      <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        <TotalsaleCard />

        <CustomerCard />

        <MonthlyOrderCard />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[340px_1fr]">
        <BestSelling />

        <RecentOrder />
      </div>
    </>
  );
}
