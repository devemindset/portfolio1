import { Client } from '@/types';
import type { FC } from 'react';

interface ClientCardProps {
   
    client : Client
}

const ClientCard: FC<ClientCardProps> = ({client}) => {
        return (
            <div className='bg-[var(--background-element)] shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col justify-between space-y-2 w-72'>
                <p className='text-lg font-semibold text-gray-800 text-center'>{client.name}</p>
                <span className='text-sm text-gray-600 mt-1'>{client.notes}</span>
                <span>
                <span>Email : </span>
                <span className='text-sm text-gray-600 mt-1'>{client.email}</span>
                </span>
                <div>
                <span>Phone Number : </span>
                <span className='text-sm text-gray-600 mt-1'>{client.phone}</span>
                </div>
                <div>
                    <span>Company : </span>
                <span className='text-sm text-gray-600 mt-1'>{client.company}</span>
                </div>
            </div>
        );
}
export default ClientCard;