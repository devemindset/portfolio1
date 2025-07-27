"use client"
import Image from 'next/image';
import type { FC } from 'react';
import List from './List';
import {motion} from "framer-motion"



const About: FC = () => {
        return (
            <section id="about" className='bg-[var(--background)] my-5 sm:my-20'>
                <motion.h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl '
                initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                >About</motion.h2>
                <div className='block md:flex gap-2 px-4 sm:px-20'>
                <motion.div className="relative bg-[var(--background-element)] w-[250px]  h-[170px] sm:w-[650px] sm:h-[250px] rounded-xl overflow-visible 2xl:w-[850px] 2xl:h-[450px]"
                initial= {{ opacity:0, y: 40 }}
            
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                >
                    <motion.div className="absolute -top-6 -right-6 w-full h-full"
                    initial= {{ opacity:0, y: 40 }}
            
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                    >
                        <Image
                            src="/hero-bg.jpg"
                            alt="About picture"
                            fill
                            className="rounded-xl object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                        />

                    </motion.div>
                
                </motion.div>
                        
                   
                <div className='px-1 sm:px-20 py-3 text-sm sm:text-xl'>
                    <motion.div className='font-bold mb-5 text-sm'
                    initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at, expedita minus voluptatum tempore corporis ratione aut ea nulla animi ex quod autem quaerat tempora asperiores
                    </motion.div>
                    <motion.p className='text-[var(--text-element-small-black)] text-sm'
                    initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, enim maxime laboriosam corrupti esse architecto?</motion.p>
                    <div className='my-5'>
                        <List />
                        <List />
                        <List />
                        <List />
                    </div>
                </div>
                </div>
                

            </section>
        );
}
export default About;