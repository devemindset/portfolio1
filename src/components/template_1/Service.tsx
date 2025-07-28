"use client"
import type { FC } from 'react';
import {motion} from "framer-motion"
import SmartLink from '../ui/SmartLink';
import { ServiceType } from '../../types';
interface ServiceProps {
    icon : React.ReactNode,
    service : ServiceType;
}

const Service: FC<ServiceProps> = ({icon,service}) => {
    const serviceDetailBaseUrl = process.env.NEXT_PUBLIC_APP_URL + "/service/"
        return (
            <div className='block pl-10 2xl:flex   gap-5' >
                        <div className='flex'>
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
                            >{service.service_name}</motion.h5>
                        </div>
                        <div className='space-y-3'>
                            
                            <motion.p className='text-sm text-[var(--text-element-small-black)] text-start'
                            initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                            >{service.description}</motion.p>
                            <motion.div
                            initial= {{ opacity:0, y: 40 }}
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                            >

                            <SmartLink href={serviceDetailBaseUrl + service.slug} className='border-b text-[var(--text-span)]'>Learn More</SmartLink>
                            </motion.div>
                        </div>

                    </div>
        );
}
export default Service;