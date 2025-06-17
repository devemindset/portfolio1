import Link from 'next/link';
import type { FC } from 'react';

interface UpdateProfileProps {
    name : string;
    path : string;
}

const UpdateProfile: FC<UpdateProfileProps> = ({name,path}) => {
        return (
            <Link href={`/${path}`} className="bg-[#1E2A3A] text-white px-4 py-2 rounded hover:bg-blue-700 ml-5 text-sm whitespace-nowrap absolute right-2 top-4">
                      Update {name}
            </Link>
        );
}
export default UpdateProfile;