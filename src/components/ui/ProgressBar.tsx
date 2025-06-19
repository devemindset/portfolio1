"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/styles/nprogress.css"; // adapte selon ton chemin

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

export default function ProgressBar() {
  const pathname = usePathname();
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Démarre le chargement
    NProgress.start();

    // Petit délai pour simuler une attente si c'est très rapide
    timer.current = setTimeout(() => {
      NProgress.done();
    }, 500); // ajuste si nécessaire

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [pathname]);

  return null;
}
