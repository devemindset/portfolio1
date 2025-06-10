import { Suspense } from "react";
import BackgroundLoader from "@/components/BackgroundLoader";
import SuccessClient from "./SuccessClient";
import Head from "next/head";




export default function Page() {
  return (
    <>
    <Head>
        <title>Success | Validation Flow</title>
    </Head>
    <Suspense fallback={<BackgroundLoader />}>
      <SuccessClient />
    </Suspense>
    </>
  );
}
