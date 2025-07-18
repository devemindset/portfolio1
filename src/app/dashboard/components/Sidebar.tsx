"use client"
import LogoutUser from '@/app/logout/LogoutUser';
import {  CreditCard, HelpCircle, Home, LogOut, Menu,  X } from 'lucide-react';
import Link from 'next/link';
import { useState, type FC } from 'react';
import CreateReport from './CreateReport';
import AddSession from './session/AddSession';
import LinkButton from '@/components/LinkButton';
import { useAuthState } from '@/context/AuthContext';
import { useTimeEntry } from '@/hook/useTimeEntry';

const Sidebar: FC = () => {
  const {userData} = useAuthState()
  const [isOpen, setIsOpen] = useState(false);

  const [logout, setLogout] = useState(false);

  const {sessions} = useTimeEntry()


  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const logoutHandle = () => setLogout(true);

  return (
    <>
      {/* Menu Toggle Button - Always Visible */}
      <button
         onClick={toggleSidebar}
        className="fixed top-19 left-4 z-[1001] bg-white p-2 rounded-md shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="hidden lg:block fixed inset-0 ml-64 bg-black/40 z-[800]"
           onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
       className={`fixed top-15 left-0 h-screen w-64 bg-white shadow-lg z-[100] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 flex flex-col justify-between px-6 py-15`}
      >
        <div className="flex flex-col justify-between h-full px-4 py-6">
          <div>
            {/* Dashboard Link */}
            <div className="flex items-center gap-2 mb-6">
              <Home size={20} className="text-[var(--icon-color)]" />
              <Link
                href="/dashboard"
                className="text-[var(--icon-color)] font-medium text-sm md:text-base"
              >
                Dashboard
              </Link>
            </div>

            {/* Creation Buttons - Desktop Only */}
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <LinkButton name='+ Add new client' path='clients/new' />
                {userData.clients?.length !== 0 && <LinkButton name='+ Add new project' path='projects/new' />}
              </div>
              {userData.projects?.length !== 0 && <AddSession />}
              {sessions?.length !== 0 &&  <CreateReport />}
            </div>
          </div>

          {/* Navigation Links - Always Visible */}
          <div className="flex flex-col space-y-6 w-full">
            <Link href="/contact" className="flex items-center gap-2 text-sm text-[var(--icon-color)] hover:text-[var(--text-hover)]">
              <HelpCircle size={18} />
              <span>Help</span>
            </Link>
            <Link href="/pricing" className="flex items-center gap-2 text-sm text-[var(--icon-color)] hover:text-[var(--text-hover)]">
              <CreditCard size={18} />
              <span>Pricing</span>
            </Link>
            <div
              onClick={logoutHandle}
              className="flex items-center gap-2 text-sm text-[var(--icon-color)] hover:text-red-600 cursor-pointer"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </div>
          </div>

          {/* Subscription Info - Mobile Only */}
          {/* {userData?.subscription && (
            <div className="md:hidden text-center text-xs text-blue-600 italic mt-4">
              {paid === true && method === "year" ? "Annual plan Active" : method === "month" ? "Monthly plan active" : "Free plan"}
            </div>
          )} */}
        </div>

        {logout && <LogoutUser />}
      </aside>
    </>
  );
};

export default Sidebar;
