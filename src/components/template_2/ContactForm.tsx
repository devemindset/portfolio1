"use client"
import Link from 'next/link';
import type { FC } from 'react';
import {motion} from "framer-motion"


const ContactForm: FC = () => {
        return (
            <div className=' bg-[var(--background-element-3)] pb-10'>

            
            <motion.section className='bg-[var(--background-element-3)] flex flex-col items-center mx-1 sm:mx-24 rounded-2xl shadow-2xl space-y-5 p-2 sm:p-10'
            initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            >
                <div className='grid grid-cols-2 gap-5 w-full border-[var(--text-element-small)]'>
                    <input type="email" className='border p-2 border-[var(--text-element-small)] focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] bg-[var(--input-bg)]' placeholder='Email' />
                    <input type="text" className='border p-2 border-[var(--text-element-small)] focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] bg-[var(--input-bg)]' placeholder='Name' />
                </div>
                <div className='w-full'>
                    <input type="text" className='border w-full p-2 border-[var(--text-element-small)] focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] bg-[var(--input-bg)]' placeholder='Object' />
                </div>
                <textarea className='border w-full border-[var(--text-element-small)] focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] bg-[var(--input-bg)] resize-y h-40'  />
                <button className='my-5 bg-[var(--btn-bg)] text-white px-5 py-2 rounded-xl hover:scale-110 hover:bg-[var(--btn-hover)] transition-all'>
                    <Link href="/">Send Message</Link>
                </button>
            </motion.section>
            </div>
        );
}


export default ContactForm;