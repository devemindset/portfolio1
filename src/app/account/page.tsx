"use client"
import type { NextPage } from "next";
import Profile from "./components/Profile";
import Branding from "./components/Branding";
import { useAuthState } from "@/context/AuthContext";

const Page: NextPage = () => {
  const {userData} = useAuthState();
  return (
    <>
    
    <div className=" bg-gray-50">
            
            <Profile />
            <Branding userData={userData} />
    </div>
    </>
  )
}

export default Page