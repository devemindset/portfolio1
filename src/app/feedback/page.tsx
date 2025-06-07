
import Feedback from "@/components/Feedback";
import RequestHeader from "@/components/RequestHeader";
import type { NextPage } from "next";

const Page: NextPage = () => {
   
  return (
    <>
      <RequestHeader />
    <main className="flex justify-center items-center w-screen h-screen">
        <Feedback />
    </main>
    </>
  )
}

export default Page