"use client";
import { useState } from "react";
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  Car,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import SidebarItem from "./item";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Bookings",
    path: "/admin/bookings",
    icon: BadgeDollarSign,
  },
  {
    name: "Manage Cars",
    path: "/admin/managecars",
    icon: Car,
    items: [
      {
        name: "Add new car",
        path: "/settings",
      },
      {
        name: "test 1",
        path: "/settings/security",
      },
    ],
  },
  {
    name: "Accounts",
    path: "/admin/accounts",
    icon: CircleUserRound,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    items: [
      {
        name: "General",
        path: "/settings",
      },
      {
        name: "Security",
        path: "/settings/security",
      },
      {
        name: "Notifications",
        path: "/settings/notifications",
      },
    ],
  },
];

const Sidebar = () => {
  const [isMini, setIsMini] = useState(false); // حالة لتحديد إذا كان السايدبار مصغرًا أم لا

  return (
    <div
      className={`flex flex-col space-y-4 mt-6 bg-white ${
        isMini ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      
      <div className="flex flex-col space-y-10 w-full">
        <img
          className={`h-10 w-fit ${isMini ? "mx-auto" : "mx-auto"}`}
          src="/logo.png"
          alt="Logo"
        />
        {/* زر لتغيير حالة السايدبار */}
      <button
        onClick={() => setIsMini(!isMini)}
        className="p-2 hover:bg-blue-100 rounded-lg"
      >
        {isMini ? (
          <ChevronRight className="w-5 h-5" />
        ) : (
          <ChevronLeft className="w-5 h-5" />
        )}
      </button>
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} isMini={isMini} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;