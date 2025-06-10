"use client";
import PricingComponent from "@/components/PricingComponent";
import RequestHeader from "@/components/RequestHeader";
import SiteUserActionComponent from "@/components/SiteUserActionComponent";
import type { NextPage } from "next";
import Head from "next/head";


const Page: NextPage = () => {
   
  return (
    <>
    <Head>
        <title>Pricing | Validation Flow</title>
    </Head>
    <RequestHeader />
    <div className="w-screen  flex justify-center  items-center pt-10 bg-gray-50 ">

      <PricingComponent />

    </div>
    <SiteUserActionComponent action="visit" object="pricing" />
    </>
  )
  
  ;
  
}

export default Page