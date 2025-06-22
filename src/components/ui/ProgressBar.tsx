"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/styles/nprogress.css"; // adapte selon ton chemin

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

export default function ProgressBar() {
  const pathname = usePathname();
  // const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Termine la progress bar
  const timeout = setTimeout(() => {
    NProgress.done();
  }, 300); // ajoute un petit délai pour plus de fluidité

  return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
