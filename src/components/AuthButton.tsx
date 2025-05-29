import { useAuthState } from '@/context/AuthContext';
import Image from 'next/image';
import type { FC } from 'react';
import Link from 'next/link';

interface AuthButtonProps {
  authImage: string;
  authName: string;
  authText: string;
}

const AuthButton: FC<AuthButtonProps> = ({ authImage, authName, authText }) => {
  const {
    socialLogin,
    btnstatus,
    redirectPath,
    setLoginRegisterForm,
    userAction,
  } = useAuthState();

  const handleGoogle = () => {
    socialLogin("google", redirectPath);
    userAction("click","authbtn")

  };

  const baseStyle =
    `flex items-center justify-center w-full sm:w-[320px] gap-2 rounded-lg py-2 px-4  text-black shadow hover:bg-gray-100 transition cursor-pointer ${btnstatus === "Processing..." ? "bg-green-700" : "bg-white"}`;

  const textStyle = 'text-sm font-medium';

  if (authName === 'google') {
    return (
      <div className="flex justify-center ">
        <button
          onClick={handleGoogle}
          className={baseStyle}
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
          <span className={textStyle}>
            {btnstatus === 'Processing...' ? status : authText}
          </span>
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
