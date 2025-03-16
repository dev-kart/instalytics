import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiChatSmileFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({ collapsed = false }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div
      className={`${
        collapsed ? "w-24" : "w-64"
      } bg-gray-900 text-gray-300 h-screen flex flex-col p-6 border-r border-gray-800 transition-all duration-300 ease-in-out`}
    >
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Link href="/">
          {collapsed ? (
            <Image
              src="/mobileLogo.png"
              alt="Logo"
              width={64}
              height={64}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          ) : (
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={100}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          )}
        </Link>
      </div>

      {/* Menu */}
      <div className="flex-1">
        <div
          className={`${
            collapsed ? "text-center" : ""
          } text-sm font-medium uppercase tracking-wider text-gray-500 mb-4`}
        >
          {!collapsed && "Menu"}
        </div>
        <ul className="space-y-4">
          {[
            { id: "overview", icon: RxDashboard, label: "Overview" },
            { id: "statistics", icon: IoStatsChartSharp, label: "Statistics" },
            { id: "customers", icon: RiChatSmileFill, label: "Customers" },
            { id: "product", icon: AiFillProduct, label: "Product" },
            {
              id: "messages",
              icon: IoMailSharp,
              label: "Messages",
              badge: "13",
            },
          ].map((item) => (
            <li
              key={item.id}
              className={`flex items-center ${
                collapsed ? "justify-center p-2" : "space-x-3 p-4"
              } cursor-pointer rounded-lg transition-all duration-200 group ${
                activeTab === item.id
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "hover:bg-gray-800/50"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon
                className={`${collapsed ? "text-2xl" : "text-xl"} ${
                  activeTab === item.id
                    ? "text-indigo-400"
                    : "group-hover:text-indigo-400"
                }`}
              />
              {!collapsed && (
                <>
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full ml-auto">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Profile */}
      <div className="mt-auto pt-6 border-t border-gray-800">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "space-x-3"
          } p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200`}
        >
          <div
            className={`${
              collapsed ? "w-10 h-10" : "w-10 h-10"
            } bg-indigo-500 rounded-full flex items-center justify-center text-white font-medium ${
              collapsed ? "text-xl" : "text-sm"
            }`}
          >
            F
          </div>
          {!collapsed && (
            <div>
              <div className="text-sm font-medium text-gray-200">
                Fandaww Punx
              </div>
              <div className="text-xs text-gray-500">fandaww6@gmail.com</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;