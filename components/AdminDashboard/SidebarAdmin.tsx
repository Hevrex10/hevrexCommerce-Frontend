"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Star,
  Settings,
  Plus,
} from "lucide-react";

const mainLinks = [
  {
    name: "Dashboard",
    href: "/Admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/Admin/products",
    icon: Package,
  },
  {
    name: "Orders",
    href: "/Admin/orders",
    icon: ShoppingCart,
  },
  {
    name: "Customers",
    href: "/Admin/customers",
    icon: Users,
  },
  {
    name: "Reviews",
    href: "/Admin/reviews",
    icon: Star,
  },
  {
    name: "Settings",
    href: "/Admin/settings",
    icon: Settings,
  },
];

export default function SidebarAdmin() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-[255px] flex-col border-r border-gray-200 bg-white">
      <div className="flex h-[95px] items-center px-[45px]">
        <Link href="/">
          <Image src="/images/Admin.png" alt="Logo" width={120} height={120}  />
        </Link>
      </div>

      <nav className="px-[19px] pt-[17px]">
        <div className="space-y-[14px]">
          {mainLinks.map((link) => {
            const Icon = link.icon;

            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex h-[41px] items-center rounded-lg px-[26px] text-[15px] transition ${
                  isActive
                    ? "bg-[#f5f5f5] text-[#111827]"
                    : "text-[#626775] hover:bg-gray-50"
                }`}>
                <Icon size={20} strokeWidth={1.7} className="mr-[14px]" />

                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="mt-[40px] border-t border-gray-200 px-[19px] pt-[39px]">
        <Link
          href="#"
          className="flex h-[41px] items-center rounded-lg px-[26px] text-[15px] text-[#626775] hover:bg-gray-50">
          <Plus size={20} strokeWidth={1.7} className="mr-[14px]" />

          <span>Extras</span>
        </Link>
      </div>
    </aside>
  );
}
