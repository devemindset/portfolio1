"use client";
import { UserData } from '@/types';
import Image from 'next/image';
import type { FC } from 'react';

interface AvatarProps {
    userData: UserData;
    previewImage?: string | null;
}

const Avatar: FC<AvatarProps> = ({ userData,previewImage }) => {
    const firstLetter = userData?.full_name?.charAt(0)?.toUpperCase() ?? "?";

    let imageSrc: string | undefined;

            if (previewImage) {
            imageSrc = previewImage;
            } else if (userData?.image?.startsWith("http")) {
            imageSrc = userData.image; // S3 ou autre URL absolue
            } else if (userData?.image) {
            imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${userData.image}`; // URL locale
            } else if (userData?.social_image?.startsWith("http")) {
            imageSrc = userData.social_image;
            }

    return (
        <section className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-4 border-[#1E2A3A] rounded-full mt-[-45px]">
            {imageSrc ? (
                <Image
                    src={imageSrc}
                    alt="User profile picture"
                    fill
                    className="rounded-full object-cover"
                />
            ) : (
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
                    {firstLetter}
                </div>
            )}
            
        </section>
    );
};

export default Avatar;
