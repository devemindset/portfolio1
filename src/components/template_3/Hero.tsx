"use client"
import type { FC } from 'react';
import { motion } from "framer-motion";




const Hero: FC = () => {
        return (
            <>

            
            <section className='relative flex items-center justify-center  w-screen h-screen'>
                <motion.div className="absolute inset-0 bg-cover bg-center"
                initial= {{ opacity:0, y: 40 }}
                animate = {{opacity : 1, y: 0}}
                transition={{ duration:1, delay:0.3}}
                style={{
                    backgroundImage : "url('./template_3/hero-bg.jpg')"
                }}
                >
                    
       
                </motion.div>

                <motion.div className="absolute flex space-x-2 sm:space-x-3 md:space-x-5 text-md sm:text-2xl  lg:text-4xl   text-[var(--text-element-small-black)] left-5 top-32 z-50 items-start 2xl:text-6xl 2xl:space-y-10 "
                    initial= {{ opacity:0, y: 70,x : 20 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.5}}
                >
                    <a href="#"><i className="bi bi-twitter-x"  /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                </motion.div>
                <div className='relative flex justify-center flex-col text-[var(--text-element)] items-center'>
                <motion.h1 className='text-3xl sm:text-4xl md:text-6xl  2xl:text-9xl font-bold'
                    initial= {{ opacity:0, y: -100 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.6}}
                >Rose Smith</motion.h1>
                <motion.h3 className=' text-center mt-2 sm:mt-4 text-sm sm:text-2xl 2xl:text-5xl text-[var(--text-element-small-black)] italic'
                initial= {{ opacity:0, y: -100 }}
                animate = {{opacity : 1, y: 0}}
                transition={{ duration:1, delay:0.7}}
                >{"I'm "} a professional illustrator from San Francisco
                
                
                
                
                </motion.h3>
                <button className='bg-[var(--btn-bg)] py-4 px-10 text-[var(--btn-text)] mt-10 rounded-4xl font-semibold hover:scale-105 hover:bg-[var(--btn-hover)] transition-all cursor-pointer shadow-2xl hover:text-[var(--btn-bg)]'>ABOUT ME</button>
                </div>
            </section>
            </>
        );
}
export default Hero;