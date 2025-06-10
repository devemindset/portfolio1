"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link as LinkIcon } from "lucide-react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { RequestTrack, Validator } from "@/types";
import { formatDate } from "@/tools/utils";
import TrackLinksDropdown from "./TrackLinksDropdown";
import TrackValidatorSection from "./TrackValidatorSection";
import useIsMobile from "@/hook/useIsMobile";
import TooltipTruncate from "@/components/ui/TooltipTruncate";
import { motion } from "framer-motion";

type Props = {
  track: RequestTrack;
  expandedId: number | null;
  setExpandedId: (id: number | null) => void;
  visibleLinkId: number | null;
  setVisibleLinkId: (id: number | null) => void;
  groupByStatus: (validators: Validator[]) => {
    approved: Validator[];
    rejected: Validator[];
    viewed: Validator[];
  };
};

export default function TrackRow({
  track,
  expandedId,
  setExpandedId,
  visibleLinkId,
  setVisibleLinkId,
  groupByStatus,
}: Props) {
  const isExpanded = expandedId === track.id;
  const linkVisible = visibleLinkId === track.id;
  const sourceList = Object.keys(track.all_source).join(", ");
  const isMobile = useIsMobile();

  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<DOMRect | null>(null);

  const { approved, rejected } = groupByStatus(track.validators);
  const viewed = track.validators.length;

  useEffect(() => {
    setPortalRoot(document.body);
    const handleClickOutside = (e: MouseEvent) => {
      if (
        linkVisible &&
        !document.getElementById(`dropdown-${track.id}`)?.contains(e.target as Node)
      ) {
        setVisibleLinkId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [linkVisible, track.id]);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setAnchorEl(rect);
    setVisibleLinkId(linkVisible ? null : track.id);
  };
  
  return (
    <div className="bg-white shadow-sm rounded-md mb-4">
      <motion.div
        className="p-4 cursor-pointer relative hover:bg-gray-50 transition"
        onClick={() => setExpandedId(isExpanded ? null : track.id)}

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full space-y-3 md:space-y-0 md:grid md:grid-cols-[140px_100px_150px_150px_120px_80px_180px] items-start text-sm gap-x-4 overflow-x-auto">
          
          {/* Status */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 font-semibold md:mb-1 border-1/2">Status</span>
            <div className="flex flex-col text-xs items-start space-y-1">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full">Viewed: {viewed}</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Approved: {approved.length}</span>
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Rejected: {rejected.length}</span>
            </div>
          </div>

          {/* Link */}
          <div className="flex flex-col gap-1">
  <span className="text-gray-500 font-semibold md:mb-1">Link</span>

  <button onClick={handleLinkClick} className="relative text-start">
    <span className="group inline-block relative">
      <LinkIcon
        size={18}
        className="text-blue-600 group-hover:text-green-600 group-hover:scale-125 transition-transform cursor-pointer"
      />

      <span className="absolute z-50 bottom-[-1.8rem] left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
        Copy Link
      </span>
    </span>
  </button>
</div>




          {/* Title */}
          <div>
            <span className="text-gray-500 font-semibold md:mb-1">Title : </span>
          <TooltipTruncate maxChars={20} className="flex flex-col text-sm font-medium">
            
            {track.title}
          </TooltipTruncate>
          </div>
          {/* Description */}
          <div>
            <span className="text-gray-500 font-semibold md:mb-1">Description :  </span>
          <TooltipTruncate maxChars={20} className="flex flex-col text-sm font-medium ">
            
            {track.description}
          </TooltipTruncate>
            </div>
          {/* File URL */}
          <div>
            <span className="text-gray-500 font-semibold md:mb-1">File URL :  </span>
          <TooltipTruncate maxChars={15} className="flex flex-col text-blue-700">
            
            {track.file_url}
          </TooltipTruncate>
          </div>
          {/* Sources */}
          <div>
            <span className="text-gray-500 font-semibold md:mb-1">Sources : </span>
          <TooltipTruncate className="flex flex-col" maxChars={10}>            
            {sourceList}
          </TooltipTruncate>
          </div>
          {/* Deadline */}
          <div className="flex flex-col text-xs text-gray-600">
            <span className="text-gray-500 font-semibold md:mb-1">Date : </span>
            {track.deadline ? formatDate(track.deadline) : "—"}
          </div>
        </div>

        <div className="absolute right-4 top-4">
          {isExpanded ? (
            <ChevronDownIcon className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronRightIcon className="w-4 h-4 text-gray-600" />
          )}
        </div>
      </motion.div>

      {isExpanded && (
        <TrackValidatorSection
          validators={track.validators}
          all_source={track.all_source}
          groupByStatus={groupByStatus}
        />
      )}

      {portalRoot &&
        linkVisible &&
        createPortal(
          isMobile ? (
            <div
              id={`dropdown-${track.id}`}
              className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-sm"
              onClick={() => setVisibleLinkId(null)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded shadow-lg p-4 w-[90%] max-w-sm animate-fade-in-up"
              >
                <TrackLinksDropdown
                  all_source={track.all_source}
                  token={track.token}
                  slug={track.slug}
                  onClose={() => setVisibleLinkId(null)}
                />
              </div>
            </div>
          ) : (
            anchorEl && (
              <div
                id={`dropdown-${track.id}`}
                style={{
                  position: "absolute",
                  top: anchorEl.bottom + window.scrollY + 8,
                  left: anchorEl.right - 256,
                  zIndex: 1000,
                }}
                className="animate-fade-in-up"
              >
                <TrackLinksDropdown
                  all_source={track.all_source}
                  token={track.token}
                  slug={track.slug}
                  onClose={() => setVisibleLinkId(null)}
                />
              </div>
            )
          ),
          portalRoot
        )}
    </div>
  );
}
