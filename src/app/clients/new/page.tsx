import type { NextPage } from "next";
import Head from "next/head";
import NewClientForm from "./NewClientForm";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>New Client</title>
      </Head>
      <main>
        <h3>Create New Client</h3>
        <NewClientForm />
      </main>
    </>
  )
}

export default Page