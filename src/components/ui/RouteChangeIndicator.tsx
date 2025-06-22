"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/styles/nprogress.css";

import type { FC } from 'react';


const RouteChangeIndicator: FC = ({}) => {
    const router = useRouter();

  useEffect(() => {
    // Remplace `router.events` avec interception de `router.push`
    const originalPush = router.push;

    // override temporaire de push
    (router as any).push = async (...args: Parameters<typeof router.push>) => {
      NProgress.start();
      try {
        await originalPush(...args);
      } finally {
        // On laisse la ProgressBar se terminer dans le composant ProgressBar (sur la page d'arrivée)
        // ou on fait un léger delay ici si besoin
      }
    };

    return () => {
      // cleanup
      (router as any).push = originalPush;
    };
  }, [router]);

  return null;
}
export default RouteChangeIndicator;