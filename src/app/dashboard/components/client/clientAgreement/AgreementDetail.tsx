import { formatDate } from '@/tools/utils';
import { ClientAgreement } from '@/types';
import { X } from 'lucide-react';
import type { FC } from 'react';

interface AgreementDetailProps {
    clientAgreement : ClientAgreement;
    onClose: () => void;
}

const AgreementDetail: FC<AgreementDetailProps> = ({onClose,clientAgreement}) => {
    console.log(clientAgreement)
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
                        Client: <span className="font-semibold">{clientAgreement.client}</span>
                    </p>
                    </div>
                    <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg py-2 mb-2">
                                <span className="font-semibold mr-2">Status:</span>
                                
                                {clientAgreement.status}
                                
                    </div>
                    <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg py-2 mb-2">
                                <span className="font-semibold">title:</span>
                                <div>
                                {clientAgreement.title}
                                </div>
                    </div>
                    <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg py-2 mb-2">
                                <span className="font-semibold">content:</span>
                                <div>
                                {clientAgreement.content}
                                </div>
                    </div>
                    <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg py-2 mb-2">
                                <span className="font-semibold mr-2">Project:</span>
                                
                                {clientAgreement.project}
                                
                    </div>
                    <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg py-2 mb-2">
                                <span className="font-semibold">Modification:</span>
                                <div>
                                {clientAgreement.modification_request ? clientAgreement.modification_request : "Empty"}
                                </div>
                    </div>
                    <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg py-2 mb-2">
                                <span className="font-semibold mr-2">Project:</span>
                                
                                {clientAgreement.project}
                                
                    </div>
                    {clientAgreement.validated_at && (
                        <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg py-2 mb-2">
                                <span className="font-semibold mr-2">Validated at:</span>
                                
                                {formatDate(clientAgreement.validated_at)}
                                
                    </div>
                    )}
                    {clientAgreement.validated_email && (
                        <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg py-2 mb-2">
                                <span className="font-semibold mr-2">Validated email:</span>
                                
                                {clientAgreement.validated_email}
                                
                    </div>
                    )}
                    {clientAgreement.validate_ip && (
                        <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg py-2 mb-2">
                                <span className="font-semibold mr-2">Validated ip address:</span>
                                
                                {clientAgreement.validate_ip}
                                
                    </div>
                    )}
                    <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg py-2 mb-2">
                                <span className="font-semibold mr-2">Version:</span>
                                
                                {clientAgreement.version}
                                
                    </div>
                </div>
            </div>
        );
}
export default AgreementDetail;