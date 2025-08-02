"use client"
import Image from 'next/image';
import { useEffect, useState, type FC } from 'react';
import List from './List';
import {motion} from "framer-motion"
import BackgroundLoader from '../BackgroundLoader';

const skills = [
    "React","Typescript","Java","Django","SEO","Docker"
]

const About: FC = () => {
      const [loading, setLoading] = useState(true)

      useEffect(() => {
    // Simule le chargement ou attends que le composant soit monté
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <BackgroundLoader />
    
        return (
            <section className='bg-[var(--background-element-3)] my-5 sm:my-20 w-screen min-h-screen pb-20'>
                <motion.h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl '
                initial= {{ opacity:0, y: 40 }}
            
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                >About</motion.h2>
                <div className='flex flex-col items-center 2xl:flex-row gap-2 px-4 sm:px-20'>
                    <div className='flex flex-col'>
                            <div className='flex'>

                            
                                <motion.div className=""
                                    initial= {{ opacity:0, y: 40 }}
                      
                                    transition={{ duration:1, delay:0.3}}
                                    whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                                >
                                    <Image
                                        src="/profile-img.jpg"
                                        alt="About picture"
                                        width={350}
                                        height={350}
                                        priority
                                        className=""
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />

                                </motion.div>
                                <div className="ml-5 space-y-2">
                                    <motion.p
                                    initial= {{ opacity:0, y: 40 }}
                         
                                    transition={{ duration:1, delay:0.3}}
                                    whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                                    ><strong>Name: </strong> <p className='text-[var(--text-element-small-black)] text-sm'>Morgan Freeman</p></motion.p>
                                    <motion.p
                                        initial= {{ opacity:0, y: 40 }}
                                
                                        transition={{ duration:1, delay:0.3}}
                                        whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                                    ><strong>Profile: </strong> <p className='text-[var(--text-element-small-black)] text-sm'>full stack developer</p></motion.p>
                                    <motion.p
                                    initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                                    ><strong>Email: </strong> <p className='text-[var(--text-element-small-black)] text-sm'>contact@example.com</p></motion.p>
                                    <motion.p
                                    initial= {{ opacity:0, y: 40 }}
             
                transition={{ duration:1, delay:0.3}}
                                   whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }} 
                                    ><strong>Phone: </strong> <p className='text-[var(--text-element-small-black)] text-sm'>(617) 557-0089</p></motion.p>
                                </div>
                                
                            </div>
                            <div className='mt-10 flex flex-col items-center'>
                                <motion.h3 className='text-center font-bold text-2xl mb-5'
                                initial= {{ opacity:0, y: 40 }}
             
                transition={{ duration:1, delay:0.3}}
                                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                                >Skills</motion.h3>
                                <motion.div className='grid grid-cols-2 xl:grid-cols-5 space-x-2 space-y-2 w-full bg-[var(--background-element-3)] py-5 px-7 shadow-xl text-center gap-2 '
                                initial= {{ opacity:0, y: 40 }}
             
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                                >
                                    { skills.map((skill,index) =>(
                                        <p key={index} className='text-[var(--text-element-small-black)] text-sm py-2 px-5 border-b border-[var(--background-element)]  bg-[var(--text-element-small)]/20 text-center text-[10px] h-[25px] w-full'>{skill}</p>
                                    ))
                                    }
                                    
                                </motion.div>
                            </div>
                    </div>
                        
                   
                        <div className='px-1 sm:px-20 py-3 text-sm sm:text-xl md:mx-5 lg:mx-28'>
                            <motion.div className='font-bold mb-5 text-sm'
                            initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at, expedita minus voluptatum tempore corporis ratione aut ea nulla animi ex quod autem quaerat tempora asperiores
                            </motion.div>
                            <motion.p className='text-[var(--text-element-small-black)] text-sm'
                            initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, enim maxime laboriosam corrupti esse architecto?</motion.p>
                            <div className='my-5'>
                                <List />
                                <List />
                                <List />
                                <List />
                            </div>
                        </div>
                </div>
                

            </section>
        );
}
export default About;