"use client"
import AuthButton from "@/components/AuthButton";
import SiteUserActionComponent from "@/components/SiteUserActionComponent";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import RegisterComponent from "./RegisterComponent";
import { motion } from "framer-motion";


const Page: NextPage = () => {
  
  return (
    <>
      <Head>
        <title>Sign Up | Time Tally App</title>
      </Head>

      <div className="flex items-center justify-center min-h-screen  px-4 text-white">
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 bg-cover bg-center z-[-10]"
        style={{
          backgroundImage: "url('/background/hero_image.png')", // <-- ton image ici
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>
        <div className="w-full max-w-md bg-[#111111]/55 rounded-xl shadow-md p-8 space-y-6">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center">Create your account</h2>
          {/* <p className="text-gray-400 text-sm text-center">
            Join the challenge and start building real-world projects.
          </p> */}
          <RegisterComponent />
          {/* <AuthButton
            authImage=""
            authName="email"
            authText="Continue with Email"
          /> */}

          {/* Social auth */}
          <AuthButton
            authImage="/google-color-icon.svg"
            authName="google"
            authText="Continue with Google"
          />

          

          {/* Divider */}
          <div className="w-full border-t border-gray-800 my-2" />

          {/* Already have an account */}
          <div className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#0070F3] hover:underline"
            >
              Log in
            </Link>
          </div>

          {/* Terms */}
          <div className="text-[10px] text-center text-gray-500 max-w-xs mx-auto">
            By signing up, you agree to our{" "}
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/privacy_policy`}
              target="_blank"
              className="text-[#0070F3] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/terms_of_service`}
              target="_blank"
              className="text-[#0070F3] hover:underline"
            >
              Terms of Service
            </Link>
            .
          </div>
        </div>
      </div>
      <SiteUserActionComponent action="visit" object="register" />
    </>
  );
}

export default Page