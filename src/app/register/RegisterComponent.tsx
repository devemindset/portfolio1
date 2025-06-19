import type { FC } from 'react';
import { useState } from "react";

import { useAuthState } from "@/context/AuthContext";
import { isValidEmail } from '@/tools/utils';
import { useRouter } from 'next/navigation';
import BackgroundLoader from '@/components/BackgroundLoader';



const RegisterComponent: FC = ({}) => {
        const { register,loginRegisterForm,setBackgroundPopup,
    backgroundPopup } = useAuthState();
        const [email,setEmail] = useState("");
        const [fullname,setFullname] = useState("");
        const [password,setPassword] = useState("");
        const [confirmPassword,setConfirmPassword] = useState("");
        const [error,setError] = useState("");
        const [success,setSuccess] = useState("");
        const [btnStatus,setBtnStatus] = useState(false);

        const router = useRouter();

  const handleRegister = async () => {
    setBtnStatus(true)
    setError("");
    try {
      if (!fullname || !email || !password || !confirmPassword) {
        setError("Please fill in all fields.");
        setBtnStatus(false)
        return;
      }

      if (!isValidEmail(email)) {
        setError("Please enter a valid email address.");
        setBtnStatus(false)
        return;
      }

      if (fullname.length > 20) {
        setError("Username cannot exceed 20 characters.");
        setBtnStatus(false)
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        setBtnStatus(false)
        return;
      }

      const response = await register(email, fullname, password);
      if (response === true) {
        setBtnStatus(false)
        setError("");
        setSuccess("Successfully registered!");
        setBackgroundPopup(true)
        router.push(`/dashboard`)
      } else if (response === "Email is already in use") {
        setError("Email is already in use.");
        setBtnStatus(false)
      } else if (response === "Username is already in use") {
        setError("Username is already in use.");
        setBtnStatus(false)
      }
       else {
        setError("Something went wrong. Please try again.");
        setBtnStatus(false)
      }
    } catch {
      setError("Unexpected error. Please try again.");
      setBtnStatus(false)
    }
  };
        return (
            <>
            {loginRegisterForm && <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {!btnStatus ? (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Send
              </button>
            ) : (
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
            )}

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {success && <p className="text-green-600 text-sm text-center">{success}</p>}
          </form> }

          {backgroundPopup && <BackgroundLoader />}
            </>
        );
}
export default RegisterComponent;