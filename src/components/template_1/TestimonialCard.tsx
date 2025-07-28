import Image from 'next/image';
import type { FC } from 'react';
import { TestimonialType } from '../../types';

interface TestimonialCardProps {
        testimonial : TestimonialType;

}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
        return (
           <div className='flex items-center flex-col w-full max-w-3xl mx-auto my-10 '>

                    <div >
                        <Image
                            src={testimonial.image}
                            width={95}
                            height={95}
                            alt={testimonial.name}
                         className='rounded-full '   
                        />
                    </div>
                    <div className='font-bold my-2'>{testimonial.name}</div>
                    <div className='text-sm mb-2'>{testimonial.field}</div>
                    <div className='my-5 text-yellow-500 text-md space-x-1'>
                        <i className="bi bi-star-fill "  />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                    </div>
                    <p className='text-center px-3 italic sm:px-20'>
                        <i className="bi bi-quote quote-icon-left text-xl text-[var(--text-span)]" />
                        <span className='text-sm text-[var(--text-element-small-black)] text-center'>{testimonial.text}</span>
                        <i className="bi bi-quote quote-icon-right text-xl  text-[var(--text-span)]" />
                    </p>
                    
                </div> 
        );
}
export default TestimonialCard;