import React from "react";
import SidebarAdmin from "@/components/AdminDashboard/SidebarAdmin";
import Cover from "@/components/AdminDashboard/Cover";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-[260px_1fr]">
      {/* Left sidebar */}
      <aside className="h-screen bg-white">
        <SidebarAdmin />
      </aside>

      {/* Right side */}
      <main className="min-w-0 overflow-y-auto bg-gray-50">
        <Cover>{children}</Cover>
      </main>
    </div>
  );
}
