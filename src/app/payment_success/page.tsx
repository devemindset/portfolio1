import { Suspense } from "react";
import BackgroundLoader from "@/components/BackgroundLoader";
import SuccessClient from "./SuccessClient";




export default function Page() {
  return (
    <Suspense fallback={<BackgroundLoader />}>
      <SuccessClient />
    </Suspense>
  );
}
