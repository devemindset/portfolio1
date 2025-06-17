import type { FC } from 'react';

interface SessionCardProps {
    sessionDate: string;
    sessionHour: string;
    sessionNote: string;
}

const SessionCard: FC<SessionCardProps> = ({sessionDate,sessionHour,sessionNote}) => {
        return (
            <div className='bg-[var(--background-element)] shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col justify-between space-y-4 w-72 text-center'>
                <p className='text-lg font-semibold text-gray-800'>{sessionDate}</p>
                <span className='text-sm text-gray-600 mt-1'>{sessionNote}</span>
                <span className='text-sm text-gray-500 mt-1'>{sessionHour} h</span>
            </div>
        );
}
export default SessionCard;