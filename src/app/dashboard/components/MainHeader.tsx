"use client"
import { useState, type FC } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { useAuthState } from '@/context/AuthContext';
import AvatarMini from '@/app/account/components/AvatarMini';
import PopupUserInfo from '@/app/account/components/PopupUserInfo';
import LinkButton from '@/components/LinkButton';
import Image from 'next/image';


const MainHeader: FC = () => {
        const { userData } = useAuthState(); 
        const [isHovered, setIsHovered] = useState(false);
        

        return (
    <header className="w-full px-4 sm:px-6 py-2 sm:py-4 bg-[var(--background-element)] fixed top-0 z-[800]">
  <div className="flex flex-wrap items-center justify-between gap-3">
    {/* Logo + Nom */}
    <Link href="/" className="flex items-center gap-2">
      <Image src="/android-chrome-192x192.png" alt="logo" width={24} height={24} />
      <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
        TimeTally<span className="text-[var(--text-span)]">App</span>
      </span>
    </Link>

    <div className="flex items-center flex-wrap gap-3">
      {userData?.subscription && (
  <>
    {/* Desktop version */}
    <div className="hidden md:flex items-center">
      <span className="text-blue-600 italic text-xs mr-5 max-w-[160px]">
        {
          userData.subscription.method === "year"
            ? "Annual plan active (no credit limits)"
            : userData.subscription.method === "month"
            ? "Monthly plan active (no credit limits)"
            : userData.subscription.credits !== 0 && userData.subscription.credits !== 1
            ? `${userData.subscription.credits} credits left`
            : `${userData.subscription.credits} credit left - top up soon`
        }
      </span>
      <LinkButton name="Dashboard" path="dashboard" />
    </div>

    {/* Mobile version */}
    <div className="md:hidden text-[10px] text-blue-600 italic  w-full mt-2 absolute top-12 right-0 ">
      {
        userData.subscription.method === "year"
          ? "Annual: unlimited"
          : userData.subscription.method === "month"
          ? "Monthly: unlimited"
          : userData.subscription.credits !== 0 && userData.subscription.credits !== 1
          ? `${userData.subscription.credits} credits left`
          : `${userData.subscription.credits} credit left - top up soon`
      }
    </div>
  </>
)}

      {userData.full_name && (
        <Link
          href="/dashboard"
          className="md:hidden bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] text-sm whitespace-nowrap"
        >
          Dashboard
        </Link>
      )}

      {userData.full_name && (
        <div
          className="cursor-pointer"
          onMouseEnter={() => window.innerWidth >= 768 && setIsHovered(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
        >
          <AvatarMini userData={userData} />
        </div>
      )}
    </div>
  </div>

  {isHovered && (
    <div
      className='relative'
      onMouseEnter={() => window.innerWidth >= 768 && setIsHovered(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsHovered(false)}
    >
      <PopupUserInfo />
    </div>
  )}
  
</header>

  );
}
export default MainHeader;