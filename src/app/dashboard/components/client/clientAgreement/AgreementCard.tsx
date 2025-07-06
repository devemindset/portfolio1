"use client"
import { ClientAgreement } from '@/types';
import { useState, type FC } from 'react';
import AgreementDetail from './AgreementDetail';
import toast from 'react-hot-toast';

interface AgreementCardProps {
    clientAgreement : ClientAgreement;
}

const AgreementCard: FC<AgreementCardProps> = ({clientAgreement}) => {

    const [showDetailPop,setShowDetailPop] = useState(false);

    const handleCopy = async () => {
    
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/clients/validate/${clientAgreement.uuid}/`;
      await navigator.clipboard.writeText(url);
      toast.success("✅ Link copied!");
      // ferme après copie si tu veux
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

        return (
            <div className='relative bg-[var(--background-element)] shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col justify-between space-y-2 w-72 text-center'>
                <p className='text-lg font-semibold text-gray-800 text-center'>{clientAgreement.client}</p>
                <span className='text-sm text-gray-600 mt-1'>{clientAgreement.status}</span>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => setShowDetailPop(true)}
                        className="text-center px-4 py-2 bg-[var(--btn-bg)] text-white text-sm rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer"
                    >
                        Inspect
                        </button>
                        <button
                    onClick={handleCopy}
                    className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] transition cursor-pointer"
                >
                    Copy link
                    </button>
                </div>
                
               {showDetailPop && <AgreementDetail clientAgreement={clientAgreement} onClose={() => setShowDetailPop(false)} />}
                {/* <KebabMenu project={undefined} client={client} session={undefined} source='client' /> */}
            </div>
        );
}
export default AgreementCard;