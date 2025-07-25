import Image from 'next/image';
import type { FC } from 'react';
import List from './List';



const About: FC = () => {
        return (
            <section className='bg-[var(--background)] my-5 sm:my-20'>
                <h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl md:text-6xl'>About</h2>
                <div className='block md:flex gap-2 px-4 sm:px-20'>
                <div className="relative bg-[var(--background-element)] w-[250px]  h-[170px] sm:w-[650px] sm:h-[250px] rounded-xl overflow-visible 2xl:w-[850px] 2xl:h-[450px]">
                    <div className="absolute -top-6 -right-6 w-full h-full">
                        <Image
                            src="/hero-bg.jpg"
                            alt="About picture"
                            fill
                            className="rounded-xl object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />

                    </div>
                
                </div>
                        
                   
                <div className='px-1 sm:px-20 py-3 text-sm sm:text-xl'>
                    <div className='font-bold mb-5 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at, expedita minus voluptatum tempore corporis ratione aut ea nulla animi ex quod autem quaerat tempora asperiores
                    </div>
                    <p className='text-[var(--text-element-small-black)] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, enim maxime laboriosam corrupti esse architecto?</p>
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