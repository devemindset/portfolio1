"use client"
import type { FC } from 'react';
import {motion} from "framer-motion"

interface InfoProps {
    icon : React.ReactNode;
    title : string;
    description : string;
}

const Info: FC<InfoProps> = ({ icon,title,description }) => {
        return (
            <div className="flex gap-5">
                <motion.div className='text-2xl border border-[var(--text-span)] rounded-full p-2 sm:p-4 gap-2'
                initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                >
                    {icon}
                </motion.div>
                <div>
                  <motion.h3 className='font-bold '
                  initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                  >{title}</motion.h3>
                  <motion.p className='text-sm text-[var(--text-element-small-black)]'
                  initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                  >{description}</motion.p>
                </div>
              </div>
        );
}
export default Info;