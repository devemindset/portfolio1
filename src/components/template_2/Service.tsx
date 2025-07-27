"use client"
import Link from 'next/link';
import type { FC } from 'react';
import {motion} from "framer-motion"

interface ServiceProps {
    icon : React.ReactNode,
    title : string;
    description : string;
    path : string;
}

const Service: FC<ServiceProps> = ({icon,description,path,title}) => {
        return (
            <motion.div className='block pl-10 2xl:flex bg-[var(--background-element-3)] p-10 mx-3 shadow-2xl rounded-2xl gap-5 space-y-3'
            initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
            >
                       
                            <motion.div className='mr-2 '
                            initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                            >
                                {icon}
                            </motion.div>
                       
                            <motion.h5 className='font-bold text-xl lg:text-3xl '
                            initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                            >{title}</motion.h5>
                        <motion.div className='space-y-3'>
                            
                            <motion.p className='text-sm text-[var(--text-element-small-black)] text-start'
                            initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                            >{description}</motion.p>
                            <Link href={path} className='border-b text-[var(--text-span)]'>Learn More</Link>
                        </motion.div>

                    </motion.div>
        );
}
export default Service;