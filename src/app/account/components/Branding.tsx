import { UserData } from '@/types';
import type { FC } from 'react';
import BrandingAvatar from './BrandingAvatar';
import UpdateProfile from './UpdateProfile';

interface BrandingProps {
    userData : UserData;
}

const Branding: FC<BrandingProps> = ({ userData }) => {
 
        return (
            <section className='bg-white pt-30 flex flex-col justify-center mt-10 relative rounded-t-2xl'>
                <h3 className='text-center font-black text-5xl mb-5'>Branding</h3>
                <p className='text-center'>Customize your brand with a name, logo, and description.</p>
                
                <div className='flex items-center justify-center mt-4'>

                <BrandingAvatar userData={userData} />

              
               
                </div>
                <div>

                </div>
                <div className=' text-center mt-5'>
                    <p className='italic'>Brand name :</p>
                    <p className=' text-center font-black'>  {userData.branding_name || userData.full_name}</p>

                </div>
                <div className='text-center mt-5'>
                    <p className='italic mb-5'>description:</p>
                    <p className='italic'> {userData.branding_description ? userData.branding_description :  "Empty..."}</p>

                </div>
                
                <UpdateProfile name='branding' path='account/edit_branding' />
            </section>
        );
}
export default Branding;