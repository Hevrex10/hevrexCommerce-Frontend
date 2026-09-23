"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import SidebarAdmin from "@/components/AdminDashboard/SidebarAdmin";
import Cover from "@/components/AdminDashboard/Cover";

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const isOpen = openPathname === pathname;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <div className="flex items-center bg-white p-4 lg:hidden">
        <button
          onClick={() => setOpenPathname(pathname)}
          className="text-gray-700"
          aria-label="Open sidebar"
        >
          <FiMenu size={25} />
        </button>
      </div>

      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="hidden bg-white lg:block">
          <SidebarAdmin />
        </aside>

        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Overlay */}
            <div
              onClick={() => setOpenPathname(null)}
              className="absolute inset-0 bg-black/40"
            />

            {/* Sidebar */}
            <aside className="relative z-10 h-screen w-full bg-white">
              <button
                onClick={() => setOpenPathname(null)}
                className="absolute right-5 top-5 z-20 text-gray-700"
                aria-label="Close sidebar"
              >
                <FiX size={27} />
              </button>

              <SidebarAdmin />
            </aside>
          </div>
        )}

        <main className="min-w-0 overflow-y-auto bg-gray-50">
          <Cover>{children}</Cover>
        </main>
      </div>
    </div>
  );
}