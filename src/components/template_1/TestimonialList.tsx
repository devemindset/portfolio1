import Image from 'next/image';
import type { FC } from 'react';



const TestimonialList: FC = () => {
        return (
            <section className='my-20 bg-[var(--background-element-2)]/30 py-10'>
                <div className=' text-center'>
                    <h2 className='font-bold text-6xl py-5'>Testimonials</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* list  */}
                <div className='flex items-center flex-col my-10 '>

                    <div >
                        <Image
                            src="/picture1.png"
                            width={95}
                            height={95}
                            alt='testimonial profile'
                         className='rounded-full '   
                        />
                    </div>
                    <div className='font-bold my-2'>Matt Larson</div>
                    <div className='text-sm mb-2'>Designer</div>
                    <div className='my-5 text-yellow-500 text-md space-x-1'>
                        <i className="bi bi-star-fill "  />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                    </div>
                    <p className='text-center px-20'>
                        <i className="bi bi-quote quote-icon-left text-5xl text-[var(--text-span)]" />
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores iure adipisci distinctio iste dignissimos quibusdam. Quisquam soluta minima consequuntur sed.iste dignissimos quibusdam. Quisquam soluta minima consequuntur sed.</span>
                        <i className="bi bi-quote quote-icon-right text-5xl text-[var(--text-span)]" />
                    </p>
                    
                </div>
            </section>
        );
}
export default TestimonialList;