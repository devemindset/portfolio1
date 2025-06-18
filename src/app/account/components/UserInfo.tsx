"use client"
import { UserData } from '@/types';
import Link from 'next/link';
import type { FC } from 'react';

interface UserInfoProps {
    userData : UserData;
}

const UserInfo: FC<UserInfoProps> = ({ userData }) => {
   
        return (
            <section className='text-center space-y-2 mt-5'>
                <div className='font-black text-5xl mb-5'>{userData?.full_name}</div>
                <div>{userData?.email}</div>
                <div className='text-blue-600 italic'>{userData.subscription?.method === "year" ? "Annual plan Active(no credit limits)" : userData.subscription?.method === "month" ? "Monthly plan active(no credit limits)" : userData.subscription?.method === "credit" && userData.subscription.credits !== 0 && userData.subscription.credits !== 1 ? `${userData.subscription.credits} credits left` : `${userData.subscription?.credits} credit - top up soon`}</div>
                <div className=' my-5 text-center'>

                
                {userData.subscription?.method === "credit"  && (userData.subscription.credits === 1 || userData.subscription.credits === 0) && <Link href="/pricing" className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] ml-5 text-sm whitespace-nowrap mt-5">
                      Upgrade Plan
                    </Link>}
                </div>
            </section>
        );
}
export default UserInfo;