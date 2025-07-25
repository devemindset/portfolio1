import Image from 'next/image';
import type { FC } from 'react';

interface DetailsProps {
    detail : string;
    title : string;
    imageSrc : string;
}

const Details: FC<DetailsProps> = ({detail,title,imageSrc}) => {
        return (
            <div className='py-10  flex flex-col items-center'>
                <div className='w-[750px]'>
                    <div className='w-full relative h-[350px]'>
                        <Image src={imageSrc}  alt={title}
                            fill
                            priority
                            className='object-cover'
                            
                        />
                    </div>
                    <h2 className='py-5 text-center font-bold text-2xl'>{title}</h2>
                    <p className='whitespace-pre-wrap text-xl'>{detail}</p>
                
                </div>
                
            </div>
        );
}
export default Details;