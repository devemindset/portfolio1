import Link from 'next/link';
import type { FC } from 'react';

interface ServiceProps {
    icon : React.ReactNode,
    title : string;
    description : string;
    path : string;
}

const Service: FC<ServiceProps> = ({icon,description,path,title}) => {
        return (
            <div className='block pl-10 sm:flex justify-start  gap-5' >
                        <div className='flex'>
                            <div className='mr-2 '>
                                {icon}
                            </div>
                            <h5 className='font-bold text-3xl '>{title}</h5>
                        </div>
                        <div className='space-y-3'>
                            
                            <p className='text-xl'>{description}</p>
                            <Link href={path} className='border-b text-[var(--text-span)]'>Learn More</Link>
                        </div>

                    </div>
        );
}
export default Service;