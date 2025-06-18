
import Link from 'next/link';
import type { FC } from 'react';



const UserProfileAction: FC = ({}) => {
        return (
            <section className='flex '>
                <Link href="/dashboard" className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] ml-5 text-sm whitespace-nowrap">
                      Dashboard
                    </Link>
                
            </section>
        );
}
export default UserProfileAction;