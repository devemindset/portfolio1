"use client";
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuthState } from '@/context/AuthContext';
import { motion } from "framer-motion";

// interface FooterProps {}

const Footer: FC = ({}) => {
  const { userData } = useAuthState();
        return (
          <>
            <motion.footer className="bg-white shadow-md mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 "
            
      
            
            >
              
              {/* Left section: Logo + Text */}
              <div className="flex flex-col items-center md:items-start">
              <div className="transition-transform transform hover:scale-105 mb-2">
                <Image 
                    src="/favicon_io/android-chrome-192x192.png"   // <-- mets ici le chemin de ton image
                    alt="Snapvalidate Logo"
                    width={48}        // ajuste selon la taille que tu veux
                    height={48}
                    
                />
                </div>
                <span className="text-gray-500 text-sm">
                    Made with ❤️ by Mananga Raimundo group
                </span>
                </div>
      
              {/* Center section: Legal Links */}
              
              <div className="flex gap-6 text-gray-500 text-xs">
                <Link href="/">
                  <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Home</span>
                </Link>
                {userData.username && <Link href="/logout">
                  <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Log out</span>
                </Link>}
                {!userData.username && <Link href="/login">
                  <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Login</span>
                </Link>}
                <Link href="/terms_of_service">
                  <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Terms of Service</span>
                </Link>
                <Link href="/privacy_policy">
                  <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Privacy Policy</span>
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
      
              {/* Right section: Twitter Link */}
              {/* <div className="text-gray-500 text-sm">
                <a 
                  href="https://twitter.com/goguemona" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#2A6DD2] transition-colors"
                >
                  Follow me on Twitter
                </a>
              </div> */}
      
            </div>
      
            {/* Bottom copyright */}
            <div className="border-t border-gray-200 text-center text-gray-400 text-xs py-4">
              © 2025 ValidationFlow. All rights reserved.
            </div>
          </motion.footer> 
          </>
        );
}
export default Footer;