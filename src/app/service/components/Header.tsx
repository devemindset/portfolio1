"use client"
import { Menu, X } from 'lucide-react';
import { useEffect, useState, type FC } from 'react';

const sections = ['home', 'service', 'contact'];

const Header: FC = () => {
    const [open,setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `cursor-pointer hover:text-[var(--text-hover)] ${
      activeSection === id ? 'text-blue-500 font-semibold' : ''
    }`;


        return (
    <header className='fixed w-full h-20 2xl:h-30 bg-[var(--bg-header)]/30 flex justify-between items-center px-5 sm:px-10 md:px-20 text-[var(--text-element-small)] z-10 backdrop-blur-md'>
      <div className='font-bold text-[var(--text-element)] 2xl:text-5xl'>James</div>
      
      {/* Desktop nav */}
      <nav className='hidden lg:flex space-x-2 2xl:text-2xl 2xl:space-x-4'>
        {sections.map((section) => (
          <a
            key={section}
            href={section === "home" ? "/" : `#${section}`}
            className={linkClass(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      {/* Toggle button */}
      <button onClick={() => setOpen(!open)} className="lg:hidden cursor-pointer">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden fixed top-5 right-1 bg-white mt-10 rounded-lg shadow px-20 py-3 text-sm text-gray-700 space-y-2 ">
          {sections.map((section) => (
            <a
              key={section}
              href={section === "home" ? "/" : `#${section}`}

              className={`block ${linkClass(section)}`}
              onClick={() => setOpen(false)} // Close menu after click
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;