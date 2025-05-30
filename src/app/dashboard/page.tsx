import type { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
    <p>dashboard</p>
    <Link href="/new">
      create a track
    </Link>
    </>
  )
}

export default Page