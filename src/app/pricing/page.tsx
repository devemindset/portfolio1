import PricingComponent from "@/components/PricingComponent";
import { useAuthState } from "@/context/AuthContext";
import type { NextPage } from "next";
import { useEffect } from "react";

const Page: NextPage = () => {
   const {userAction} = useAuthState();

  useEffect(() => {
        userAction("visit","price")
      },[])
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-50 px-4 " id="pricing">

      <PricingComponent />

    </div>
  )
  
  ;
  
}

export default Page