
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const NotFoundPage : NextPage = () => {

  return (
    <>
      <Head>
        <title>Not Found | </title>
      </Head>
<div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-2xl mt-4 font-semibold text-gray-800">
        Page Not Found
      </p>
      <p className="text-gray-500 mt-2 italic">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all duration-200">
          Go Home
      </Link>
      </div>
      </>
  )
}

export default NotFoundPage