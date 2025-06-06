"use client";

import type { FC } from "react";
import clsx from "clsx";

interface DescriptionBoxProps {
  content: string;
  className?: string;
  maxHeight?: string; // ex: 'max-h-60' | 'max-h-80'
}

const DescriptionBox: FC<DescriptionBoxProps> = ({
  content,
  className = "",
  maxHeight = "max-h-60",
}) => {
  return (
    <div
      className={clsx(
        "bg-neutral-50 border border-neutral-200 rounded-lg p-4 sm:p-5 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap overflow-y-auto",
        maxHeight,
        className
      )}
    >
      {content || "—"}
    </div>
  );
};

export default DescriptionBox;
