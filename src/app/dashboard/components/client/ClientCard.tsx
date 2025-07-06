import KebabMenu from '@/components/ui/KebabMenu';
import { Client } from '@/types';
import { useState, type FC } from 'react';
import AgreementPop from './clientAgreement/AgreementPop';

interface ClientCardProps {
   
    client : Client
}

const ClientCard: FC<ClientCardProps> = ({client}) => {
    const [agreementPop,setAgreementPop] = useState(false)
        return (
            <>
            <div className='relative bg-[var(--background-element)] shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col justify-between space-y-2 w-72'>
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
                <button
                    onClick={() => setAgreementPop(true)}
                    className="text-center px-4 py-2 bg-[var(--btn-bg)] text-white text-sm rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer "
                >
                    Create agreement
                </button>
                <KebabMenu project={undefined} client={client} session={undefined} source='client' />
            </div>
            { agreementPop && <AgreementPop client={client} onClose={() => setAgreementPop(false)} /> }
            </>
        );
}
export default ClientCard;