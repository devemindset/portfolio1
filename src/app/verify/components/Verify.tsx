"use client"
import { useAuthState } from '@/context/AuthContext';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useState, type FC } from 'react';



const Verify: FC = () => {
    const {authenticatedAndLocalStorage,userRegister} = useAuthState()
  // const searchParams = useSearchParams();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const email = searchParams.get('email');
  const router = useRouter()
  const [btnStatus,setBtnStatus] = useState(false);

  const verifyCode = async (e: React.FormEvent) => {
    setBtnStatus(true)
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/user/register_user/", {
        full_name : userRegister.full_name,
        email : userRegister.email,
        password : userRegister.password,
        code : code
      });

      if (response.status === 201) {
          authenticatedAndLocalStorage()
        setSuccess("Email verified!");
        setBtnStatus(false);
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      console.log(err)
      if (typeof err === "object" && err !== null && "response" in err) {
        const axiosError = err as {
          response?: {
            status?: number;
            data?: {
              error?: string;
              detail?: string;
              errors?: Record<string, string[]>;
            };
          };
        };

        const data = axiosError.response?.data;

        // Check for known custom error
        // if (axiosError.response?.status === 409) {
        //   setBtnStatus(false);
        //   return ("Email is already in use");

        // }

        // ✅ Check serializer validation errors
        if (data?.errors) {
          if (data.errors.full_name?.[0]?.includes("Verification")) {
            setError("full name error");
            setBtnStatus(false);


          }
          if (data.errors.email?.[0]?.includes("Verification")) {
            setError("email error");
            setBtnStatus(false);

          }
          if (data.errors.code?.[0]?.includes("Verification")) {
            setError("code verifivation Error");
            setBtnStatus(false);

          }

          // Optional: combine all validation errors
          const errorMessages = Object.values(data.errors).flat().join(", ");
          setBtnStatus(false);
          setError("error")
          return errorMessages || "Verification failed.";

        }

        // Default fallback
        return data?.error || data?.detail || "Something went wrong.";
      }
          } 
      
}
  return (
    <form onSubmit={ verifyCode}>
                <div className='mb-3'>
                    <label className='font-bold'>{"We've "}just sent you a verification code via email.</label>
                    <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter your 6-digit code"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] mt-5 text-center"

                    
                    />
                </div>
                {!btnStatus ? (
              <button
                type="submit"
                className="w-full bg-[var(--btn-bg)] text-white py-3 rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer mb-3"
              >
                Verify
              </button>
            ) : (
              <span className="flex justify-center items-center gap-2 text-sm font-medium text-[var(--btn-bg)]">
                    <svg className="animate-spin h-5 w-5 text-[var(--btn-bg)]" viewBox="0 0 24 24">
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
            )}
                {error &&
                        <>
                    <p className="text-red-500 text-sm text-center mt-2">{error}</p>
                   
                    </>
                }
                {success && <p className="text-green-600 text-sm text-center">{success}</p>}
            </form>
  );
};

export default Verify;