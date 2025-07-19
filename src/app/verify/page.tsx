import type { NextPage } from "next";
import Verify from "./components/Verify";

const Page: NextPage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen text-center">
    <Verify />
    </div>
  )
}

export default Page