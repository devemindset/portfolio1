"use client";

import { FC } from "react";

const TrackTableSkeleton: FC = () => {
  return (
    <div className="flex flex-col-reverse animate-pulse">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div
          key={idx}
          className="bg-white shadow-sm rounded-md mb-4 p-4 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-[140px_100px_150px_150px_120px_80px_180px] gap-4">
            {Array.from({ length: 7 }).map((_, subIdx) => (
              <div key={subIdx} className="space-y-2">
                <div className="h-3 w-20 bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-300 rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackTableSkeleton;
