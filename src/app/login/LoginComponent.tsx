"use client"
import BackgroundLoader from '@/components/BackgroundLoader';
import { useAuthState } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, type FC } from 'react';

// interface LoginComponentProps {}

const LoginComponent: FC = ({}) => {
    const {
    siteLogin,
    loginRegisterForm,
    setBackgroundPopup,
    backgroundPopup
  } = useAuthState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [btnStatus,setBtnStatus] = useState(false);
   const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    setBtnStatus(true)
    e.preventDefault();
    setError("");
    try {
      const state = await siteLogin(email, password);

      if(state === true){
        router.push(`/dashboard`)
        setBtnStatus(false)
        setBackgroundPopup(true)
      }
      if (state === false) {
        setError("Invalid email or password.");
        setBtnStatus(false)
      }
    } catch {
      setError("Login failed. Please try again.");
      setBtnStatus(false)
    }
  };
        return (
            <>
          {loginRegisterForm && 
            <form
              onSubmit={handleLogin}
              className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
            >
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-4 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-4 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>



              {!btnStatus ? (
              <button
                type="submit"
                className="w-full bg-[var(--btn-bg)] text-white py-3 rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer"
              >
                Login 
              </button>
            ) : (
              <span className="flex justify-center items-center text-green-600 gap-2 text-center text-sm font-medium">
                    <svg className="animate-spin h-5 w-5 text-green-600" viewBox="0 0 24 24">
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

              {error && (
                <p className="text-sm mt-3 text-center text-red-500">{error}</p>
              )}
            </form>}
              {backgroundPopup && <BackgroundLoader />}
            </>
        );
}
export default LoginComponent;