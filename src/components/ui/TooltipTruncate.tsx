"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "@/hook/useIsMobile";

type Props = {
  children: string;
  className?: string;
  maxChars?: number;
};

export default function TooltipTruncate({
  children,
  className = "",
  maxChars = 50,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const isMobile = useIsMobile();

  const isTruncated = children.length > maxChars;
  const visibleText = isTruncated ? children.slice(0, maxChars) + "…" : children;

  useEffect(() => {
    if (!ref.current || !show || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    setCoords({
      top: window.scrollY + rect.bottom + 8,
      left: window.scrollX + rect.left,
    });
  }, [show, isMobile]);

  return (
    <>
      <div
        ref={ref}
        className={`relative truncate ${className} ${isTruncated ? "cursor-pointer" : ""}`}
        onMouseEnter={() => !isMobile && isTruncated && setShow(true)}
        onMouseLeave={() => !isMobile && setShow(false)}
        onClick={() => isMobile && isTruncated && setShow(true)}
      >
        {visibleText}
      </div>

      {/* Tooltip (desktop) */}
      {!isMobile && show && coords &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="fixed z-[9999] bg-black text-white text-xs px-2 py-1 rounded shadow max-w-xs break-words pointer-events-none"
              style={{
                top: coords.top,
                left: coords.left,
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>,
          document.body
        )}

      {/* Tooltip (mobile) */}
      {isMobile && show &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
            onClick={() => setShow(false)}
          >
            <div
              className="bg-white rounded shadow-lg p-6 max-w-sm w-full text-sm text-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
