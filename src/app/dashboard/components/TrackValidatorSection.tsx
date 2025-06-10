"use client";

import { Validator } from "@/types";
import { formatDate } from "@/tools/utils";
import type { FC } from "react";


interface TrackValidatorSectionProps {
  validators: Validator[];
  all_source: Record<string, string>;
  groupByStatus: (validators: Validator[]) => {
    approved: Validator[];
    rejected: Validator[];
    viewed: Validator[];
  };
}

const statusLabel = {
  approved: "Approved",
  rejected: "Rejected",
  viewed: "Viewed",
};

const statusColor = {
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  viewed: "bg-gray-100 text-gray-700",
};

const TrackValidatorSection: FC<TrackValidatorSectionProps> = ({
  validators,
  all_source,
  groupByStatus,
}) => {
  if (validators.length === 0) {
    return (
      <div className="bg-gray-50 p-4">
        <p className="text-sm font-semibold mb-2">Validators</p>
        <p className="text-gray-500 text-sm italic">No validation yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-4 space-y-4 overflow-x-auto">
      <p className="text-sm font-semibold">Validators</p>

      {(["approved", "rejected", "viewed"] as const).map((status) => {
        const grouped = groupByStatus(validators)[status];
        if (grouped.length === 0) return null;

        return (
          <div key={status} className="space-y-2 min-w-[700px]">
            {/* Label */}
            <h4
              className={`text-xs font-medium inline-block px-3 py-1 rounded-full ${statusColor[status]}`}
            >
              {statusLabel[status]} ({grouped.length})
            </h4>

            {/* Table Header (only on desktop) */}
            <div className="hidden md:flex font-semibold bg-white border px-4 py-2 rounded-md text-sm">
              <div style={{ width: "140px" }}>Name / Email</div>
              <div style={{ width: "100px" }}>Source</div>
              <div style={{ width: "300px" }}>Comment</div>
              <div style={{ width: "120px" }}>Date</div>
            </div>

            {/* Validators list */}
            <div className="space-y-2">
              {grouped.map((val) => {
                const sourceLabel =
                  Object.entries(all_source).find(([, key]) => key === val.source)?.[0] || "—";

                return (
                  <div
                    key={val.id}
                    className="flex flex-col md:flex-row bg-white px-4 py-3 rounded-md text-sm gap-2 md:gap-0"
                  >
                    <div>
                      <span className="md:hidden font-semibold text-gray-500">
                        Name / Email:{" "}
                      </span>
                      <div className="w-full md:w-[140px]" >
                      
                      {val.email_or_name || "—"}
                    </div>
                    </div>
                    
                    <div>
                      <span className="md:hidden font-semibold text-gray-500">
                        Source:{" "}
                      </span>
                      <div className="w-full md:w-[100px] text-gray-600" >

                      {sourceLabel}
                    </div>
                    </div>
                    
                    <div>
                      <span className="md:hidden font-semibold text-gray-500">
                        Comment:{" "}
                      </span>
                      <div className="w-full md:w-[300px] text-gray-500" >
                      
                      {val.comment || "No comment"}
                    </div>
                    </div>
                    

                    <div className="w-full md:w-[120px] text-xs text-gray-400">
                      <span className="md:hidden font-semibold text-gray-500">
                        Date:{" "}
                      </span>
                      {formatDate(val.responded_at)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrackValidatorSection;
