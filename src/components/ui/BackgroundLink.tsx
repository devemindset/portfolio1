
import type { FC } from 'react';



const BackgroundLink: FC = () => {
        return (
            <div className="w-screen h-screen flex justify-center items-center bg-[var(--btn-bg)]/70 fixed top-0 left-0 z-[9999]">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin-scale"></div>
                </div>
        );
}
export default BackgroundLink;