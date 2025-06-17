import LogoutUser from '@/app/logout/LogoutUser';
import { useAuthState } from '@/context/AuthContext';
import { ChevronLeft, CreditCard, HelpCircle, Home, LogOut, Menu, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { useState, type FC } from 'react';



const Sidebar: FC = () => {
      const { userData } = useAuthState();
    const [logout, setLogout] = useState(false);
    const [open, setOpen] = useState(false); // mobile toggle
    const [collapsed, setCollapsed] = useState(false); // desktop collapse toggle
    const method = userData?.subscription?.method
    const paid = userData?.subscription?.paid

  const logoutHandle = () => setLogout(true);

        return (
            <aside className={`fixed h-screen w-1/6 bg-[var(--background-element)] z-[999] shadow-sm transition-all duration-300 flex flex-col justify-between py-10 mt-20 rounded-r-2xl
       `}>
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
        <Home size={20} className="text-[var(--icon-color)]" />
        <Link
          href="/dashboard"
          className={`text-[var(--icon-color)] font-medium text-sm md:text-base ${
            collapsed ? "hidden" : "inline"
          }`}
        >
          Dashboard
        </Link>
      </div>

      {/* Create new button */}
      <Link
        href="/new"
        className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] text-sm whitespace-nowrap flex items-center mx-5"
      >
        <Plus size={18} />
        {!collapsed && <span className="ml-2">Create</span>}
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex flex-col space-y-6 w-full">
        <Link href="/contact" className="flex items-center gap-2 text-sm text-[var(--icon-color)] hover:text-[var(--text-hover)]">
          <HelpCircle size={18} />
          {!collapsed && <span>Help</span>}
        </Link>
        <Link href="/pricing" className="flex items-center gap-2 text-sm text-[var(--icon-color)] hover:text-[var(--text-hover)]">
          <CreditCard size={18} />
          {!collapsed && <span>Pricing</span>}
        </Link>
        <div
          onClick={logoutHandle}
          className="flex items-center gap-2 text-sm text-[var(--icon-color)] hover:text-red-600 cursor-pointer"
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
        <div className="md:hidden bg-white mt-2 rounded-lg shadow px-4 py-3 text-sm text-[var(--icon-color)] space-y-2">
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
          {userData?.subscription && paid === true && method === "year" ? "Annual plan Active" : method === "month" ? "Monthly plan active" : "Free plan"}
        </div>
      )}

      {logout && <LogoutUser />}
            </aside>
        );
}
export default Sidebar;