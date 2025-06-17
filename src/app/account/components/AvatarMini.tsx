"use client";
import { UserData } from '@/types';
import Image from 'next/image';
import type { FC } from 'react';

interface AvatarMiniProps {
  userData: UserData;
}

const AvatarMini: FC<AvatarMiniProps> = ({ userData }) => {
  const firstLetter = userData?.full_name?.charAt(0)?.toUpperCase() ?? "?";

    let imageSrc: string | undefined;

            if (userData?.image?.startsWith("http")) {
            imageSrc = userData.image; // S3 ou autre URL absolue
            } else if (userData?.image) {
            imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${userData.image}`; // URL locale
            } else if (userData?.social_image?.startsWith("http")) {
            imageSrc = userData.social_image;
            }
 

  return (
    <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt="User avatar"
          fill
          className="rounded-full object-cover"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-blue-700 flex items-center justify-center text-white text-sm sm:text-base md:text-lg font-semibold">
          {firstLetter}
        </div>
      )}
    </div>
  );
};

export default AvatarMini;
