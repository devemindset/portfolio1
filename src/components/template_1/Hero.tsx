"use client"
import type { FC } from 'react';
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";



const Hero: FC = () => {
        return (
            <>

            
            <section id='hero' className='relative flex w-screen h-screen'>
                <motion.div className="absolute inset-0 bg-cover bg-center"

                initial= {{ opacity:0, y: 40 }}
                animate = {{opacity : 1, y: 0}}
                transition={{ duration:1, delay:0.3}}

                style={{
                    backgroundImage : "url('./hero-bg.jpg')"
                }}
                >
                    
                </motion.div>
        <div className="absolute inset-0 bg-black/50" />

                <motion.div className="absolute flex flex-col space-y-2 sm:space-y-3 md:space-y-5 text-md sm:text-2xl  lg:text-4xl  h-screen text-[var(--text-element-small)] justify-end left-5 pb-10 z-50 items-end 2xl:text-6xl 2xl:space-y-10 ml-2"
                initial= {{ opacity:0, y: -70,x : -20 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.5}}
                >
                    <a href="#"><i className="bi bi-twitter-x"  /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                </motion.div>
                <div className='absolute flex justify-center flex-col h-screen left-12 md:left-44 bg text-[var(--text-element)]'>
                <motion.h1 className='text-3xl sm:text-4xl md:text-6xl font-black 2xl:text-9xl'
                initial= {{ opacity:0, y: -100 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.6}}
                >James Smith</motion.h1>
                <motion.h3 className='mt-2 sm:mt-4 text-sm sm:text-2xl 2xl:text-5xl text-[var(--text-element-small)]'
                initial= {{ opacity:0, y: -100 }}
                animate = {{opacity : 1, y: 0}}
                transition={{ duration:1, delay:0.7}}
                >{"I'm"} <TypeAnimation
                
                
                    sequence={
                        [
                            " freelancer",1000,"",400
                        ]
                    }
                    wrapper='span'
                    cursor={true}
                    speed={40}
                    repeat={Infinity}
                    className='inline-block'
                />
                </motion.h3>
                </div>
            </section>
            </>
        );
}
export default Hero;