import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';



const RequestHeader: FC = ({}) => {
        return (
    <header className="w-full px-6">
      <div className="flex items-center justify-between bg-white/80  px-6 py-4">
        {/* Logo + Nom */}
        <Link href="/" className="flex items-center">
          <div>
            <Image src="/favicon_io/android-chrome-192x192.png" alt="SnapValidate" width={24} height={24} />
          </div>
          <span className="text-xl font-bold text-gray-900">
            Snap<span className="text-blue-600">Validate</span>
          </span>
        </Link>

        

        
        </div>
      
    </header>
  );
}
export default RequestHeader;