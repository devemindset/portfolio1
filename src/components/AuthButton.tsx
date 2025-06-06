"use client";

import { useAuthState } from '@/context/AuthContext';
import Image from 'next/image';
import type { FC } from 'react';
import Link from 'next/link';
import BackgroundLoader from './BackgroundLoader';

interface AuthButtonProps {
  authImage: string;
  authName: string;
  authText: string;
}

const AuthButton: FC<AuthButtonProps> = ({ authImage, authName, authText }) => {
  const {
    socialLogin,
    loadingBtn,
    redirectPath,
    setLoginRegisterForm,
    userAction,
    loadingBackground
  } = useAuthState();

  

  const handleGoogle = () => {
    socialLogin("google", redirectPath);
    userAction("click","authbtn")

  };

  const baseStyle =
    `flex items-center justify-center w-full sm:w-[320px] gap-2 rounded-lg py-2 px-4  text-black shadow transition cursor-pointer ${loadingBtn ? "bg-green-700" : "bg-white hover:bg-gray-100 "}`;

  const textStyle = 'text-sm font-medium';


  if(loadingBackground){
    return (
      <>
      <BackgroundLoader />
      </>
    )
  }
  if (authName === 'google') {
    return (
      <div className="flex justify-center ">
        <button
          onClick={handleGoogle}
          className={baseStyle}
          disabled={loadingBtn}
        >
          {authImage && (
            <Image
              src={authImage}
              alt={authName}
              width={20}
              height={20}
              className="inline-block"
            />
          )}
          
          {loadingBtn ? (
                  <span className="flex justify-center items-center gap-2 text-sm font-medium">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                   Processing...
                  </span>
                ) : (
                  authText
                )}
        </button>
      </div>
    );
  }

  if (authName === 'email') {
    return (
      <div className="flex justify-center">
        <button
          onClick={() => setLoginRegisterForm(true)}
          className={baseStyle}
        >
          <span className={textStyle}>{authText}</span>
        </button>
      </div>
    );
  }

  // Default case: external or route-based auth
  return (
    <div className="flex justify-center">
      <Link
        href={`${process.env.NEXT_PUBLIC_APP_URL}/${authName}`}
        className={baseStyle}
      >
        <span className={textStyle}>{authText}</span>
      </Link>
    </div>
  );
};

export default AuthButton;
