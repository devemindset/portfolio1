"use client";
import { useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Contact,
  CreditCard,
  HelpCircle,
  HelpingHand,
  LogOut,
  User,
 
} from "lucide-react";
import LogoutUser from "@/app/logout/LogoutUser";
import { useRouter } from "next/navigation";

const PopupUserInfo: FC = () => {
  const [logout, setLogout] = useState(false);

  const logoutHandle = () => setLogout(true);

  const router = useRouter();

  const LinkStyle =
    "flex items-center gap-2 text-base hover:text-blue-600 transition cursor-pointer";

  

  return (
    <AnimatePresence>
      <motion.section
        key="popup-user"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 w-[90vw] max-w-[280px]  md:w-40 bg-[var(--background-element)] text-black shadow-xl z-[999] px-6 py-5 space-y-3 flex flex-col"
      >
        {/* Close Button (only mobile) */}
        {/* <div className="flex md:hidden">
          <button
            className="text-gray-600 hover:text-gray-900"
            
          >
            <X size={24} />
          </button>
        </div> */}

        {/* divs */}
        <div  onClick={() => router.push("/account")} className={LinkStyle}>
          <User size={18} />
          <span>Account</span>
        </div>

        <div  onClick={() => router.push("/contact")} className={LinkStyle}>
          <HelpCircle size={18} />
          <span>Help</span>
        </div>

        <div  onClick={() => router.push("/pricing")}  className={LinkStyle}>
          <CreditCard size={18} />
          <span>Pricing</span>
        </div>

        <div  onClick={() => router.push("/contact")}  className={LinkStyle}>
          <Contact size={18} />
          <span>Contact</span>
        </div>

        <div  onClick={() => router.push("/feedback")}  className={LinkStyle}>
          <HelpingHand size={18} />
          <span>Feedback</span>
        </div>

        <div
          onClick={logoutHandle}
          role="button"
          className={`${LinkStyle} mt-auto cursor-pointer`}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </div>

        {logout && <LogoutUser />}
      </motion.section>
    </AnimatePresence>
  );
};

export default PopupUserInfo;
