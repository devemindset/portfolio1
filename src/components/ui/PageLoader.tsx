"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/styles/nprogress.css";

export default function PageLoader() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Type-safe push override via type assertion
    const routerWithPush = router as typeof router & {
      __originalPush?: typeof router.push;
    };

    // Sauvegarde l'original si pas encore fait
    if (!routerWithPush.__originalPush) {
      routerWithPush.__originalPush = router.push;
    }

    const newPush: typeof router.push = async (...args) => {
      NProgress.start();
      setLoading(true);
      try {
        await routerWithPush.__originalPush!(...args);
      } catch (error) {
        console.error("Navigation error", error);
        NProgress.done();
        setLoading(false);
      }
    };

    routerWithPush.push = newPush;

    return () => {
      // Restore original push
      if (routerWithPush.__originalPush) {
        routerWithPush.push = routerWithPush.__originalPush;
      }
    };
  }, [router]);

  // Termine loading après navigation
  useEffect(() => {
    const timeout = setTimeout(() => {
      NProgress.done();
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? (
    <div className="w-screen h-screen flex justify-center items-center bg-white/70 fixed top-0 left-0 z-[9999]">
      <div className="w-24 h-24 relative animate-spin">
        <Image
          src="/android-chrome-192x192.png"
          alt="Loading..."
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  ) : null;
}
