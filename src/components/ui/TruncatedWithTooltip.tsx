"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import useIsMobile from "@/hook/useIsMobile";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function TruncatedWithTooltip({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!ref.current || isMobile || !show) return;

    const rect = ref.current.getBoundingClientRect();
    setCoords({
      top: window.scrollY + rect.bottom + 6,
      left: window.scrollX + rect.left,
    });
  }, [show, isMobile]);

  return (
    <>
      <div
        ref={ref}
        className={`relative truncate ${className}`}
        onMouseEnter={() => !isMobile && setShow(true)}
        onMouseLeave={() => !isMobile && setShow(false)}
      >
        {children}
      </div>

      {typeof window !== "undefined" &&
        show &&
        coords &&
        createPortal(
          <AnimatePresence>
            <motion.div
              key="tooltip"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="fixed z-[9999] bg-black text-white text-xs px-2 py-1 rounded shadow-md max-w-xs w-max break-words whitespace-pre-wrap pointer-events-none"
              style={{
                top: coords.top,
                left: coords.left,
              }}
            >
              {typeof children === "string"
                ? children
                : ref.current?.textContent || ""}
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
