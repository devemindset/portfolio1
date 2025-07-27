"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../../styles/nprogress.css";

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
    <div className="fixed inset-0 flex items-center justify-center bg-white/60 z-[9999]">
  <div className="relative">
    <div className="w-20 h-1 bg-[var(--source-1)] rounded-full animate-pulse-glow" />
    <div className="absolute inset-0 w-20 h-1 bg-[var(--source-1)] opacity-50 blur-md" />
  </div>
</div>
  ) : null;
}
