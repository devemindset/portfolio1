import Image from 'next/image';
import type { FC } from 'react';

interface DetailsProps {
    detail : string;
    title : string;
    imageSrc : string;
}

const Details: FC<DetailsProps> = ({detail,title,imageSrc}) => {
        return (
            <div>
                <div>
                    <Image src={imageSrc} width={450} height={450} alt={title} />
                </div>
                <h2>{title}</h2>
                <p className='whitespace-pre-wrap'>{detail}</p>
                
            </div>
        );
}
export default Details;