"use client"
import { Menu, X } from 'lucide-react';
import { useState, type FC } from 'react';



const Header: FC = () => {
    const [open,setOpen] = useState(false);


        return (
            <header className='fixed w-full h-20 2xl:h-30 bg-[var(--bg-header)]/80 flex justify-between items-center px-5 sm:px-10 md:px-20 text-[var(--text-element-small)] z-10'>
                <div className='font-bold text-[var(--text-element)] 2xl:text-5xl'>James</div>
                <nav className='hidden lg:flex space-x-2 2xl:text-2xl 2xl:space-x-4'>
                    <div id='#hero' className='cursor-pointer'>Home</div>
                    <div id='#about' className='cursor-pointer'>About</div>
                    <div id='#service' className='cursor-pointer'>Services</div>
                    <div id='#portfolio' className='cursor-pointer'>Portfolio</div>
                    <div id='#contact' className='cursor-pointer'>Contact</div>
                </nav>

                {/* Mobile toggle */}
                <button onClick={() => setOpen(!open)} className="lg:hidden cursor-pointer">
                {open ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden fixed top-5 right-1 bg-white mt-10 rounded-lg shadow px-20 py-3 text-sm text-gray-700 space-y-2 ">
          <a href="#features" className="block hover:text-[var(--text-hover)]">
            Home
          </a>
          <a
            href="#how-it-works"
            className="block hover:text-[var(--text-hover)]"
          >
            About
          </a>
          <a href="#pricing" className="block hover:text-[var(--text-hover)]">
            Services
          </a>
          <a href="#faq" className="block hover:text-[var(--text-hover)]">
            Portfolio
          </a>
          <a href="#faq" className="block hover:text-[var(--text-hover)]">
            Contact
          </a>
            
        </div>
      )}
            </header>
        );
}
export default Header;