"use client";

import { useState, type FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuthState } from "@/context/AuthContext";
import { motion } from "framer-motion";
import LogoutUser from "@/app/logout/LogoutUser";

const Footer: FC = () => {
  const { userData } = useAuthState();
  const [logout, setLogout] = useState(false);

  const logoutHandle = () => {
    setLogout(true);
  };

  return (
    <>
      <motion.footer
        className="bg-white shadow-md mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6 text-center md:text-left">
          {/* Left section: Logo + Text */}
          <div className="flex flex-col items-center md:items-start">
            <div className="transition-transform transform hover:scale-105 mb-2">
              <Image
                src="/android-chrome-192x192.png"
                alt="validation flow Logo"
                width={48}
                height={48}
              />
            </div>
            <span className="text-gray-500 text-sm">
              Made with ❤️ by Mananga Raimundo group
            </span>
          </div>

          {/* Center section: Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 text-sm">
            <Link href="/">
              <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Home</span>
            </Link>
            {userData.full_name ? (
              <span
                onClick={logoutHandle}
                className="hover:text-[#2A6DD2] transition-colors cursor-pointer"
              >
                Log out
              </span>
            ) : (
              <Link href="/login">
                <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Login</span>
              </Link>
            )}
            <Link href="/terms_of_service">
              <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">
                Terms
              </span>
            </Link>
            <Link href="/privacy_policy">
              <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">
                Privacy
              </span>
            </Link>
            <Link href="/about">
              <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">About</span>
            </Link>
            <Link href="/feedback">
              <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Feedback</span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Contact</span>
            </Link>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-200 text-center text-gray-400 text-xs py-4">
          © 2025 TimeTallyApp. All rights reserved.
        </div>
      </motion.footer>

      {logout && <LogoutUser />}
      
    </>
  );
};

export default Footer;
