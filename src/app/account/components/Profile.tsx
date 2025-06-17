"use client"
// import { useAuthState } from '@/context/AuthContext';
import { useAuthState } from '@/context/AuthContext';

import type { FC } from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import UserProfileAction from './UserProfileAction';
import BackgroundLoader from '@/components/BackgroundLoader';
import ProfileBackground from './ProfileBackground';
import UpdateProfile from './UpdateProfile';



// interface ProfileProps {}

const Profile: FC = () => {
    const {userData} = useAuthState();

    
        if(!userData.full_name) return <BackgroundLoader />

        return (
            <div className='flex flex-col'>
             <ProfileBackground />
            <div className='flex flex-col items-center mt-25 bg-white w-full pb-5 rounded-3xl z-50 relative'>
                <Avatar userData={userData} />
                <UserInfo userData={userData} />
                <UserProfileAction />
                <UpdateProfile name='profile' path='account/edit_profile' />
            </div>
            
            </div>
        );
}
export default Profile;