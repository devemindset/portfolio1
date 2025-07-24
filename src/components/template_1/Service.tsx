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
            <div className='flex justify-start  gap-5' >
                        <div className='pl-2 '>
                           {icon}
                        </div>
                        <div className='space-y-3'>
                            <h5 className='font-bold text-3xl '>{title}</h5>
                            <p className='text-xl'>{description}</p>
                            <Link href={path} className='border-b text-[var(--text-span)]'>Learn More</Link>
                        </div>

                    </div>
        );
}
export default Service;