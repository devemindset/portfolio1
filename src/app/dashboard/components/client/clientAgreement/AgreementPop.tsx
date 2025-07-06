import { Client } from '@/types';
import { X } from 'lucide-react';
import type { FC } from 'react';
import AgreementForm from './AgreementForm';

interface AgreementPopProps {
    client : Client;
    onClose: () => void;
}

const AgreementPop: FC<AgreementPopProps> = ({onClose, client }) => {
        return (
           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex justify-center items-center px-4">
                <div className="relative bg-white w-full max-w-3xl max-h-[90vh]  rounded-xl shadow-xl p-6 print:p-10 print:shadow-none print:max-h-none">
                        {/* Close button (hidden in print mode) */}
                    <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-black print:hidden"
                    onClick={onClose}
                    >
                    <X className="w-6 h-6" />
                    </button>
                    {/* Title */}
                    <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">Client Agreement</h1>
                    <p className="text-sm text-gray-500">
                        Client: <span className="font-semibold">{client.name}</span>
                    </p>
                    </div>

                    <AgreementForm client={client} />

                </div>
           </div> 
        );
}
export default AgreementPop;