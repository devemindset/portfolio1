import { useRouter } from 'next/navigation';
import type { FC } from 'react';

interface LinkButtonProps {
    name :string;
    path : string;
}

const LinkButton: FC<LinkButtonProps> = ({name,path}) => {
    const router = useRouter();

    const pathHandle = () => {
        router.push(`/${path}`);
    }
        return (
            <>
            <div onClick={pathHandle} className=" bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)]  text-sm whitespace-nowrap mr-5 text-center cursor-pointer">
                      {name}
            </div>
            </>
        );
}
export default LinkButton;