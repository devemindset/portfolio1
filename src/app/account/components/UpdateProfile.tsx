import Link from 'next/link';
import type { FC } from 'react';

interface UpdateProfileProps {
    name : string;
    path : string;
}

const UpdateProfile: FC<UpdateProfileProps> = ({name,path}) => {
        return (
            <Link href={`/${path}`} className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] ml-5 text-sm whitespace-nowrap absolute right-2 top-4">
                      Update {name}
            </Link>
        );
}
export default UpdateProfile;