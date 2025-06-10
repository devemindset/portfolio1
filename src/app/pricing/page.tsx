"use client";
import PricingComponent from "@/components/PricingComponent";
import RequestHeader from "@/components/RequestHeader";
import { useAuthState } from "@/context/AuthContext";
import type { NextPage } from "next";
import { useEffect } from "react";

const Page: NextPage = () => {
   const {userAction} = useAuthState();

  useEffect(() => {
        userAction("visit","price")
      },[])
  return (
    <>
    <RequestHeader />
    <div className="w-screen  flex justify-center  items-center pt-10 bg-gray-50 ">

      <PricingComponent />

    </div>
    </>
  )
  
  ;
  
}

export default Page