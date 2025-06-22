import Image from 'next/image';
import type { FC } from 'react';



const BackgroundLink: FC = () => {
        return (
            <div className="w-screen h-screen flex justify-center items-center bg-[var(--btn-bg)]/70 fixed top-0 left-0 z-[9999]">
                  <div className="w-24 h-24 relative animate-spin">
                    <Image
                      src="/android-chrome-192x192.png"
                      alt="Loading..."
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </div>
        );
}
export default BackgroundLink;