
import AuthButton from "@/components/AuthButton";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import LoginComponent from "./LoginComponent";

const Page: NextPage = () => {

  return (
    <>
      <Head>
        <title>Login | Validation Flow</title>
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-black px-4 text-white">
        <div className="flex flex-col items-center w-full max-w-md space-y-6">

          {/* Header */}
          <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
          {/* <p className="text-gray-400 text-sm text-center mb-2">
            Sign in to continue building projects and earning XP.
          </p> */}

          {/* Auth Buttons */}
          <LoginComponent />
          <AuthButton
            authImage=""
            authName="email"
            authText="Continue with Email"
          />
          <AuthButton
            authImage="/google-color-icon.svg"
            authName="google"
            authText="Continue with Google"
          />
          

          {/* Divider */}
          <div className="w-full border-t border-gray-800 my-2" />

          {/* Register Link */}
          <div className="text-sm text-gray-400 text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#0070F3] hover:underline"
            >
              Sign up
            </Link>
          </div>

          {/* Terms */}
          <div className="text-[10px] text-center max-w-xs text-gray-500">
            By logging in, you agree to our{" "}
            <a
              href={`${process.env.NEXT_PUBLIC_APP_URL}/privacy_policy`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0070F3] hover:underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href={`${process.env.NEXT_PUBLIC_APP_URL}/terms_of_service`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0070F3] hover:underline"
            >
              Terms of Service
            </a>
            .
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Page