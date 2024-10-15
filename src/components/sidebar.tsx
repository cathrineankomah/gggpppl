"use client";
import React from "react";
import {
  DollarSign,
  Gamepad2,
  Gift,
  Home,
  Settings,
  Target,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const activeTab = usePathname();

  const sidebarItems = [
    { name: "Dashboard", icon: Home, url: "/dashboard" },
    { name: "Tasks", icon: Target, url: "/dashboard/tasks" },
    { name: "Games", icon: Gamepad2, url: "/dashboard/games" },
    { name: "Raffle", icon: Gift, url: "/dashboard/raffle" },
    { name: "Investments", icon: DollarSign, url: "/dashboard/investments" },
    { name: "Settings", icon: Settings, url: "/dashboard/settings" },
  ];

  return (
    <aside className="hidden w-64 flex-col border-r md:flex">
      <nav className="mt-8">
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className={`flex items-center px-4 py-2 text-gray-700 ${
              activeTab === item.url.toLowerCase()
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
