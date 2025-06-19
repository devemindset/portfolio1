import { extractDate } from '@/tools/utils';
import type { FC } from 'react';
import toast from 'react-hot-toast';

interface ReportCardProps {
    report : {
        id : string;
        client : string;
        created_at : string;
        project : string;
        start_date : string;
        end_date : string;
        total_hours : string;
        
    };
}

const ReportCard: FC<ReportCardProps> = ({report}) => {

    const handleCopy = async () => {
    
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/reports/report/${report.id}/preview_template/`;
      await navigator.clipboard.writeText(url);
      toast.success("✅ Link copied!");
      // ferme après copie si tu veux
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_API_URL}/reports/report/${report.id}/preview_template/`,
                    "_blank"
                  )
                }
                className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] transition cursor-pointer"
              >
                Preview Report
              </button>
              <button
                onClick={handleCopy}
                className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] transition cursor-pointer"
              >
                Copy report link
              </button>
            </div>
            </div>
        );
}
export default ReportCard;