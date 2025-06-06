"use client";
import { useAuthState } from '@/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';



const RequestHeader: FC = ({}) => {
        const { userData } = useAuthState(); 
       
        return (
    <header className="w-full px-6 ">
      <div className="flex items-center justify-between bg-white/80  px-6 py-4">
        {/* Logo + Nom */}
        <Link href="/" className="flex items-center">
          <div>
            <Image src="/favicon_io/android-chrome-192x192.png" alt="SnapValidate" width={24} height={24} />
          </div>
          <span className="text-xl font-bold text-gray-900">
            Validation<span className="text-blue-600">Flow</span>
          </span>
        </Link>

        {userData?.subscription && (
          <div className='hidden md:flex items-center'>
            <span className='text-blue-600 italic text-xs'>{userData.subscription?.method === "year" ? "Annual plan Active(no credit limits)" : userData.subscription?.method === "month" ? "Monthly plan active(no credit limits)" : userData.subscription?.method === "credit" && userData.subscription.credits !== 0 && userData.subscription.credits !== 1 ? `${userData.subscription.credits} credits left` : `${userData.subscription?.credits} credit - top up soon`}</span>
        
                    <Link href="/dashboard" className="bg-[#1E2A3A] text-white px-4 py-2 rounded hover:bg-blue-700 ml-5 text-sm whitespace-nowrap">
                      Dashboard
                    </Link>
           
          </div>
        )
          }
          {userData.username && (
            <Link href="/dashboard" className="md:hidden bg-[#1E2A3A] text-white px-4 py-2 rounded hover:bg-blue-700 ml-5 text-sm whitespace-nowrap">
                      Dashboard
                    </Link>
          )}
        </div>
      
    </header>
  );
}
export default RequestHeader;