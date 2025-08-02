"use client";
import { useEffect, useState, type FC } from 'react';
import Resume from './Resume';
import {motion} from "framer-motion"
import BackgroundLoader from '../BackgroundLoader';

const resumeList =[
    {
        title : "Education",
        field : "Master of Fine Arts & Graphic Design",
        interval : "2015 - 2016",
        institut : "Rochester Institute of Technology, Rochester, NY",
        description : `
            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend

            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero 
        `
    },
    {
        title : "Education",
        field : "Master of Fine Arts & Graphic Design",
        interval : "2015 - 2016",
        institut : "Rochester Institute of Technology, Rochester, NY",
        description : `
            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend

            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero 
        `
    },
    {
        title : "Education",
        field : "Master of Fine Arts & Graphic Design",
        interval : "2015 - 2016",
        institut : "Rochester Institute of Technology, Rochester, NY",
        description : `
            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend

            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero 
        `
    },
    {
        title : "Education",
        field : "Master of Fine Arts & Graphic Design",
        interval : "2015 - 2016",
        institut : "Rochester Institute of Technology, Rochester, NY",
        description : `
            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend

            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero 
        `
    },
    {
        title : "Education",
        field : "Master of Fine Arts & Graphic Design",
        interval : "2015 - 2016",
        institut : "Rochester Institute of Technology, Rochester, NY",
        description : `
            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend

            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero 
        `
    },
    {
        title : "Education",
        field : "Master of Fine Arts & Graphic Design",
        interval : "2015 - 2016",
        institut : "Rochester Institute of Technology, Rochester, NY",
        description : `
            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend

            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero 
            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend

            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero 
            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend

            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero 
        `
    },
]

const ResumeList: FC = () => {
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
                <div className=' text-center'>
                    <motion.h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl '
                    initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                    >Resume</motion.h2>
                    <motion.p className='text-sm px-5 text-[var(--text-element-small-black)]'
                    initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
                </div>
                {/* list  */}
                <div className='grid grid-cols-1 lg:grid-cols-2  px-3 gap-5 md:px-10'>
                {
                    
                    resumeList.map((resume,index) => (
                        <Resume title={resume.title} key={index} description={resume.description} field={resume.field} interval={resume.interval} institut={resume.institut} />
                    ))
                   
                }
                 </div>
            </section>
        );
}
export default ResumeList;