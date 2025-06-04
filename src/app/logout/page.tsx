"use client"
import { useAuthState } from "@/context/AuthContext";
import type { NextPage } from "next";
import { useEffect } from "react";

const Page: NextPage = () => {
    const {logout} = useAuthState();

    useEffect(() => {
        logout()

    },[])
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white">
        <p   className="text-center p-4 text-blue-700">Logging out...</p>;

    </div>
  )
  
}

export default Page