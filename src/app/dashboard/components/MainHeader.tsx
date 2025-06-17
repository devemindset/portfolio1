"use client"
import { useState, type FC } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { useAuthState } from '@/context/AuthContext';
import AvatarMini from '@/app/account/components/AvatarMini';
import PopupUserInfo from '@/app/account/components/PopupUserInfo';
import LinkButton from '@/components/LinkButton';


const MainHeader: FC = () => {
        const { userData } = useAuthState(); 
        const [isHovered, setIsHovered] = useState(false);
        

        return (
    <header className="w-full px-6 py-4 bg-[var(--background-element)] fixed top-0 z-[998]">
      <div className="flex items-center justify-between  ">
        {/* Logo + Nom */}
        <Link href="/" className="flex items-center">
          {/* <div>
            <Image src="/android-chrome-192x192.png" alt="validation flow" width={24} height={24} />
          </div> */}
          <span className="text-xl font-bold text-gray-900">
            TimeTally<span className="text-[var(--text-span)]">App</span>
          </span>
        </Link>
          <div className=' flex items-center'>
        {userData?.subscription && (
          <div className='hidden md:flex items-center'>
            <span className='text-blue-600 italic text-xs'>{userData.subscription?.method === "year" ? "Annual plan Active(no credit limits)" : userData.subscription?.method === "month" ? "Monthly plan active(no credit limits)" : userData.subscription?.method === "credit" && userData.subscription.credits !== 0 && userData.subscription.credits !== 1 ? `${userData.subscription.credits} credits left` : `${userData.subscription?.credits} credit left - top up soon`}</span>
        
                    <LinkButton name='Dashboard' path='dashboard' />
           
          </div>
        )
          
          }
          
          {userData.full_name && (
            <Link href="/dashboard" className="md:hidden bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] ml-5 text-sm whitespace-nowrap">
                      Dashboard
                    </Link>
          )}
          {
            userData.full_name && (
              <div
                className="cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AvatarMini userData={userData} />
              </div>
            )
          }
          </div>
        </div>
        
       {isHovered && (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <PopupUserInfo />
          </div>
        )}
    </header>
  );
}
export default MainHeader;