"use client"

import { useRouter } from 'next/navigation';
import {  type FC } from 'react';

interface InfoPopupProps {
    info : string;
    value :string;
    link : string;
    cancel : string;
    closePop : () => void;
    
}

const InfoPopup: FC<InfoPopupProps> = ({info,value,link,cancel,closePop}) => {
    
    const router = useRouter()
        
        return (
            <>
            <div className='fixed bg-white text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-20 shadow-md rounded-2xl' role='dialog'>
                <div className='font-bold mb-5 '>{info}</div>
                <div className=' flex justify-between items-center'>
                <span onClick={closePop} className='border border-gray-300 rounded-2xl px-5 py-2 cursor-pointer hover:bg-blue-500 hover:text-black'>{cancel}</span>
                <div onClick={() => router.push(`/${link}`) } className='border border-gray-300 rounded-2xl px-5 py-2 hover:bg-blue-500 hover:text-black cursor-pointer'>{value}</div>
                
                </div>
            </div>
            </>
        );
}
export default InfoPopup;