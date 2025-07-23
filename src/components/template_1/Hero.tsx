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

                <div className="fixed flex flex-col space-y-5 text-4xl  h-screen text-[var(--text-element-small)] justify-end left-5 pb-10 z-50 items-end">
                    <a href="#"><i className="bi bi-twitter-x"  /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
        </div>
                <div className='absolute flex justify-center flex-col h-screen left-44 text-[var(--text-element)]'>
                <h1 className='text-6xl font-black'>James Smith</h1>
                <h3 className='mt-4 text-2xl'>{"I'm"} a freelancer</h3>
                </div>
            </section>
            </>
        );
}
export default Hero;