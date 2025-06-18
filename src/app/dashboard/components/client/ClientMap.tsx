import { useAuthState } from '@/context/AuthContext';
import type { FC } from 'react';
import ClientCard from './ClientCard';



const ClientMap: FC = ({}) => {
     const {userData} = useAuthState();
        return (
            <section className='mt-10'>
            <h3 className='text-center my-5 font-bold text-2xl'>Clients</h3>
            <div className=" flex gap-6 overflow-x-auto  p-5">
                        {userData?.clients && userData?.clients.map((client,index) => (
                                <div key={index}>
                                        <ClientCard client={client}/>
                                </div>
                        ))}
                </div>
            </section>
        );
}
export default ClientMap;