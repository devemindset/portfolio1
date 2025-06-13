
import type { NextPage } from "next";
import Head from "next/head";

import NewProjectForm from "./NewProjectForm";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>New Project</title>
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-white px-4 text-black">
        <div className="flex flex-col items-center w-full max-w-md space-y-6">
        <h3 className="text-3xl font-bold text-center">Create New Project</h3>
        <NewProjectForm />
        </div>
      </main>
    </>
  )
}

export default Page