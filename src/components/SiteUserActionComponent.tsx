"use client";


import { userAction } from '@/lib/api';
import { useEffect, type FC } from 'react';

interface SiteUserActionComponentProps {
    action : string;
    object :string
}

const SiteUserActionComponent: FC<SiteUserActionComponentProps> = ({action,object}) => {
        
    useEffect(() => {

        userAction( action,object)
    },[])

        return (
            <span ></span>
        );
}
export default SiteUserActionComponent;