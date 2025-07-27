"use client"
import Image from 'next/image';
import type { FC } from 'react';
import {motion} from "framer-motion"
interface ProductProps {
    detail : string;
    title : string;
    imageSrc : string;
}

const Product: FC<ProductProps> = ({detail,title,imageSrc}) => {
        return (
            <div className='py-10  flex flex-col items-center'>
                <div className='w-full px-2 sm:w-[650px] '>
                    <div className='w-full relative h-[250px] sm:h-[350px]'

                    >
                        <Image src={imageSrc}  alt={title}
                            fill
                            priority
                            className='object-cover'
                            
                        />
                    </div>
                    <motion.h2 className='py-5 text-center font-bold text-xl sm:text-2xl'
                    initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
              
                viewport={{ once: true }}
                    >{title}</motion.h2>
                    <p className='whitespace-pre-wrap text-sm  sm:text-xl px-1'
                    
                    >{detail}</p>
                
                </div>
                
            </div>
        );
}
export default Product;