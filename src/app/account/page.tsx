"use client"
import type { NextPage } from "next";
import Profile from "./components/Profile";
import Branding from "./components/Branding";
import { useAuthState } from "@/context/AuthContext";
import DeleteAccount from "./components/DeleteAccount";


const Page: NextPage = () => {
  const {userData} = useAuthState();
  return (
    <>
    
    <div className=" bg-gray-50">
            
            <Profile />
            <Branding userData={userData} />
            <DeleteAccount />
            
    </div>
    </>
  )
}

export default Page