import PricingComponent from "@/components/PricingComponent";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-50 px-4 " id="pricing">

      <PricingComponent />

    </div>
  )
  
  ;
  
}

export default Page