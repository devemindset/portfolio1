import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';


// interface FooterProps {}

const Footer: FC = ({}) => {
        return (
          <>
            <footer className="bg-white shadow-md mt-16">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
              
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
              <div className="flex gap-6 text-gray-500 text-sm">
                <Link href="/terms_of_service">
                  <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Terms of Service</span>
                </Link>
                <Link href="/privacy_policy">
                  <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">Privacy Policy</span>
                </Link>
                <Link href="/about">
                  <span className="hover:text-[#2A6DD2] transition-colors cursor-pointer">About</span>
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
              © 2025 SnapValidate. All rights reserved.
            </div>
          </footer> 
          </>
        );
}
export default Footer;