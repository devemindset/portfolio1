// app/payment_success/page.tsx
import dynamic from "next/dynamic";

// 👇 Dynamically import the client-only component
const SuccessClient = dynamic(() => import("./SuccessClient"), { ssr: false });

export default function Page() {
  return <SuccessClient />;
}
