"use client";

import { Menu, X } from 'lucide-react';
import { useState, type FC } from 'react';
import SmartLink from '../ui/SmartLink';
import { usePathname } from 'next/navigation';

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className='fixed w-full h-20 2xl:h-30 bg-[var(--bg-header)]/20 flex justify-between items-center px-5 sm:px-10 md:px-20 text-[var(--text-element-small-black)] z-10 top-0'>
      <div className='font-bold text-[var(--text-element)] 2xl:text-5xl'>Rose</div>

      {/* Desktop Nav */}
      <nav className='hidden lg:flex space-x-2 2xl:text-2xl 2xl:space-x-4'>
        {navItems.map(({ href, label }) => (
          <SmartLink
            key={href}
            href={href}
            className={`cursor-pointer ${
              isActive(href)
                ? 'text-[var(--text-active)] font-semibold border-b-3 border-[var(--text-active)]'
                : 'text-[var(--text-element-small-black)]'
            }`}
          >
            {label}
          </SmartLink>
        ))}
      </nav>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="lg:hidden cursor-pointer">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden fixed top-5 right-1 bg-white mt-10 rounded-lg shadow px-20 py-3 text-sm text-gray-700 space-y-2">
          {navItems.map(({ href, label }) => (
            <SmartLink
              key={href}
              href={href}
              className={`block hover:text-[var(--text-hover)] ${
                isActive(href) ? 'text-[var(--text-active)] font-semibold' : ''
              }`}
            >
              {label}
            </SmartLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
