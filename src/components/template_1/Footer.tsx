import type { FC } from 'react';



const Footer: FC = () => {
        return (
          <div className='text-center pt-10 space-y-10'>
            <div className='space-y-5'>
                <h2 className='font-bold text-3xl'>James</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, eum.</p>
                <div className="space-x-5 text-2xl text-[var(--text-element-small)] ">
                    <a href="#"><i className="bi bi-twitter-x"  /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                </div>
            </div>
            <div className='border-t py-5 border-[var(--text-element-small)]'>Copyright James All Rights Reserved</div>
          </div>  
            
        );
}
export default Footer;