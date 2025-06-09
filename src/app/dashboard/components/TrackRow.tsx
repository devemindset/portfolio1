"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "lucide-react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { RequestTrack, Validator } from "@/types";
import { formatDate } from "@/tools/utils";
import TrackLinksDropdown from "./TrackLinksDropdown";
import TrackValidatorSection from "./TrackValidatorSection";
import useIsMobile from "@/hook/useIsMobile";
import TooltipTruncate from "@/components/ui/TooltipTruncate"; // ✅ nouveau composant

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

  console.log(track.validators)
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
    <div className="bg-white shadow-sm rounded-md mb-4 ">
      <div
        className="p-4 cursor-pointer relative hover:bg-gray-50 transition"
        onClick={() => setExpandedId(isExpanded ? null : track.id)}
      >
        <div className="w-full overflow-x-auto">
          <div className="min-w-[700px] flex flex-wrap md:flex-nowrap items-center justify-between gap-4 text-sm">
              <TooltipTruncate className="flex-1 min-w-[120px]">
                <span className="md:hidden font-semibold text-gray-500">Title: </span>
                {track.title}
              </TooltipTruncate>

              <TooltipTruncate className="flex-1 min-w-[120px]">
                <span className="md:hidden font-semibold text-gray-500">Description: </span>
                {track.description}
              </TooltipTruncate>

              <TooltipTruncate className="flex-1 min-w-[120px] text-blue-700">
                <span className="md:hidden font-semibold text-gray-500">File URL: </span>
                {track.file_url}
              </TooltipTruncate>

              <TooltipTruncate className="flex-1 min-w-[120px]">
                <span className="md:hidden font-semibold text-gray-500">Sources: </span>
                {sourceList}
              </TooltipTruncate>

              <div className="flex-1 min-w-[100px] truncate text-xs text-gray-500">
                <span className="md:hidden font-semibold text-gray-500">Date: </span>
                {track.deadline ? formatDate(track.deadline) : "—"}
              </div>

              {/* Link + Tooltip */}
              <div className="flex items-center justify-center relative">
                <button
                  onClick={handleLinkClick}
                  className="ml-2 cursor-pointer hover:scale-150 hover:text-green-600 group relative"
                >
                  <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                    Click to copy link
                  </div>
                  <Link size={18} />
                </button>
              </div>

              {/* Status badges */}
              <div className="flex flex-col items-center space-y-1 text-xs">
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full">
                  Viewed: {track.validators.length}
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  Approved: {groupByStatus(track.validators).approved.length}
                </span>
                <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                  Rejected: {groupByStatus(track.validators).rejected.length}
                </span>
              </div>

              {/* Chevron toggle */}
              <div className="flex items-center justify-center">
                {isExpanded ? (
                  <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                ) : (
                  <ChevronRightIcon className="w-4 h-4 text-gray-600" />
                )}
              </div>
            </div>
        </div>
      </div>

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
