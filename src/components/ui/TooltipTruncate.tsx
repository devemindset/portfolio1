"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import useIsMobile from "@/hook/useIsMobile";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function TooltipTruncate({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const isMobile = useIsMobile();

  // Handle outside click for mobile
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setShow(false);
      }
    };

    if (isMobile && show) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isMobile, show]);

  // Tooltip positioning for desktop
  useEffect(() => {
    if (!ref.current || !show || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    setCoords({
      top: window.scrollY + rect.bottom + 8,
      left: window.scrollX + rect.left,
    });
  }, [show, isMobile]);

  // Extract plain text for tooltip
  const content =
    typeof children === "string"
      ? children
      : ref.current?.textContent || "";

  return (
    <>
      <div
        ref={ref}
        className={`relative truncate overflow-hidden text-ellipsis max-w-full ${className} ${isMobile ? "cursor-pointer" : ""}`}
        onMouseEnter={() => !isMobile && setShow(true)}
        onMouseLeave={() => !isMobile && setShow(false)}
        onClick={() => isMobile && setShow(true)}
      >
        {children}
      </div>

      {/* Tooltip for desktop */}
      {!isMobile &&
        show &&
        coords &&
        createPortal(
          <AnimatePresence>
            <motion.div
              key="desktop-tooltip"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="fixed z-[9999] bg-black text-white text-xs px-2 py-1 rounded shadow max-w-xs w-max break-words whitespace-pre-wrap pointer-events-none"
              style={{
                top: coords.top,
                left: coords.left,
              }}
            >
              {content}
            </motion.div>
          </AnimatePresence>,
          document.body
        )}

      {/* Modal popup for mobile */}
      {isMobile &&
        show &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-8">
            <div
              className="bg-white max-h-[80vh] overflow-y-auto rounded-lg shadow-lg p-6 text-sm text-gray-800 w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="whitespace-pre-wrap break-words">{content}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
