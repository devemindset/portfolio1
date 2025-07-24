import Image from 'next/image';
import type { FC } from 'react';
import List from './List';



const About: FC = () => {
        return (
            <section className='bg-[var(--background)] my-20'>
                <h2 className='text-center py-10 font-bold text-6xl'>About</h2>
                <div className='flex gap-2 px-20'>
                    <div className='relative bg-[var(--background-element)] w-[650px] h-[250px] rounded-xl'>
                        <div  className='absolute right-[-25px] top-[-25px] left-[25px] '>
                            <Image
                                src="/hero-bg.jpg" 
                                width={650}
                                height={650}
                                alt='About picture'
                               className='rounded-xl'
                            />
                        </div>
                    </div>
                        
                   
                <div className='px-20'>
                    <div className='font-bold mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at, expedita minus voluptatum tempore corporis ratione aut ea nulla animi ex quod autem quaerat tempora asperiores
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, enim maxime laboriosam corrupti esse architecto?</p>
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