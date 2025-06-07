"use client"
import BackgroundLoader from '@/components/BackgroundLoader';
import { useAuthState } from '@/context/AuthContext';
import { useEffect, type FC } from 'react';



const LogoutUser: FC = () => {
    const {logout} = useAuthState();

        useEffect(() => {
        logout()

    },[])
        return (
            <BackgroundLoader />
        );
}
export default LogoutUser;