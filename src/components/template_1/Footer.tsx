import type { FC } from 'react';



const Footer: FC = () => {
        return (
          <div className='text-center pt-10 space-y-5 sm:space-y-10'>
            <div className='space-y-5'>
                <h2 className='font-bold text-3xl'>James</h2>
                <p className='text-sm px-5 text-[var(--text-element-small-black)]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, eum.</p>
                <div className="space-x-2 text-sm sm:space-x-5 sm:text-2xl text-[var(--text-element-small)] ">
                    <a href="#"><i className="bi bi-twitter-x"  /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                </div>
            </div>
            <div className='border-t py-5 border-[var(--text-element-small)] text-sm text-[var(--text-element-small-black)]'>Copyright <span className='italic font-bold'>James</span> All Rights Reserved</div>
          </div>  
            
        );
}
export default Footer;