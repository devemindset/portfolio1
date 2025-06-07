import { Suspense } from "react";
import dynamic from "next/dynamic";
import BackgroundLoader from "@/components/BackgroundLoader";


// Dynamically import the client-only SuccessPage with SSR disabled
const SuccessClient = dynamic(() => import("./SuccessClient"), { ssr: false });

export default function Page() {
  return (
    <Suspense fallback={<BackgroundLoader />}>
      <SuccessClient />
    </Suspense>
  );
}
