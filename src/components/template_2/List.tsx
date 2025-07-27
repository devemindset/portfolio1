"use client"
import type { FC } from 'react';
import OkIcon from '../ui/OkIcon';
import {motion} from "framer-motion"


const List: FC = () => {
        return (
            <motion.div className='flex my-2'
                initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
            
            >
                            <OkIcon className='w-6 h-6 text-[var(--text-span)]' />
                            <p className='ml-2 text-[var(--text-element-small-black)] text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </motion.div>
        );
}
export default List;