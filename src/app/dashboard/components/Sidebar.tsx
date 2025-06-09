"use client";

import Link from "next/link";
import { HelpCircle, Home, CreditCard, LogOut, Menu, Plus, X, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useAuthState } from "@/context/AuthContext";
import LogoutUser from "@/app/logout/LogoutUser";

export default function Sidebar() {
  const { userData } = useAuthState();
  const [logout, setLogout] = useState(false);
  const [open, setOpen] = useState(false); // mobile toggle
  const [collapsed, setCollapsed] = useState(false); // desktop collapse toggle

  const logoutHandle = () => setLogout(true);

  return (
    <aside
      className={`fixed top-0 left-0 z-50 bg-white shadow-sm transition-all duration-300
        flex flex-row md:flex-col items-center md:items-start justify-between
        md:h-screen w-full md:w-auto md:relative p-4 md:p-6 gap-4 md:gap-10
        ${collapsed ? "md:w-16" : "md:w-48"}`}
    >
      {/* Collapse toggle button (desktop only) */}
      <button
        onClick={() => setCollapsed((prev) => !prev)}
        className="hidden md:block absolute top-4 right-2 text-gray-600 hover:text-black"
      >
        <ChevronLeft
          className={`transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
          size={18}
        />
      </button>

      {/* Logo + dashboard link */}
      <div className="flex items-center gap-2 md:mb-4">
        <Home size={20} className="text-gray-700" />
        <Link
          href="/dashboard"
          className={`text-gray-800 font-medium text-sm md:text-base ${
            collapsed ? "hidden" : "inline"
          }`}
        >
          Dashboard
        </Link>
      </div>

      {/* Create new button */}
      <Link
        href="/new"
        className="bg-[#1E2A3A] text-white px-4 py-2 rounded hover:bg-blue-700 text-sm whitespace-nowrap flex items-center"
      >
        <Plus size={18} />
        {!collapsed && <span className="ml-2">Create new</span>}
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex flex-col space-y-6 w-full">
        <Link href="/contact" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600">
          <HelpCircle size={18} />
          {!collapsed && <span>Help</span>}
        </Link>
        <Link href="/pricing" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600">
          <CreditCard size={18} />
          {!collapsed && <span>Pricing</span>}
        </Link>
        <div
          onClick={logoutHandle}
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 cursor-pointer"
        >
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </div>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white mt-2 rounded-lg shadow px-4 py-3 text-sm text-gray-700 space-y-2">
          <Link href="/contact" className="flex items-center gap-2">
            <HelpCircle size={18} />
            <span>Help</span>
          </Link>
          <Link href="/pricing" className="flex items-center gap-2">
            <CreditCard size={18} />
            <span>Pricing</span>
          </Link>
          <div onClick={logoutHandle} className="flex items-center gap-2 cursor-pointer">
            <LogOut size={18} />
            <span>Logout</span>
          </div>
        </div>
      )}

      {/* Subscription info (mobile only) */}
      {userData?.subscription && (
        <div className="md:hidden text-center text-xs text-blue-600 italic mt-4 absolute bottom-0 right-5">
          {userData.subscription.method === "year"
            ? "Annual plan active (no credit limits)"
            : userData.subscription.method === "month"
            ? "Monthly plan active (no credit limits)"
            : `${userData.subscription.credits} credit${
                userData.subscription.credits !== 1 ? "s" : ""
              } left`}
        </div>
      )}

      {logout && <LogoutUser />}
    </aside>
  );
}
