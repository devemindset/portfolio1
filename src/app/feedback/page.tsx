

import Feedback from "@/components/Feedback";
import type { NextPage } from "next";
import Head from "next/head";
import MainHeader from "../dashboard/components/MainHeader";

const Page: NextPage = () => {
   
  return (
    <>
      <Head>
        <title>Feedback |</title>
      </Head>
      <MainHeader />
    <main className="flex justify-center items-center w-screen h-screen">
        <Feedback />
    </main>
    </>
  )
}

export default Page