// components/ProjectSessionsPopup.tsx
"use client";

import { FC } from "react";
import { TimeEntry, Project } from "@/types";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  onClose: () => void;
  project: Project & { time_entries: TimeEntry[] };
}

const ProjectSessionsPopup: FC<Props> = ({ onClose, project }) => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex justify-center items-center px-4">
      <div className="relative bg-white w-full max-w-3xl max-h-[90vh]  rounded-xl shadow-xl p-6 print:p-10 print:shadow-none print:max-h-none">
        
        {/* Close button (hidden in print mode) */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black print:hidden"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Project Report</h1>
          <p className="text-sm text-gray-500">
            Project: <span className="font-semibold">{project.name}</span>
          </p>
        </div>

        {/* Sessions list */}
        <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg ">
          {project.time_entries.map((entry) => (
            <div key={entry.id} className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div><span className="font-semibold">Date:</span> {entry.date}</div>
              <div><span className="font-semibold">Hours:</span> {entry.hours}h</div>
              <div className="italic text-gray-600">
                {entry.note ? (
                  <>Note: {entry.note}</>
                ) : (
                  <span className="italic text-zinc-600">No note</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons (hidden in print mode) */}
        <div className="mt-6 flex justify-center gap-4 print:hidden">
         {project.time_entries.length !== 0 ? <button
            onClick={() => router.push(`/reports/new?project_id=${project.id}`)}
            className="px-5 py-2 bg-[var(--btn-bg)] text-white rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer"
          >
            Create Report
          </button> : "Empty"}
          {/* <button
            onClick={() => window.print()}
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer hover:text-white"
          >
            Print
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectSessionsPopup;
