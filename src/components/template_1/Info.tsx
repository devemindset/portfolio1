"use client"
import type { FC } from 'react';
import {motion} from "framer-motion"
import { ContactType } from '../../types';

interface InfoProps {
    contact : ContactType;
}

const Info: FC<InfoProps> = ({ contact }) => {
        return (
          <>
            {/* address  */}
            <div className="flex gap-5">
                <motion.div className='text-2xl border border-[var(--text-span)] rounded-full p-2 sm:p-4 gap-2'
                initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                >
                    <i className="bi bi-geo-alt flex-shrink-0" />
                </motion.div>
                <div>
                  <motion.h3 className='font-bold '
                  initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                  >Address</motion.h3>
                  <motion.p className='text-sm text-[var(--text-element-small-black)]'
                  initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                  >{contact.address}</motion.p>
                </div>
              </div>
              {/* call  */}
              <div className="flex gap-5">
                <motion.div className='text-2xl border border-[var(--text-span)] rounded-full p-2 sm:p-4 gap-2'
                initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                >
                    <i className="bi bi-telephone flex-shrink-0" />
                </motion.div>
                <div>
                  <motion.h3 className='font-bold '
                  initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                  >Call</motion.h3>
                  <motion.p className='text-sm text-[var(--text-element-small-black)]'
                  initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                  >{contact.phonenumber}</motion.p>
                </div>
              </div>
              {/* Email  */}
              <div className="flex gap-5">
                <motion.div className='text-2xl border border-[var(--text-span)] rounded-full p-2 sm:p-4 gap-2'
                initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                >
                    <i className="bi bi-envelope flex-shrink-0" />
                </motion.div>
                <div>
                  <motion.h3 className='font-bold '
                  initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                  >Email</motion.h3>
                  <motion.p className='text-sm text-[var(--text-element-small-black)]'
                  initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                  >{contact.email}</motion.p>
                </div>
              </div>
        </>
        );
}
export default Info;