"use client";

import Link from "next/link";
import { HelpCircle, Home,CreditCard,LogOut, Menu, X } from "lucide-react";

import { useState } from "react";

export default function Sidebar() {
 
  const [open, setOpen] = useState(false);
  return (
    <aside className="fixed top-0 left-0 md:relative w-full md:w-60 bg-white shadow-sm z-50 p-4 md:p-6 flex flex-row md:flex-col justify-between items-center md:items-start md:h-screen gap-4 md:gap-10">
      
      {/* Section logo + dashboard */}
      <div className="flex items-center gap-2 md:mb-4">
        <Home size={20} className="text-gray-700" />
        <Link href="/dashboard" className="text-gray-800 font-medium text-sm md:text-base">
          Dashboard
        </Link>
      </div>

      {/* Bouton "Create new" visible partout */}
      <Link
        href="/new"
        className="bg-[#1E2A3A] text-white px-4 py-2 rounded hover:bg-blue-700 text-sm whitespace-nowrap"
      >
        + Create new
      </Link>




      <div>
      <Link
        href="/contact"
        className="text-gray-600 hover:text-gray-800 flex items-center gap-1 text-sm md:mt-auto mb-4 "
      >
        <HelpCircle size={18} className="hidden md:inline" />
        <span className="hidden md:inline">Help</span>
      </Link>
      <Link href="/pricing" className="text-gray-600 hover:text-gray-800 flex items-center gap-1 mb-4 text-sm md:mt-auto">
          <CreditCard size={18} className="hidden md:inline" />
          <span className="hidden md:inline">Pricing</span>
      </Link>
      <Link href="/logout" className="text-gray-600 mb-4 hover:text-gray-800 flex items-center gap-1 text-sm md:mt-auto cursor-pointer" >
          <LogOut size={18} className="hidden md:inline" />
          <span className="hidden md:inline">Logout</span>
      </Link>
      </div>

      {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white mt-2 rounded-lg shadow px-4 py-3 text-sm text-gray-700 space-y-2">
          <Link
        href="/contact"
        className="text-gray-600 hover:text-gray-800 flex items-center gap-1 text-sm md:mt-auto mb-4"
      >
        <HelpCircle size={18} />
        <span className="hidden md:inline">Help</span>
      </Link>
      <Link href="/pricing" className="text-gray-600 hover:text-gray-800 flex items-center gap-1 mb-4 text-sm md:mt-auto">
          <CreditCard size={18} />
          <span className="hidden md:inline">Pricing</span>
      </Link>
      <Link href="/logout" className="text-gray-600 mb-4 hover:text-gray-800 flex items-center gap-1 text-sm md:mt-auto cursor-pointer" >
          <LogOut size={18} />
          <span className="hidden md:inline">Logout</span>
      </Link>
        </div>
      )}
    </aside>
  );
}
