import BackgroundLoader from "@/components/BackgroundLoader";
import type { NextPage } from "next";
import Head from "next/head";
import { Suspense } from "react";
import CreateReport from "../components/CreateReport";

const Page: NextPage = () => {
  return (
    <>
    <Head>
        <title>Report | TimeTally App</title>
    </Head>
    <Suspense fallback={<BackgroundLoader />}>
      <CreateReport />
    </Suspense >
    </>
  )
}

export default Page