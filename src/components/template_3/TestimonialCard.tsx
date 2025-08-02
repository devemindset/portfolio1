import Image from 'next/image';
import type { FC } from 'react';

interface TestimonialCardProps {
        imageSrc : string;
        name : string;
        occupation : string;
        quote : string;

}

const TestimonialCard: FC<TestimonialCardProps> = ({ imageSrc,name,occupation,quote }) => {
        return (
           <div className='flex items-center flex-col w-full max-w-3xl mx-auto my-10 '>

                    <div >
                        <Image
                            src={imageSrc}
                            width={95}
                            height={95}
                            alt={name}
                         className='rounded-full '   
                        />
                    </div>
                    <div className='font-bold my-2'>{name}</div>
                    <div className='text-sm mb-2'>{occupation}</div>
                    <div className='my-5 text-yellow-500 text-md space-x-1'>
                        <i className="bi bi-star-fill "  />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                    </div>
                    <p className='text-center px-3 italic sm:px-20'>
                        <i className="bi bi-quote quote-icon-left text-xl text-[var(--text-span)]" />
                        <span className='text-sm text-[var(--text-element-small-black)] text-center'>{quote}</span>
                        <i className="bi bi-quote quote-icon-right text-xl  text-[var(--text-span)]" />
                    </p>
                    
                </div> 
        );
}
export default TestimonialCard;