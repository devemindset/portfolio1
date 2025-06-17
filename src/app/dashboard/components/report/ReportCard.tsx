import { extractDate } from '@/tools/utils';
import type { FC } from 'react';

interface ReportCardProps {
    report : {
        client : string;
        created_at : string;
        project : string;
        start_date : string;
        end_date : string;
        total_hours : string;
        
    };
}

const ReportCard: FC<ReportCardProps> = ({report}) => {
        return (
            <div className='bg-[var(--background-element)] shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col justify-between space-y-4 w-72 text-center'>
                <p className='text-lg font-semibold text-gray-800'>{(extractDate(report.created_at))}</p>
                <span className='text-sm text-gray-600 mt-1'>{report.client}</span>
                <div>
                    <span>Start date : </span>
                <span className='text-sm text-gray-600 mt-1'>{report.start_date}</span>
                </div>
                <div>
                <span>End date : </span>
                <span className='text-sm text-gray-600 mt-1'>{report.end_date}</span>
                </div>
                <div>
                    <span>Total hours : </span>
                    <span className='text-sm text-gray-500 mt-1'>{report.total_hours} h</span>
                </div>
                
            </div>
        );
}
export default ReportCard;