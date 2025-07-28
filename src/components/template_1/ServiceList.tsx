"use client"
import type { FC } from 'react';
import Service from './Service';
import OkIcon from '../ui/OkIcon';
import {motion} from 'framer-motion'
import { ServiceType } from '../../types';

// const serviceList = [
//     {
//         icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
//         title : "Lorem ipsum",
//         description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
//         path : "/service",
//     },
   
// ]
interface ServiceListProps {
    services : ServiceType[] ;

} 

const ServiceList: FC<ServiceListProps> = ({ services}) => {
        return (
            <section id="service" className='my-5 sm:my-20'>
                <div className=' text-center'>
                    <motion.h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl md:text-6xl'
                    initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                    >Services</motion.h2>
                    <motion.p className='text-xl px-5 text-[var(--text-element-small-black)]'
                    initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
                </div>
                {/* lists  */}
                <div className='mt-20 grid grid-cols-1  md:grid-cols-2  2xl:grid-cols-4 gap-5  sm:px-20  justify-items-center'>
                    {services.map((service) => (
                        <Service key={service.id} icon={<OkIcon className='w-8 h-8 text-[var(--text-span)]' />} service={service} />
                    ))
                    }
                </div>
            </section>
        );
}
export default ServiceList;