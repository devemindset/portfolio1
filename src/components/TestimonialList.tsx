'use client';

import { FC, useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import {motion} from "framer-motion"
import { TestimonialType } from '../../types';


interface TestimonialListProps {
    testimonials : TestimonialType[];
} 

const TestimonialList: FC<TestimonialListProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden bg-[var(--background-element-2)]/30 py-10">
            <div className=' text-center'>
                <motion.h2 className='text-center py-5 my-5 text-3xl sm:py-10 font-bold sm:text-4xl '
                initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                >Testimonials</motion.h2>
                <motion.p className='text-sm sm:text-2xl px-5 text-[var(--text-element-small-black)]'
                initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </motion.p>
            </div>

            <motion.div className="relative w-full overflow-hidden"
            initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
            >
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="min-w-full flex justify-center">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentIndex === index ? 'bg-[var(--text-span)]' : 'bg-white'
                            }`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default TestimonialList;
