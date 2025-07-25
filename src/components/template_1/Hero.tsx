"use client"
import type { FC } from 'react';



const Hero: FC = () => {
        return (
            <>

            
            <section className='relative flex w-screen h-screen'>
                <div className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage : "url('./hero-bg.jpg')"
                }}
                >
                    
                </div>
        <div className="absolute inset-0 bg-black/50" />

                <div className="absolute flex flex-col space-y-2 sm:space-y-3 md:space-x-5 text-md sm:text-2xl md:text-3xl lg:text-4xl  h-screen text-[var(--text-element-small)] justify-end left-5 pb-10 z-50 items-end">
                    <a href="#"><i className="bi bi-twitter-x"  /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                </div>
                <div className='absolute flex justify-center flex-col h-screen left-12 md:left-44 text-[var(--text-element)]'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl font-black'>James Smith</h1>
                <h3 className='mt-2 sm:mt-4 text-sm sm:text-2xl'>{"I'm"} a freelancer</h3>
                </div>
            </section>
            </>
        );
}
export default Hero;