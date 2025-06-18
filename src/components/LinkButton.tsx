import Link from 'next/link';
import type { FC } from 'react';

interface LinkButtonProps {
    name :string;
    path : string;
}

const LinkButton: FC<LinkButtonProps> = ({name,path}) => {
        return (
            <>
            <Link href={`/${path}`} className=" bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)]  text-sm whitespace-nowrap mr-5">
                      {name}
            </Link>
            </>
        );
}
export default LinkButton;