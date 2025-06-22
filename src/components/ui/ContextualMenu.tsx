import type { FC } from 'react';

interface ContextualMenuProps {}

const ContextualMenu: FC<ContextualMenuProps> = ({}) => {

    const BtnStyle =
    "flex items-center gap-2 text-base hover:text-blue-600 transition cursor-pointer";

        return (
            <div className="absolute top-1 right-0 w-[90vw] max-w-[190px]  md:w-25 bg-[var(--color-foreground)] text-black shadow-md z-[999] px-6 py-5 space-y-2 flex flex-col rounded-xl">

                <button className={BtnStyle}>Edit</button>            
                <button className={BtnStyle}>Delete</button>            
            </div>
        );
}
export default ContextualMenu;