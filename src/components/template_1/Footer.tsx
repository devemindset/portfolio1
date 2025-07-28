"use client"
import type { FC } from 'react';
import {motion} from 'framer-motion'
import { SocialNetworkType } from '../../types';

interface FooterProps {
  social : SocialNetworkType[];
}

const Footer: FC<FooterProps> = ({ social }) => {
        const socialLinks = social.reduce((acc,curr) => {
        acc[curr.type.toLowerCase()] = curr.url
        return acc
    },{} as Record<string, string>);

        return (
          <motion.div className='text-center pt-10 space-y-5 sm:space-y-10'
          initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
          >
            <div className='space-y-5'>
                <h2 className='font-bold text-3xl'>James</h2>
                <p className='text-sm px-5 text-[var(--text-element-small-black)]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, eum.</p>
                <div className="space-x-2 text-sm sm:space-x-5 sm:text-2xl text-[var(--text-element-small)] ">
                    {socialLinks.twitter && <a href={socialLinks.twitter} target='_blank'><i className="bi bi-twitter-x"  /></a>}

                    {socialLinks.facebook && <a href={socialLinks.facebook} target='_blank'><i className="bi bi-facebook" /></a>}

                    {socialLinks.instagram && <a href={socialLinks.instagram} target='_blank'><i className="bi bi-instagram" /></a>}

                    {socialLinks.linkedin && <a href={socialLinks.linkedin} target='_blank'><i className="bi bi-linkedin" /></a>}

                    {socialLinks.tiktok && <a href={socialLinks.tiktok} target='_blank'><i className="bi bi-tiktok" /></a>}

                    {socialLinks.github && <a href={socialLinks.github} target='_blank'><i className="bi bi-github" /></a>}

                    {socialLinks.youtube && <a href={socialLinks.youtube} target='_blank'><i className="bi bi-youtube" /></a>}

                    {socialLinks.pinterest && <a href={socialLinks.pinterest} target='_blank'><i className="bi bi-pinterest" /></a>}

                    {socialLinks.discord && <a href={socialLinks.discord} target='_blank'><i className="bi bi-discord" /></a>}

                    {socialLinks.whatsapp && <a href={socialLinks.whatsapp} target='_blank'><i className="bi bi-whatsapp" /></a>}

                    {socialLinks.snapchat && <a href={socialLinks.snapchat} target='_blank'><i className="bi bi-snapchat" /></a>}

                    {socialLinks.reddit && <a href={socialLinks.reddit} target='_blank'><i className="bi bi-reddit" /></a>}

                    {socialLinks.telegram && <a href={socialLinks.telegram} target='_blank'><i className="bi bi-telegram" /></a>}
                    {socialLinks.other && <a href={socialLinks.other} target='_blank'><i className="bi bi-other" /></a>}
                </div>
            </div>
            <div className='border-t py-5 border-[var(--text-element-small)] text-sm text-[var(--text-element-small-black)]'>Copyright <span className='italic font-bold'>James</span> All Rights Reserved</div>
          </motion.div>  
            
        );
}
export default Footer;