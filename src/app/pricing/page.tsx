"use client";

import SiteUserActionComponent from "@/components/SiteUserActionComponent";
import type { NextPage } from "next";
import Head from "next/head";
import PricingComponent from "./components/PricingComponent";
import MainHeader from "../dashboard/components/MainHeader";


const Page: NextPage = () => {
   
  return (
    <>
    <Head>
        <title>Pricing</title>
    </Head>
    <MainHeader />
    <div className="w-screen  flex justify-center  items-center pt-10  ">

      <PricingComponent />

    </div>
    <SiteUserActionComponent action="visit" object="pricing" />
    </>
  )
  
  ;
  
}

export default Page