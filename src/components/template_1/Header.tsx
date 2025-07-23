import type { FC } from 'react';



const Header: FC = () => {
        return (
            <header className='fixed w-full h-20 bg-[var(--bg-header)]/30 flex justify-between items-center px-20 text-[var(--text-element-small)] z-10'>
                <div className='font-bold text-[var(--text-element)]'>James</div>
                <nav className='flex space-x-2'>
                    <div id='#hero' className='cursor-pointer'>Home</div>
                    <div id='#about' className='cursor-pointer'>About</div>
                    <div id='#service' className='cursor-pointer'>Services</div>
                    <div id='#portfolio' className='cursor-pointer'>Portfolio</div>
                    <div id='#contact' className='cursor-pointer'>Contact</div>
                </nav>
            </header>
        );
}
export default Header;