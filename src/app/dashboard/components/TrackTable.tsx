"use client";

import TrackRow from "./TrackRow";
import { RequestTrack, Validator } from "@/types";
import type { FC } from 'react';

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
};


const TrackTable: FC<TrackTableProps> = ({
  tracks,
  expandedId,
  setExpandedId,
  visibleLinkId,
  setVisibleLinkId,
  groupByStatus,
}) => {
        return (
    <div className="flex flex-col">
      {/* Header - visible only on desktop */}
      {/* <div className="hidden md:grid grid-cols-7 gap-4 text-xs font-semibold bg-[#1E2A3A] text-white py-3 px-4 rounded-t-md min-w-[900px]">
        <div>Title</div>
        <div>Description</div>
        <div>File URL</div>
        <div>Sources</div>
        <div>Date</div>
        <div>Links</div>
        <div>Count</div>
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
}
export default TrackTable;