"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "@/hook/useIsMobile";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function TruncatedWithTooltip({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [positionAbove, setPositionAbove] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const availableBelow = window.innerHeight - rect.bottom;
    setPositionAbove(availableBelow < 60);
  }, [show, isMobile]);

  return (
    <div
      ref={ref}
      className={`relative truncate cursor-default ${className}`}
      onMouseEnter={() => !isMobile && setShow(true)}
      onMouseLeave={() => !isMobile && setShow(false)}
    >
      {children}

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: positionAbove ? 8 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: positionAbove ? 8 : -8 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-md max-w-xs w-max break-words whitespace-pre-wrap`}
            style={{
              top: positionAbove ? "auto" : "100%",
              bottom: positionAbove ? "100%" : "auto",
              left: 0,
              marginTop: positionAbove ? undefined : 6,
              marginBottom: positionAbove ? 6 : undefined,
            }}
          >
            {typeof children === "string" ? children : ref.current?.innerText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
