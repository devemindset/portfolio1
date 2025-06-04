"use client";

import Image from "next/image";
import { Copy } from "lucide-react";
import { platforms } from "@/constant";
import toast from "react-hot-toast";
type Props = {
  all_source: Record<string, string>;
  token: string;
  onClose: () => void;
};

export default function TrackLinksDropdown({ all_source, token,onClose }: Props) {
  const handleCopy = async (key: string) => {
    
    try {
      const url = `${process.env.NEXT_PUBLIC_APP_URL}/validation/${token}${key}`;
      await navigator.clipboard.writeText(url);
      toast.success("✅ Link copied!");
      onClose(); // ferme après copie si tu veux
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  if (!all_source || Object.keys(all_source).length === 0) {
    return <p className="text-sm text-gray-500">No links available</p>;
  }

  return (
    <div className="bg-white border shadow-lg p-4 rounded space-y-2 max-h-[80vh] overflow-y-auto animate-fade-in-up">
      {Object.entries(all_source).map(([label, key]) => {
        const icon =
          platforms.find((p) => p.name.toLowerCase() === label.toLowerCase())?.iconUrl ??
          "https://cdn.simpleicons.org/link";

        return (
          <div key={key} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 truncate">
              <Image src={icon} alt={label} width={16} height={16} />
              <span className="text-xs truncate">{label}</span>
            </div>
            <button onClick={() => handleCopy(key)}>
              <Copy size={14} className="text-gray-600 hover:text-black" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
