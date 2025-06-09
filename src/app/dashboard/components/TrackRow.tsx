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
import TooltipTruncate from "@/components/ui/TooltipTruncate";

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
    <div className="bg-white shadow-sm rounded-md mb-4 p-4">
      {/* Desktop layout */}
      <div
        className="hidden md:grid grid-cols-7 gap-4 items-center text-sm cursor-pointer"
        onClick={() => setExpandedId(isExpanded ? null : track.id)}
      >
        <TooltipTruncate>{track.title}</TooltipTruncate>
        <TooltipTruncate>{track.description}</TooltipTruncate>
        <TooltipTruncate className="text-blue-700">{track.file_url}</TooltipTruncate>
        <TooltipTruncate>{sourceList}</TooltipTruncate>
        <div className="text-xs text-gray-500">
          {track.deadline ? formatDate(track.deadline) : "—"}
        </div>
        <div className="flex justify-center relative">
          <button
            onClick={handleLinkClick}
            className="cursor-pointer hover:scale-150 hover:text-green-600 group relative"
          >
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
              Click to copy link
            </div>
            <Link size={18} />
          </button>
        </div>
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
      </div>

      {/* Mobile layout */}
      <div className="md:hidden space-y-2 text-sm" onClick={() => setExpandedId(isExpanded ? null : track.id)}>
        <div>
          <span className="font-semibold text-gray-500">Title: </span>{track.title}
        </div>
        <div>
          <span className="font-semibold text-gray-500">Description: </span>{track.description}
        </div>
        <div className="text-blue-700">
          <span className="font-semibold text-gray-500">File URL: </span>{track.file_url}
        </div>
        <div>
          <span className="font-semibold text-gray-500">Sources: </span>{sourceList}
        </div>
        <div className="text-xs text-gray-500">
          <span className="font-semibold text-gray-500">Date: </span>
          {track.deadline ? formatDate(track.deadline) : "—"}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-xs">Link:</span>
          <button onClick={handleLinkClick} className="text-green-600 hover:scale-150">
            <Link size={18} />
          </button>
        </div>
        <div className="flex flex-col space-y-1 text-xs">
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
      </div>

      {/* Chevron */}
      <div className="flex justify-end mt-2 md:mt-1">
        {isExpanded ? (
          <ChevronDownIcon className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronRightIcon className="w-4 h-4 text-gray-600" />
        )}
      </div>

      {/* Expanded details */}
      {isExpanded && (
        <TrackValidatorSection
          validators={track.validators}
          all_source={track.all_source}
          groupByStatus={groupByStatus}
        />
      )}

      {/* Portal for link dropdown */}
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
