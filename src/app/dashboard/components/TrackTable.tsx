"use client";

import TrackRow from "./TrackRow";
import { RequestTrack, Validator } from "@/types";
import type { FC } from "react";

interface TrackTableProps {
  tracks: RequestTrack[];
  expandedId: number | null;
  setExpandedId: (id: number | null) => void;
  visibleLinkId: number | null;
  setVisibleLinkId: (id: number | null) => void;
  groupByStatus: (validators: Validator[]) => {
    approved: Validator[];
    rejected: Validator[];
    viewed: Validator[];
  };
}

const TrackTable: FC<TrackTableProps> = ({
  tracks,
  expandedId,
  setExpandedId,
  visibleLinkId,
  setVisibleLinkId,
  groupByStatus,
}) => {
  return (
    <div className="flex flex-col w-full overflow-x-auto">
      {/* Header - only for md and up */}
      {/* <div className="hidden md:flex bg-[#1E2A3A] text-white font-semibold text-xs py-3 px-4 rounded-t-md min-w-[900px]">
        <div style={{ width: "150px" }}>Status</div>
        <div style={{ width: "80px" }}>Link</div>
        <div style={{ width: "150px" }}>Title</div>
        <div style={{ width: "180px" }}>Description</div>
        <div style={{ width: "140px" }}>File URL</div>
        <div style={{ width: "120px" }}>Sources</div>
        <div style={{ width: "100px" }}>Date</div>
      </div> */}

      {/* Data rows */}
      <div className="flex flex-col-reverse">
        {tracks.map((track) => (
          <TrackRow
            key={track.id}
            track={track}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
            visibleLinkId={visibleLinkId}
            setVisibleLinkId={setVisibleLinkId}
            groupByStatus={groupByStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackTable;
