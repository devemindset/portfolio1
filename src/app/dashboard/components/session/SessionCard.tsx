import KebabMenu from '@/components/ui/KebabMenu';
import { TimeEntry } from '@/types';
import type { FC } from 'react';

interface SessionCardProps {
    session: TimeEntry;
    
}

const SessionCard: FC<SessionCardProps> = ({session}) => {
        return (
            <>
            <div className='relative bg-[var(--background-element)] shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col justify-between space-y-4 w-72 text-center'>
                <p className='text-lg font-semibold text-gray-800'>{session.date}</p>
                <span className='text-sm text-center text-gray-600 mt-1'>{session.note}</span>
                <span className='text-sm text-gray-500 mt-1'>{session.hours} h</span>
            <KebabMenu source="session" project={undefined} session={session} client={undefined}/>
            </div>
            </>
        );
}
export default SessionCard;